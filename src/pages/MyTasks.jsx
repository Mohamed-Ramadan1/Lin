import React from "react";

function MyTasks() {
  return (
    <div className="">
      <div className="viewCoursePage relative px-[124px] max-2xl:px-[30px] max-sm:py-[30px] max-sm:px-[15px]">
        <h2 className="font-bold">Today's Tasks</h2>
        <p className="text-gray-300">fep,air,13</p>
      </div>
      <div className="viewCoursePage relative px-[124px] max-2xl:px-[30px] max-sm:py-[30px] max-sm:px-[15px] my-3 flex gap-3">
        <div className="">
          All{" "}
          <span className="bg-blue-600 text-white px-5 rounded mx-2">8</span>
        </div>
        <div className="">
          Open{" "}
          <span className="bg-blue-600 text-white px-5 rounded mx-2">3</span>
        </div>
        <div className="">
          Done{" "}
          <span className="bg-blue-600 text-white px-5 rounded mx-2">6</span>
        </div>
      </div>
      <div className="viewCoursePage relative flex justify-center items-center px-[124px] py-[70px] max-2xl:px-[30px] max-sm:py-[30px] max-sm:px-[15px]">
        <div className="container max-w-[1400px] m-auto flex flex-col gap-10  justify-center items-center">
          <div className="sub-container flex flex-col w-full md:flex-row md:gap-[10px]">
            <div className="basis-full flex flex-col gap-[20px] max-md:gap-[30px] mb-3">
              {/* create task form*/}
              <input className="bg-gray-100 border-0 rounded-0 p-3 outline-0 " placeholder="Add a task" />
              {/* description */}
              <textarea className="bg-gray-100 border-0 rounded-0 p-3 outline-0" placeholder="Description" />
              {/* add button */}
              <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-800">Add</button>



              <div className="bg-[#F6F6F6] rounded p-3">
                <div className="bg-white p-3 flex align-center justify-between mt-2">
                  <div className="">
                    <h3 className="font-bold">what doy you want</h3>
                    <p className="text-gray-300">ah alah ya man</p>
                  </div>
                  <div className="flex gap-3">
                    <button className="bg-green-500 text-white p-2 rounded hover:bg-green-800">
                      Done
                    </button>
                    <button className="bg-red-500 text-white p-2 rounded hover:bg-red-800">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="basis-1/3 rounded-[5px] p-[50px] bg-[#F6F6F6] text-center h-[30vh]">
              <h1 className="font-bold">03:21</h1> <br />
              <h2>Monday, 21 June 2021</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyTasks;
