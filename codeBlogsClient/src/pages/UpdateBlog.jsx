import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateBlog = () => {
  const blogData = useLoaderData();
  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const content = e.target.content.value;
    const updateBlog = { title, content };

    try {
      await fetch(`http://localhost:8080/blog/update-blog/${blogData._id}`, {
        method: "PUT",
        body: JSON.stringify(updateBlog),
        headers: { "Content-Type": "application/json" },
      }).then((res) => res.json());
      toast.success("Blog updated successfully");
      navigate(`/blogs/${blogData._id}`);
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error updating blog",
        error: error.message,
      });
    }
  };

  return (
    <div>
      <Toaster></Toaster>
      <div className="flex flex-col w-2/4 mx-auto m-5 rounded-none sm:p-10 bg-gray-50 text-gray-800 shadow-lg">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-3xl font-bold">Want to change your mind?</h1>
          <p className="text-sm text-gray-600">Edit your blog...</p>
        </div>
        <form
          onSubmit={handleUpdate}
          noValidate=""
          action=""
          className="space-y-6"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Title
              </label>
              <input
                type="text"
                name="title"
                id="email"
                placeholder=""
                defaultValue={blogData.title}
                className="w-full px-3 py-2 border rounded-none border-gray-300 bg-gray-50 text-gray-800"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="content" className="text-sm">
                  Content
                </label>
              </div>
              <textarea
                name="content"
                type="text"
                id="content"
                defaultValue={blogData.content}
                className="w-full px-3 py-2 border rounded-none border-gray-300 bg-gray-50 text-gray-800"
              ></textarea>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="btn btn-md relative inline-flex items-center justify-start px-6 py-3 mt-2 overflow-hidden font-semibold transition-all bg-[#2AAAB8] border border-[#1D3F72] rounded-none hover:bg-white group"
            >
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#1D3F72] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">
                Update
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateBlog;
