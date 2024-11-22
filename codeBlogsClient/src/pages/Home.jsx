import { Link } from "react-router-dom";
import wave from "../assets/img.png";
import "./home.css";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-120px)] relative">
      <img className="absolute right-0 top-0 w-3/4 h-full" src={wave} alt="" />

      <div className="w-[50%] pt-[8%] px-14">
        <h1 className="text-4xl font-bold">
          WELCOME TO {""}
          <span
            className={`bg-gradient-to-r from-[#1D3F72] via-[#29A0B1] to-[#2AAAB8] text-transparent bg-clip-text animate-gradient bg-300%`}
          >
            CODE BLOGS
          </span>
        </h1>
        <p className="py-6">
          Welcome to CodeBlogs, your go-to destination for all things coding!
          Whether you’re a seasoned developer, a curious beginner, or somewhere
          in between, our blog is designed to inspire and educate.
        </p>
        <Link
          to="/blogs"
          className="mr-6 btn btn-md relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-semibold transition-all bg-[#2AAAB8] border border-[#1D3F72] rounded-none hover:bg-white group"
        >
          <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#1D3F72] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">
            Blogs
          </span>
        </Link>
        {/* <Link
          to="/login"
          className="mr-6 btn btn-md relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-semibold transition-all bg-[#2AAAB8] border border-[#1D3F72] rounded-none hover:bg-white group"
        >
          <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#1D3F72] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
          <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">
            Login
          </span>
        </Link> */}
      </div>
    </div>
  );
};

export default Home;
