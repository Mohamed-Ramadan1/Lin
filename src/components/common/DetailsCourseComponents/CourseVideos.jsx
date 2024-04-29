import React from 'react'

const CourseVideos = () => {
    return (
        <div className='courseVideos'>
            <div className="container">
                <div className='flex gap-4 flex-col items-start'>
                    <h2 className='text-2xl text-[#222] font-bold'>Course content</h2>
                    <div className="more-info flex items-center">
                        <span className='font-medium text-[#222] px-[10px] py-[1px] border-r-[2px] border-r-[#9747FF]'>12 sections</span>
                        <span className='font-medium text-[#222] px-[10px] py-[1px] border-r-[2px] border-r-[#9747FF]'>4h 46m total length</span>
                        <span className='font-medium text-[#222] px-[10px] py-[1px]'>46 lectures </span>
                    </div>
                </div>

                

            </div>
        </div>
    )
}

export default CourseVideos