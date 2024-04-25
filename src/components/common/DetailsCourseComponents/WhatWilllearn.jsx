import React from 'react'

import ImageWillLearn from '../../../assets/ImageWillLearn.png'

const WhatWilllearn = () => {
    return (
        <div className='willLearn p-4 w-full flex gap-4 flex-col items-start bg-[#F9FAFB]'>
            <h2 className='text-2xl text-[#222] font-bold'>What you'll learn</h2>

            <div className="content w-full flex items-start justify-between">
                <div className="info">
                    <ul className='flex gap-3 flex-col items-start'>
                        <li className='flex gap-2'>
                            <svg width="23px" height="23px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#9747ff"><path d="M5 13L9 17L19 7" stroke="#9747ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            <span className='font-medium'>UI Design تصميم واجهات التطبيقات</span>
                        </li>
                        <li className='flex gap-2'>
                            <svg width="23px" height="23px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#9747ff"><path d="M5 13L9 17L19 7" stroke="#9747ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            <span className='font-medium'>UI Design تصميم واجهات التطبيقات</span>
                        </li>
                        <li className='flex gap-2'>
                            <svg width="23px" height="23px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#9747ff"><path d="M5 13L9 17L19 7" stroke="#9747ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            <span className='font-medium'>UI Design تصميم واجهات التطبيقات</span>
                        </li>
                        <li className='flex gap-2'>
                            <svg width="23px" height="23px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#9747ff"><path d="M5 13L9 17L19 7" stroke="#9747ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            <span className='font-medium'>UI Design تصميم واجهات التطبيقات</span>
                        </li>
                        <li className='flex gap-2'>
                            <svg width="23px" height="23px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#9747ff"><path d="M5 13L9 17L19 7" stroke="#9747ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            <span className='font-medium'>UI Design تصميم واجهات التطبيقات</span>
                        </li>
                        <li className='flex gap-2'>
                            <svg width="23px" height="23px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#9747ff"><path d="M5 13L9 17L19 7" stroke="#9747ff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            <span className='font-medium'>UI Design تصميم واجهات التطبيقات</span>
                        </li>
                    </ul>
                </div>

                <div className="image">
                    <img src={ImageWillLearn} alt="" />
                </div>
            </div>
        </div>
    )
}

export default WhatWilllearn