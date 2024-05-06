import React from "react";

function MyPaiedCourse() {
  return (
    <div className="">
      <div className="flex gap-3 flex-col md:flex-row m-5 ">
        <div className="w-full p-3 border bg-gray-800 rounded-[15px]">
          <div class="aspect-w-16 aspect-h-full w-full h-full">
            <iframe
              src="https://www.youtube.com/embed/vlDzYIIOYmM"
              frameborder="0"
              allowfullscreen
              class="w-full h-full"
            ></iframe>
          </div>
        </div>
        <div className="basis-1/3 ">
          <div className="bg-gray-800 text-yellow-500 p-3 text-center rounded-t-[30px]">
            Related Cours Videos
          </div>
          <div className="flex align-center gap-5 my-2 hover:bg-gray-100 duration-300">
            <div className="w-[100px] h-[100px] bg-gray-300 p-3"></div>
            <div className="info">
              <h1>react</h1>
              <p>more info</p>
            </div>
          </div>
          <div className="flex align-center gap-5 my-2 hover:bg-gray-100 duration-300">
            <div className="w-[100px] h-[100px] bg-gray-300 p-3"></div>
            <div className="info">
              <h1>react</h1>
              <p>more info</p>
            </div>
          </div>
          <div className="flex align-center gap-5 my-2 hover:bg-gray-100 duration-300">
            <div className="w-[100px] h-[100px] bg-gray-300 p-3"></div>
            <div className="info">
              <h1>react</h1>
              <p>more info</p>
            </div>
          </div>
          <div className="flex align-center gap-5 my-2 hover:bg-gray-100 duration-300">
            <div className="w-[100px] h-[100px] bg-gray-300 p-3"></div>
            <div className="info">
              <h1>react</h1>
              <p>more info</p>
            </div>
          </div>
        </div>
      </div>
      {/* course review */}
      <div className="max-w-[100%] md:max-w-[72.5%] reviwe m-5 ">
        <div class="bg-gray-100 p-6">
          <h2 class="text-lg font-bold mb-4">Comments</h2>
          <div class="flex flex-col space-y-4">
            <div class="bg-white p-4 rounded-lg shadow-md">
              <h3 class="text-lg font-bold">John Doe</h3>
              <p class="text-gray-700 text-sm mb-2">Posted on April 17, 2023</p>
              <p class="text-gray-700">
                This is a sample comment. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow-md">
              <h3 class="text-lg font-bold">Jane Smith</h3>
              <p class="text-gray-700 text-sm mb-2">Posted on April 16, 2023</p>
              <p class="text-gray-700">
                I agree with John. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow-md">
              <h3 class="text-lg font-bold">Bob Johnson</h3>
              <p class="text-gray-700 text-sm mb-2">Posted on April 15, 2023</p>
              <p class="text-gray-700">
                I have a different opinion. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
            </div>
            <form class="bg-white p-4 rounded-lg shadow-md">
              <h3 class="text-lg font-bold mb-2">Add a comment</h3>
              <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="name">
                  Rating
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="number"
                  placeholder="Enter your name"
                  minLength="0"
                  maxLength="5"
                />
              </div>
              <div class="mb-4">
                <label class="block text-gray-700 font-bold mb-2" for="comment">
                  Comment
                </label>
                <textarea
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="comment"
                  rows="3"
                  placeholder="Enter your comment"
                ></textarea>
              </div>
              <button
                class="bg-cyan-500 w-full hover:bg-gray-700 text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline bg-blue-700 rounded-0"
                type="submit"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPaiedCourse;
