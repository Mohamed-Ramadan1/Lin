import React from 'react'

import Avatar from '../../../assets/Avatar.png'

const Instructor = () => {
    return (
        <div className='instructor flex flex-col items-start gap-6'>
            <h2 className="text-2xl text-[#222] font-bold">Instructor</h2>

            <div className="container flex flex-col items-start gap-4">

                <div className="info-Instructor flex items-end gap-3">
                    <img src={Avatar} alt="" className='w-[60px] h-[60px] object-contain'/>
                    <div className='flex flex-col items-start gap-2'>
                        <h3 className='text-2xl font-bold text-[#222]'>Ahmed Magdy</h3>
                        <span className='text-base'>Adobe Certified Instructor & Adobe Certified Expert</span>
                    </div>
                </div>

                <div className="nore-info">
                    <div className="more-info flex items-center">
                        <span className='font-medium text-[#222] bg-[#ecdeff] px-[15px] py-[10px] border-r-[2px] border-r-[#9747FF]'>4.7 Instructor Rating</span>
                        <span className='font-medium text-[#222] bg-[#ecdeff] px-[15px] py-[10px] border-r-[2px] border-r-[#9747FF]'>229,761 Reviews</span>
                        <span className='font-medium text-[#222] bg-[#ecdeff] px-[15px] py-[10px] border-r-[2px] border-r-[#9747FF]'>735,364 Students</span>
                        <span className='font-medium text-[#222] bg-[#ecdeff] px-[15px] py-[10px] '>34 Courses</span>
                    </div>
                </div>

                <div className='desc'>
                    <p className='text-lg font-normal'>
                        Sharing is who I am, and teaching is where I am at my best, because I've been on both sides of that equation, and getting to deliver useful training is my meaningful way to be a part of the creative community.

                        I've spent a long time watching others learn, and teach, to refine how I work with you to be efficient, useful and, most importantly, memorable. I want you to carry what I've shown you into a bright future.

                        I have a wife (a lovely Irish girl) and kids. I have lived and worked in many places (as Kiwis tend to do) – but most of my 14+ years of creating and teaching has had one overriding theme: bringing others along for the ride as we all try to change the world with our stories, our labours of love and our art.
                        I'm a certified Adobe instructor (ACI) in Ireland. I'm also an Adobe Certified Expert (ACE) and have completed the Adobe Certified Associate training (ACA). And I don't just do Adobe. Remember, media is a very broad term – digital blew out the borders, so we are all constantly learning.
                        I've been teaching for 14+ years. I come from being a media designer and content creator – so I understand exactly where you're at now. I've been there. I love this stuff. Print, digital publishing, web and video. I can see how it all connects. And I can see how we can share those connections.
                        I built Bring Your Own Laptop in Ireland, New Zealand, Australia & online. I have a great team working with me to keep BYOL at the top of Adobe and digital media training. I understand business, I have one – so I know how important it is to get it right and make it work for you.
                        Now my focus is on Udemy. It's my mission to bring you the best training for digital media on Udemy.
                        Daniel Walter Scott
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Instructor