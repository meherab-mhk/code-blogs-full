import { Link } from "react-router-dom";
import notAnImg from "../assets/No_Image_Available.jpg";
const Blog = ({ blog }) => {
  const { _id, cover_image, title, author } = blog;

  return (
    <Link to={`/blogs/${_id}`}>
      <article className="flex flex-col border border-gray-300 shadow-lg h-full">
        <img
          alt=""
          className="object-cover w-full h-52"
          src={cover_image || notAnImg}
        />
        <div className="flex flex-col flex-1 p-6">
          <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
            {title}
          </h3>
          <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-400 dark:text-gray-600">
            <span>{author}</span>
            <span>2.2K views</span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default Blog;
