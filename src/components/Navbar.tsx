import React from "react";

const Navbar = () => {
  return (
    <>
      <header className="text-white p-5  ">
        <div className="flex justify-between flex-row">
          <div>
            <img src="/harmburger.png" className="" alt="" />
          </div>

          <a className="">
            <span className="block">
              <img src="/dawn-logo.png" className="" alt="" />
            </span>
          </a>

          <div className="flex gap-3 justify-center items-center">
            <span className="bg-red-600 h-2 w-2 rounded-lg"></span>
            <span className="bg-blue-600 h-2 w-2 rounded-lg"></span>
            <span className="bg-green-600 h-2 w-2 rounded-lg"></span>
          </div>
        </div>

        <div className="bg-[#0c0e12] flex mt-10 text-center  rounded-full shadow-sm container ">
          <span className="block bg-transparent w-full p-3 rounded-full">
            Dawn School
          </span>
          <span className="block bg-[#B91381] w-full p-3 rounded-full">
            Dawn Students
          </span>
        </div>

        <div className="bg-[#0c0e12] mt-5 rounded-md">
          <input type="search" />
        </div>

        <div className="rounded-md mt-10 p-5 gap-10 shadow-sm bg-[#0c0e12]  grid grid-cols-4 place-content-center place-items-center ">
          <div className="flex justify-center items-center flex-col  p-2">
            <img className="w-5 h-5" src="/harmburger.png" alt="" />
            <h5 className="capitalize ">all</h5>
          </div>
          <div className="flex justify-center items-center flex-col  p-2">
            <img className="w-5 h-5" src="/one.png" alt="" />
            <h5 className="capitalize ">planning</h5>
          </div>
          <div className="flex justify-center items-center flex-col  p-2">
            <img className="w-5 h-5" src="/two.png" alt="" />
            <h5 className="capitalize ">all</h5>
          </div>
          <div className="flex justify-center items-center flex-col  p-2">
            <img className="w-5 h-5" src="/three.png" alt="" />
            <h5 className="capitalize ">all</h5>
          </div>
        </div>

        {/* Features */}
        <div className="rounded-md mt-10 p-5 gap-10 shadow-sm bg-[#0c0e12]  grid grid-cols-4 place-content-center place-items-center">
          <h3>Favourites</h3>

          <div>
            <div>
              <span>
                <img src="" alt="" />
              </span>
              <h5>Professional Emails</h5>
            </div>

            <p>Create and manage professional communication..</p>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
