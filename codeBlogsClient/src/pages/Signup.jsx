import {
  // createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase/firebase.config";

const Signup = () => {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const userData = { name, email, password };
    console.log(userData);

    try {
      const response = await fetch("http://localhost:8080/auth/signup", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
      toast.success("Successfully sign up!");
      e.target.reset();
      navigate("/login");
    } catch (error) {
      console.log("error:", error);
    }

    // createUserWithEmailAndPassword(auth, email, password)
    //   .then((userCredential) => {
    //     const user = userCredential.user;
    //     console.log(user);
    //   })
    //   .catch((error) => console.log("error", error.message));
  };

  const handleGoogleSignIn = () => {
    //google authentication
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const handleGithubSignIn = () => {
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        console.log(token, user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        console.log(errorCode, errorMessage, email, credential);
      });
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-center mb-2">Sign Up</h1>
          <p className="text-end ">here...</p>
        </div>
        <div className="card bg-base-100 border border-[#1D3F72] dark:border-gray-50 w-full max-w-sm shrink-0 shadow-2xl rounded-none">
          <Toaster></Toaster>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Name"
                className="input input-bordered rounded-none"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
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
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered rounded-none"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Or Sign in with
                </a>
              </label>
              <div className="flex gap-5">
                <FaGoogle
                  className="cursor-pointer"
                  onClick={handleGoogleSignIn}
                ></FaGoogle>
                <FaGithub
                  className="cursor-pointer"
                  onClick={handleGithubSignIn}
                ></FaGithub>
              </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
              <label className="label text-xs justify-start">
                Already have an account:
                <Link to="/login" className="link link-hover text-[#2AAAB8]">
                  Log in here...
                </Link>
              </label>
            </div>
            <button
              type="submit"
              className="btn btn-md relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-semibold transition-all bg-[#2AAAB8] border border-[#1D3F72] rounded-none hover:bg-white group"
            >
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-[#1D3F72] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-white">
                Sign up
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Signup;
