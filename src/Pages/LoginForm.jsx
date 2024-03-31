import React, { useState } from "react";
import Container from "../Components/Container";
import { toast } from "react-hot-toast";
import { useAppContext } from "./../Context/Context";
import { signInWithEmailAndPassword } from "firebase/auth";
import Loader from "./../Components/Loader";
import { useNavigate, Link } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";

function LoginForm() {
  const { FirebaseAuth, FirebaseDB, setShowLogOut } = useAppContext();
  const Navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [loader, setloader] = useState();

  // Function for LogIn The User
  async function LogInUser() {
    setloader(true);
    try {
      if (Email === "" || Password === "") {
        toast.error("Please enter All Fields");
        setTimeout(() => {
          setloader(false);
        }, 300);
      } else {
        await signInWithEmailAndPassword(FirebaseAuth, Email, Password);
        toast.success("Welcome User");

        // Fetching data From Backend
        const CollectionRef = collection(FirebaseDB, "ListOfUsers");
        const q = query(CollectionRef, where("EMAIL", "==", Email));
        const QuerySnapShot = await getDocs(q);
        let user;
        QuerySnapShot.forEach((doc) => {
          user = doc.data();
        });
        setShowLogOut(true);
        // Storing user Data To localStorage
        localStorage.setItem("UserDetails", JSON.stringify(user));
        Navigate("/MainPage");
        setloader(false);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
      setloader(false);
    }
  }

  return (
    <Container>
      <section className="dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-[#E8EE55] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <div className="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={Email}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                  {loader && (
                    <div className="absolute left-[690px]">
                      <Loader></Loader>
                    </div>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={Password}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <button
                  onClick={() => LogInUser()}
                  type="submit"
                  className="w-full text-white bg-purple-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link
                    to="/SignUpForm"
                    href="#"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default LoginForm;
