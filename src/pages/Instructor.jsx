import React from 'react'

function Instructor() {
  return (
    <div>
      <section class="py-10 my-auto dark:bg-gray-900">
        <div class="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4">
            <div
                class="lg:w-[98%] md:w-[90%] sm:w-[98%] xs:w-full mx-auto border p-4 rounded-xl h-fit self-center dark:bg-gray-800/40">
                <div class="">
                    <h1
                        class="lg:text-3xl md:text-2xl sm:text-xl xs:text-xl font-serif font-extrabold mb-2 dark:text-white">
                        Profile
                    </h1>
                    <h2 class="text-grey text-sm mb-4 dark:text-gray-400">Create Profile</h2>
                    <form>

                        <div
                            class="w-full rounded-sm bg-[url('https://images.unsplash.com/photo-1449844908441-8829872d2607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxob21lfGVufDB8MHx8fDE3MTA0MDE1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080')] bg-cover bg-center bg-no-repeat items-center">
                            <div
                                class="mx-auto flex justify-center w-[141px] h-[141px] bg-blue-300/20 rounded-full bg-[url('data:image/jpeg;base64,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')] bg-cover bg-center bg-no-repeat">
    
                                <div class="bg-white/90 rounded-full w-6 h-6 text-center ml-28 mt-4">
    
                                    <input type="file" name="profile" id="upload_profile" hidden required />
    
                                    <label for="upload_profile">
                                            <svg data-slot="icon" class="w-6 h-5 text-blue-700" fill="none"
                                                stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z">
                                                </path>
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z">
                                                </path>
                                            </svg>
                                        </label>
                                </div>
                            </div>

                            <div class="flex justify-end">
                                <input type="file" name="profile" id="upload_cover" hidden required />
    
                                <div
                                    class="bg-white flex items-center gap-1 rounded-tl-md px-2 text-center font-semibold">
                                    <label for="upload_cover" class="inline-flex items-center gap-1 cursor-pointer">Cover
                                        
                                    <svg data-slot="icon" class="w-6 h-5 text-blue-700" fill="none" stroke-width="1.5"
                                        stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z">
                                        </path>
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z">
                                        </path>
                                    </svg>
                                    </label>
                                </div>
    
                            </div>
                        </div>

                        <h2 class="text-center mt-1 font-semibold dark:text-gray-300">Upload Profile and Cover Image
                        </h2>

                        <div class=" lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                            
                            <div class="w-full  mb-4 mt-6">
                                <label for="" class="mb-2 dark:text-gray-300">Instructor Name</label>
                                <input type="text"
                                        class="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                        placeholder="Instructor Name"/>
                            </div>

                            <div class="w-full  mb-4 lg:mt-6">
                                <label for="" class=" dark:text-gray-300">email</label>
                                <input type="email"
                                        class="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                        placeholder="email"/>
                            </div>
                        </div>
    
                        <div class=" lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                            

                            <div class="w-full">
                                <h3 class="dark:text-gray-300 mb-2">Specialzation</h3>
                                <input type="text"
                                        class="text-grey p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"/>
                            </div>
                            <div class="w-full">
                                <h3 class="dark:text-gray-300 mb-2">Description</h3>
                                <input type="text"
                                        class="text-grey p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"/>
                            </div>

                        </div>

                        <div class="w-full rounded-lg bg-blue-500 mt-4 text-white text-lg font-semibold">
                            <button type="submit" class="w-full p-4">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Instructor
