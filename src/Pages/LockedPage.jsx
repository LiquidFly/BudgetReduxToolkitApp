import React from "react";
import { Link } from "react-router-dom";

function LockedPage() {
  return (
    <div className="flex relative flex-col gap-40 text-white mx-12 p-4 mt-5">
      <Link
        to="/SignUpForm"
        className="flex  transform hover:scale-105 transition duration-500 overflow-hidden hover:cursor-pointer hover:shadow-xl hover:shadow-purple-600 text-2xl rounded-md justify-between px-5 bg-pink-700 py-4"
      >
        <p>Create An Account To Unlock The Budget App</p>
        <button>
          <button>SignUp?</button>
        </button>
      </Link>
      <Link
        to="/LoginForm"
        className="flex  transform hover:scale-105 transition duration-500 overflow-hidden hover:cursor-pointer hover:shadow-xl hover:shadow-pink-600  text-2xl rounded-md justify-between px-5 bg-yellow-600 py-4"
      >
        <p>Already Have An Account Then Login To Unlock The Budget App</p>
        <button>
          <button>Login?</button>
        </button>
      </Link>
    </div>
  );
}

export default LockedPage;
