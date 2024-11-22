import toast, { Toaster } from "react-hot-toast";
import { FaEdit } from "react-icons/fa";
import { IoIosBookmarks } from "react-icons/io";
import { RiDeleteBin2Fill } from "react-icons/ri";
import Markdown from "react-markdown";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import rehypeRaw from "rehype-raw";
import { saveBlogs } from "../utils/localStorage";
const BlogDetails = () => {
  const blogDetails = useLoaderData();
  const navigate = useNavigate();
  const { _id, title, content, author, createdAt } = blogDetails;

  const userName = localStorage.getItem("userName");

  const handleBookmark = (blog) => {
    saveBlogs(blog);
  };

  const handleDelete = async (_id) => {
    try {
      window.confirm("are you sure to delete?");
      await fetch(`http://localhost:8080/blog/delete-blog/${_id}`, {
        method: "DELETE",
      });
      toast.success("Blog deleted successfully");
      navigate("/blogs");
    } catch (error) {
      console.log("error:", error.message);
    }
  };

  return (
    <div className="min-h-[calc(100vh-120px)] px-6 pb-16 mx-auto space-y-12">
      <Toaster></Toaster>
      <article className="space-y-8 bg-gray-800 dark:bg-gray-100 text-gray-50 dark:text-gray-900 p-5 mt-10">
        <div className="space-y-6">
          <div className="flex justify-between">
            <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
              {title}
            </h1>
            <div className="flex gap-5">
              {userName === author && (
                <Link to={`/update-blog/${_id}`}>
                  <FaEdit
                    title="Edit this blog?"
                    className="text-3xl text-indigo-900 cursor-pointer"
                  ></FaEdit>
                </Link>
              )}
              {userName === author && (
                <RiDeleteBin2Fill
                  onClick={() => handleDelete(_id)}
                  title="Delete this blog?"
                  className="text-3xl text-indigo-900 cursor-pointer"
                ></RiDeleteBin2Fill>
              )}
              <IoIosBookmarks
                title="Bookmark this content"
                className="text-3xl text-indigo-900 cursor-pointer"
                onClick={() => handleBookmark(blogDetails)}
              ></IoIosBookmarks>
            </div>
          </div>

          <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center text-gray-400 dark:text-gray-600">
            <div className="flex items-center md:space-x-2">
              <img
                src=""
                alt=""
                className="w-10 h-10 border rounded-full bg-gray-500 dark:bg-gray-500 border-gray-700 dark:border-gray-300"
              />
              <p className="text-sm">
                Author: {author} • {createdAt}
              </p>
            </div>
            <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
              {} min read • {} views
            </p>
          </div>
        </div>
        <div className="text-gray-100 dark:text-gray-800">
          <p>
            <Markdown rehypePlugins={[rehypeRaw]}>{content}</Markdown>
          </p>
        </div>
      </article>
    </div>
  );
};

export default BlogDetails;
