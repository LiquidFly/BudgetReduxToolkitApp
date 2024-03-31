import React from "react";
import Container from "./../Components/Container";
import LockedPage from "./LockedPage";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <Container>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-full mb-52">
            <h1 className="mb-5 text-9xl font-bold">The Budget App</h1>
            <p className="mb-5 text-3xl font-semibold">
              Create An Account To Enter The App
            </p>
            <div className="flex flex-col gap-10">
              <Link
                to="/SignUpForm"
                className="flex  transform hover:scale-105 transition duration-500 overflow-hidden hover:cursor-pointer hover:shadow-xl hover:shadow-purple-600 text-2xl rounded-md justify-between px-5 bg-[#3ED7C5] py-4"
              >
                <p>Create An Account To Unlock The Budget App</p>
                <button>
                  <button>SignUp?</button>
                </button>
              </Link>
              <Link
                to="/LoginForm"
                className="flex  transform hover:scale-105 transition duration-500 overflow-hidden hover:cursor-pointer hover:shadow-xl hover:shadow-white text-2xl rounded-md justify-between px-5 bg-[#E9A594] py-4"
              >
                <p>
                  Already Have An Account Then Login To Unlock The Budget App
                </p>
                <button>
                  <button>Login?</button>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Homepage;
