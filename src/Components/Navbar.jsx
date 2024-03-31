import React, { useState, useEffect } from "react";

import { useNavigate, Link } from "react-router-dom";
import { useAppContext } from "./../Context/Context";

function Navbar() {
  const [userDetails, setuserDetails] = useState();
  const Navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("UserDetails"));
    setuserDetails(user);
  }, []);

  const { ShowLogOut, setShowLogOut } = useAppContext();

  function LogOut() {
    localStorage.clear("users");
    Navigate("/LoginForm");
    setShowLogOut(false);
  }

  return (
    <>
      <nav className="bg-white items-center shadow-md z-20 sticky top-0 border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          {userDetails ? (
            <Link
              to="/MainPage"
              href="#"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                The Budget App
              </span>
            </Link>
          ) : (
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              The Budget App
            </span>
          )}

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link to="/"
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About
                </a>
              </li>

              <li>
                {userDetails && (
                  <a
                    href="#"
                    className="block py-2 px-3 text-gray-900 font-extrabold  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    {userDetails.NAME}
                  </a>
                )}
              </li>
              {userDetails ? (
                <div className="avatar w-24 h-10 ">
                  <div className=" rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  </div>
                </div>
              ) : null}

              <li>
                {ShowLogOut ? (
                  <button
                    onClick={() => LogOut()}
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    LogOut
                  </button>
                ) : null}
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
