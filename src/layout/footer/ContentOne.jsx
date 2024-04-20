import React from 'react'

export const ContentOne = () => {
    return (
        <div className='content-top relative overflow-hidden flex justify-center items-center px-[124px] py-[70px] max-lg:px-[30px] max-sm:py-[30px] max-sm:px-[15px]'>

            <div className="container max-w-[1400px] m-auto flex justify-between items-center max-md:flex-col">

                <div className="info flex flex-col items-start gap-[32px]">

                    <h1 className='text-4xl'>Start learning with 67.1k students around the world.</h1>

                    <div className="btns flex justify-center items-center gap-[20px]">
                        <a href="" className='px-[24px] py-[10px] bg-[#9747FF]'>Join the Family</a>
                        <a href="" className='px-[24px] py-[10px] '>Browse all courses</a>
                    </div>

                    
                </div>

                <div className="info">
                    <div>
                        <h1>6.3k</h1>
                        <span>Online courses</span>
                    </div>
                    <div>
                        <h1>26k</h1>
                        <span>Certified Instructor</span>
                    </div>
                    <div>
                        <h1>99.9%</h1>
                        <span>Sucess Rate</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
