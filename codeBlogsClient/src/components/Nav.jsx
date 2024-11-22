import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FaUserCircle } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeChange = (e) => {
    if (e.target.checked && theme === "light") {
      setTheme("dracula");
    } else {
      setTheme("light");
    }
  };

  const authenticate = localStorage.getItem("jwtToken");
  const userEmail = localStorage.getItem("userName");

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("userName");
    toast.success("Logout Successfull");
    navigate("/login");
  };

  return (
    <div className="navbar bg-base-100 shadow-lg">
      <Toaster></Toaster>
      <div className="flex-1">
        <a
          className={`text-2xl font-bold  uppercase ${() => {
            e.target.checked ? "text-white" : "text-[#1D3F72]";
          }}}`}
        >
          code<span className="text-[#2AAAB8]">Blogs</span>
        </a>
      </div>
      <div className="flex-none">
        <ul className="flex items-center gap-3 px-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? `active ${() =>
                    e.target.checked
                      ? "text-white"
                      : "text-[#1D3F72]"} font-semibold`
                : "text-[#2AAAB8] font-semibold"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              isActive
                ? `active ${() =>
                    e.target.checked
                      ? "text-white"
                      : "text-[#1D3F72]"} font-semibold`
                : "text-[#2AAAB8] font-semibold"
            }
          >
            All Blogs
          </NavLink>
          {/* <NavLink
            to="/bookmarks"
            className={({ isActive }) =>
              isActive
                ? `active ${() =>
                    e.target.checked
                      ? "text-white"
                      : "text-[#1D3F72]"} font-semibold`
                : "text-[#2AAAB8] font-semibold"
            }
          >
            Bookmarks
          </NavLink> */}
          {/* <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive
                  ? `active ${() =>
                      e.target.checked
                        ? "text-white hidden"
                        : "text-[#1D3F72]"} font-semibold`
                  : "text-[#2AAAB8] font-semibold"
              }
            >
              Sign Up
            </NavLink> */}

          {authenticate ? (
            <>
              <NavLink
                onClick={handleLogout}
                className="text-[#2AAAB8] font-semibold"
              >
                Logout
              </NavLink>
              <NavLink
                to="/create-blog"
                className={({ isActive }) =>
                  isActive
                    ? `active ${() =>
                        e.target.checked
                          ? "text-white hidden"
                          : "text-[#1D3F72]"} font-semibold`
                    : "text-[#2AAAB8] font-semibold"
                }
              >
                New Blog
              </NavLink>
              <li className="tooltip tooltip-bottom" data-tip={userEmail}>
                <FaUserCircle className="text-2xl cursor-pointer"></FaUserCircle>
              </li>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? `active ${() =>
                        e.target.checked
                          ? "text-white hidden"
                          : "text-[#1D3F72]"} font-semibold`
                    : "text-[#2AAAB8] font-semibold"
                }
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive
                    ? `active ${() =>
                        e.target.checked
                          ? "text-white hidden"
                          : "text-[#1D3F72]"} font-semibold`
                    : "text-[#2AAAB8] font-semibold"
                }
              >
                Sign Up
              </NavLink>
            </>
          )}
          <li>
            <label className="flex cursor-pointer gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <input
                id="theme"
                onClick={handleThemeChange}
                type="checkbox"
                className="toggle theme-controller"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
