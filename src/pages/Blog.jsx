import React from "react";

function Blog() {
  return (
    <div>
      {/* add */}
      <div class="border border-gray-300 p-4 rounded-lg mt-4 md:w-[80%] mx-auto mb-5">
        <h2 class="text-lg font-medium mb-2">Leave a comment</h2>
        <form>
          <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2" for="name">
              Name
            </label>
            <input
              class="appearance-none border-0 outline-0 bg-gray-100 p-3 rounded w-full  text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
              id="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 font-medium mb-2" for="comment">
              Comment
            </label>
            <textarea
              rows="4"
              class="appearance-none border-0 outline-0 bg-gray-100 rounded w-full text-gray-700 leading-tight focus:outline-none focus:border-gray-500"
              id="comment"
              placeholder="Enter your comment"
            ></textarea>
          </div>
          <div class="flex justify-end">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 p-5 focus:outline-none focus:shadow-outline"
              type="button"
            >
              Post Comment
            </button>
          </div>
        </form>
      </div>
      {/* show */}
      <div className="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4 my-3">
        <div class="flex flex-wrap justify-between">
          <div class="border p-3 bg-gray-100">
            <h3 class="text-2xl font-bold mt-4 mb-4">My First Blog Post</h3>
            <p class="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4 my-3">
        <div class="flex flex-wrap justify-between">
          <div class="border p-3 bg-gray-100">
            <h3 class="text-2xl font-bold mt-4 mb-4">My First Blog Post</h3>
            <p class="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4 my-3">
        <div class="flex flex-wrap justify-between">
          <div class="border p-3 bg-gray-100">
            <h3 class="text-2xl font-bold mt-4 mb-4">My First Blog Post</h3>
            <p class="text-gray-700 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
