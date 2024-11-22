import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  // const [jwtToken, setJwtToken] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const user = { email, password };

    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        body: JSON.stringify(user),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          localStorage.setItem("jwtToken", data.jwtToken);
          localStorage.setItem("userName", data.name);
        });
      toast.success("Login successfull");
      navigate("/blogs");
    } catch (error) {
      console.log("Error: ", error.message);
    }
  };

  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-center mb-2">Login</h1>
          <p className="text-end ">here...</p>
        </div>
        <div className="card bg-base-100 border border-[#1D3F72] dark:border-gray-50 w-full max-w-sm shrink-0 shadow-2xl rounded-none">
          <Toaster></Toaster>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered rounded-none"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered rounded-none"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <label className="label text-xs justify-start">
                New here:
                <Link to="/signup" className="link link-hover text-[#2AAAB8]">
                  Sign Up here...
                </Link>
              </label>
            </div>
            <button className="btn btn-md relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-semibold transition-all bg-[#2AAAB8] border border-[#1D3F72] rounded-none hover:bg-white group">
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#1D3F72] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">
                Login
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
