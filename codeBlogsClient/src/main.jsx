import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Layout from "./layout/Layout";
import BlogDetails from "./pages/BlogDetails";
import Blogs from "./pages/Blogs";
import CreateBlog from "./pages/CreateBlog";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import UpdateBlog from "./pages/UpdateBlog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
        loader: () => fetch("http://localhost:8080/blog/all-blog"),
      },
      {
        path: "/blogs/:id",
        element: <BlogDetails></BlogDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:8080/blog/all-blog/${params.id}`),
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/create-blog",
        element: <CreateBlog></CreateBlog>,
      },
      {
        path: "/update-blog/:id",
        element: <UpdateBlog></UpdateBlog>,
        loader: ({ params }) =>
          fetch(`http://localhost:8080/blog/all-blog/${params.id}`),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
    <Toaster></Toaster>
  </StrictMode>
);
