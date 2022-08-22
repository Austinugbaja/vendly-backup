import Link from "next/link";
import React from "react";

const login = () => {
  return (
    <div className="w-full h-[100vh] relative">
      <div className="flex">
        {/* left panel */}
        <div className="hidden bg-primary text-white font-Raleway w-[50%] h-[100vh] sm:flex justify-between items-center flex-col py-[3rem] text-center">
          <div className="text-[1.2rem] font-[400] px-6">
            Monitor your sales, insights and boost your business
          </div>
          <div>
            <img
              style={{ width: "300px", height: "300px", display: "block" }}
              src="/login_vector.svg"
              alt=""
            />
          </div>
          <div>
            <div className="font-[20px] mb-3">Dont have an account?</div>
            <Link href="/auth/signup">
              <button className="py-4 px-6 min-w-[192px] bg-white rounded-md text-primary uppercase font-semibold tracking-widest">
                create account
              </button>
            </Link>
          </div>
        </div>

        {/* right panel */}
        <div className="flex items-center justify-center w-full">
          <div className="bg-white w-full sm:w-[55%] h-[100vh] text-center py-[3rem] flex flex-col justify-center">
            <h1 className="text-[1.4rem] mb-6 font-Raleway font-[600]">
              LOG IN
            </h1>
            <form className="font-Poppins">
              {/* email adddress */}
              <div className="w-full mb-4">
                <input
                  className="w-full h-10 px-3 py-6 text-base placeholder-gray-600 border rounded-md focus:outline-primary transition-all duration-150 "
                  type="email"
                  placeholder="Enter Email Address"
                  required
                  //   value={""}
                  //   onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* password */}
              <div className="w-full mb-4">
                <input
                  className="w-full h-10 px-3 py-6 text-base placeholder-gray-600 border rounded-md focus:outline-primary transition-all duration-150 "
                  type="password"
                  placeholder="Password"
                  required
                  //   value="password"
                  //   onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="mt-[3rem] text-sm mb-[2rem] px-6 sm:px-0">
                By creating an account you agree to our{" "}
                <span className="text-primary font-[500]">
                  TERMS & CONDITION
                </span>{" "}
                and{" "}
                <span className="text-primary font-[500]">PRIVACY POLICY</span>
              </div>

              <button className="py-4 px-6 min-w-[192px] bg-primary rounded-md text-white uppercase tracking-widest">
                LOGIN
              </button>

              <div className="sm:hidden flex justify-center mt-6">
                Dont have an account?
                <Link href="/auth/signup" passHref>
                  <a className="text-primary font-[600] ml-2 uppercase">
                    Create account
                  </a>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* modal */}
      <div
        className={`${
          true ? "hidden" : "flex"
        } absolute top-0 w-full h-[100vh]  justify-center items-center`}
        style={{ background: "rgba(0,0,0,0.555)" }}
      >
        <svg
          role="status"
          className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      </div>
    </div>
  );
};

export default login;
