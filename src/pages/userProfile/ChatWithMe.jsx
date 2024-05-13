import React from "react";

function ChatWithMe() {
  return (
    <div className="container w-full max-w-[1400px]  m-auto flex gap-10 flex-col justify-start items-start my-3">
      <div className="flex flex-col  w-full gap-[15px] md:flex-row my-3">
        <div class="py-20 relative flex flex-grow flex-col px-12 justify-end bg-gray-100">
          <div class="ml-auto rounded-lg rounded-tr-none my-1 p-2 text-sm bg-green-300 flex flex-col relative speech-bubble-right">
            <p class="">
              Do you still have that car from gone in 60 seconds? Can I borrow
              it please.
            </p>
            <p class="text-gray-600 text-xs text-right leading-none">8:00 AM</p>
          </div>
          <div class="mr-auto rounded-lg rounded-tl-none my-1 p-2 text-sm bg-white flex flex-col relative speech-bubble-left">
            <p>Yeah dude for sure</p>
            <p class="text-gray-600 text-xs text-right leading-none">8:45 AM</p>
          </div>
          <div class="ml-auto rounded-lg rounded-tr-none my-1 p-2 text-sm bg-green-300 flex flex-col relative speech-bubble-right">
            <p class="">Dude WTF was up with that plane you were on!!!?</p>
            <p class="text-gray-600 text-xs text-right leading-none">8:00 AM</p>
          </div>
          <div class="mr-auto rounded-lg rounded-tl-none my-1 p-2 text-sm bg-white flex flex-col relative speech-bubble-left">
            <p>LOL I Know right </p>
            <p class="text-gray-600 text-xs text-right leading-none">8:45 AM</p>
          </div>
          <div class="ml-auto rounded-lg rounded-tr-none my-1 p-2 text-sm bg-green-300 flex flex-col relative speech-bubble-right">
            <p class="">Hey man what should we do this weekend?</p>
            <p class="text-gray-600 text-xs text-right leading-none">8:00 AM</p>
          </div>
          <div class="mr-auto rounded-lg rounded-tl-none my-1 p-2 text-sm bg-white flex flex-col relative speech-bubble-left">
            <p>Steal the declaration of independence?...</p>
            <p class="text-gray-600 text-xs text-right leading-none">8:45 AM</p>
          </div>
        </div>
        {/* send message */}
      </div>
      <div class="flex flex-col w-full gap-2 mb-5">
        <div
          class="flex items
            -center gap-2"
        >
          <input
            type="text"
            placeholder="Type a message"
            class="w-full p-2 border border-gray-300 border-0 outline-0 bg-gray-100 p-3"
          />
          <button class="bg-blue-600 text-white p-2">Send</button>
        </div>
      </div>
    </div>
  );
}

export default ChatWithMe;
