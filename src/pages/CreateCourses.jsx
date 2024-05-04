import React from "react";

function CreateCourses() {
  return (
    <div>
      <div className="p-5">
        <h1 className="text-2xl font-semibold">
          Dashboard / <span className="text-blue-600">Create Courses</span>{" "}
        </h1>
        <form action="">
          <input type="text" placeholder="Title" className="p-3 w-full mt-5" />
          <input
            type="text"
            placeholder="Description"
            className="p-3 w-full mt-5"
          />
          <input
            type="text"
            placeholder="Duration"
            className="p-3 w-full mt-5"
          />
          <input
            type="text"
            placeholder="Instructors"
            className="p-3 w-full mt-5"
          />
          <div class="flex-1 items-center max-w-screen-sm mx-auto mb-3 space-y-4 sm:flex sm:space-y-0 my-5">
            <div class="relative w-full">
              <div class="items-center justify-center max-w-xl mx-auto">
                <label
                  class="flex justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none"
                  id="drop"
                >
                  <span class="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-6 h-6 text-gray-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      ></path>
                    </svg>
                    <span class="font-medium text-gray-600">
                      Drop files to Attach, or
                      <span class="text-blue-600 underline ml-[4px]">
                        browse
                      </span>
                    </span>
                  </span>
                  <input
                    type="file"
                    name="file_upload"
                    class="hidden"
                    accept="image/png,image/jpeg"
                    id="input"
                  />
                </label>
              </div>
            </div>
          </div>

          <button className="bg-blue-600 text-white p-3 rounded-lg mt-5 w-full">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateCourses;
