import React, { useState, useEffect } from "react";
// import WhiteButton from "../Buttons/WhiteButton";
// import { FiAlignJustify } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useAuth } from "../../Providers/AuthProvider";
import abort from "../../utils/abort";

const Navbar = () => {
  const { authUser } = useAuth();
  const [tokenInvalid, setTokenInvalid] = useState(false);

  useEffect(() => {
    (async function () {
      setTokenInvalid(await abort());
    })();
  }, []);

  // const [open, setOpen] = useState(true);

  // useEffect(() => {
  //   if (document.documentElement.offsetWidth < 768 && open) {
  //     setOpen(false);
  //   }

  //   const resizeEventListener = function (e) {
  //     if (document.documentElement.offsetWidth > 768) {
  //       setOpen(true);
  //     } else {
  //       setOpen(false);
  //     }
  //   };

  //   window.addEventListener("resize", resizeEventListener);
  //   return () => {
  //     window.removeEventListener("resize", resizeEventListener);
  //   };
  // }, []);

  // const onClickHandler = (e) => setOpen((open) => !open);

  return (
    <div className="navbar z-10 bg-themeColor hover:text-themeColor  shadow-2xl fixed">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden"></label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">
          <img className="w-34" src="/images/logo.png" alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li tabIndex={0}>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/booking">Booking</Link>
          </li>
          <li tabIndex={0}>
            <a>
              Tools
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2 text-white bg-themeColor">
              <li>
                <Link to="/ovulationCalc">Ovulation Calculator</Link>
              </li>
              {/* <li>
                <Link to="/pregnancycalculator">
                  Pregnancy Due date Calculator
                </Link>
              </li> */}
            </ul>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {!!authUser.firstName && !tokenInvalid ? (
          <>
            <Link to="/profile">
              <button className="py-2 px-4 rounded-full text-themeColor border-0 bg-white mr-2">
                Profile
              </button>
            </Link>

            <Link to="/posts">
              <button className="py-2 px-4 rounded-full text-themeColor border-0 bg-white ">
                Posts
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="py-2 px-4 rounded-full text-themeColor border-0 bg-white mr-2">
                Login
              </button>
            </Link>

            <Link to="/signup">
              <button className="py-2 px-4 rounded-full text-themeColor border-0 bg-white ">
                Sign up
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
