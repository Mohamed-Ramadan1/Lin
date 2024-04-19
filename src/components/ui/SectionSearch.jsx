import React from 'react'

import '../ui/ui.css'

export const SectionSearch = () => {
  return (
      <div className='SectionSearch relative overflow-hidden flex justify-center items-center px-[124px] py-[70px] max-lg:px-[30px] max-sm:px-[15px] max-sm:py-[30px] bg-[#222222]'>
          
            <div className="container max-w-[1400px] m-auto flex gap-6 flex-col justify-center items-center max-md:flex-col">

                <div className="title">
                    <h1 className='text-2xl font-bold text-[#fff] max-md:text-center max-md:text-xl'>What are your interests that you would like to search for?</h1>
                </div>
              
                <div className="input-search max-w-[800px] w-full">
                  
                  <form action="" className='relative  w-full'>
                      
                        <input type="search" name="" id="" placeholder='Search about Course' className='w-full h-[70px] relative rounded-[16px] text-[#222] font-bold p-[10px] outline-none'/>
                      
                        <button type='submit' className='absolute right-[10px] top-[50%] translate-y-[-50%] rounded-[10px] bg-[#222] w-[50px] h-[50px] flex justify-center items-center'>
                            <svg width="24px" height="24px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#ffffff"><path d="M17 17L21 21" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 11C3 15.4183 6.58172 19 11 19C13.213 19 15.2161 18.1015 16.6644 16.6493C18.1077 15.2022 19 13.2053 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                        </button>                         
                    </form>
                </div>

            </div>
          
        </div>
  )
}
