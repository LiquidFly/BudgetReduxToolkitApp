import React, { useState } from "react";
import Container from "./../Components/Container";
import { toast } from "react-hot-toast";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import Loader from "./../Components/Loader";
import { useAppContext } from "./../Context/Context";
import { useNavigate,Link } from "react-router-dom";

function SignUpForm() {
  const Navigate = useNavigate();
  const { FirebaseAuth, FirebaseDB } = useAppContext();
  const [loader, setloader] = useState(false);
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const [Role, setRole] = useState("");

  // Function For Craeting A New User
  async function Createuser() {
    try {
      setloader(true);
      if (Name === "" || Password === "" || Email === "" || Role === "") {
        toast.error("Please enter all required fields");
        setTimeout(() => {
          setloader(false);
        }, 500);
      } else {
        await createUserWithEmailAndPassword(FirebaseAuth, Email, Password);

        // Creating User data
        const NewUser = {
          NAME: Name,
          PASSWORD: Password,
          EMAIL: Email,
          ROLE: Role,
        };
        // Storing User data into Firestore Dabase
        const CollectionRef = collection(FirebaseDB, "ListOfUsers");
        addDoc(CollectionRef, NewUser);
        toast.success("User created successfully!!");
        Navigate("/LoginForm");
        setloader(false);
      }
    } catch (error) {
      toast.error(error.message);
      setloader(false);
    }
  }

  return (
    <Container>
      <div>
        <section className="dark:bg-gray-900 ">
          <div className="flex flex-col  items-center justify-center px-3  py-2 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-[#B191E2] rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4  md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Create and account
                </h1>
                {/* <Loader></Loader> */}
                <div className="space-y-4  md:space-y-6" action="#">
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
                  </div>
                  {loader && (
                    <div className="absolute left-[690px]">
                      <Loader></Loader>
                    </div>
                  )}

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
                  <div>
                    <label
                      htmlFor="Name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Name
                    </label>
                    <input
                      onChange={(e) => setName(e.target.value)}
                      value={Name}
                      type="Name"
                      name="Name"
                      id="Name"
                      placeholder="Enter Your name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="Role"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Role
                    </label>
                    <input
                      onChange={(e) => setRole(e.target.value)}
                      value={Role}
                      type="Role"
                      name="Role"
                      id="Role"
                      placeholder="Enter Your Role"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>
                  <button
                    type=""
                    onClick={() => Createuser()}
                    className="w-full text-white bg-purple-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Create an account
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Already have an account?{" "}
                    <Link to="/LoginForm"
                      href="#"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Login here
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Container>
  );
}

export default SignUpForm;
