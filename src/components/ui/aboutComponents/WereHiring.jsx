import React from 'react'

import avtar from '../../../assets/Avatar.png'

const Founder = [

    {
        img: avtar,
        name: 'Olivia Rhye',
        job: 'Founder & CEO',
        desc: 'Former co-founder of Opendoor. Early staff at Spotify and Clearbit.'
    },
    {
        img: avtar,
        name: 'Olivia Rhye',
        job: 'Founder & CEO',
        desc: 'Former co-founder of Opendoor. Early staff at Spotify and Clearbit.'
    },
    {
        img: avtar,
        name: 'Olivia Rhye',
        job: 'Founder & CEO',
        desc: 'Former co-founder of Opendoor. Early staff at Spotify and Clearbit.'
    },
    {
        img: avtar,
        name: 'Olivia Rhye',
        job: 'Founder & CEO',
        desc: 'Former co-founder of Opendoor. Early staff at Spotify and Clearbit.'
    },

]

const WereHiring = () => {
    return (
        <div className='wereHiring relative overflow-hidden flex justify-center items-center px-[124px] py-[70px] max-lg:px-[30px] max-sm:py-[30px] max-sm:px-[15px]'>
            <div className="container max-w-[1400px] m-auto flex gap-5 flex-col justify-center items-center">

                <div className="title text-center w-[70%] m-auto flex gap-3 flex-col justify-center items-center">
                    <span className='text-base text-[#6941C6]'>We’re hiring!</span>
                    <h1 className='text-4xl font-semibold text-[#101828]'>Meet Our Founder</h1>
                    <p className='text-base font-medium text-[#475467] text-center'>[Insert Founder's Name], the visionary behind LIN, embarked on a journey to revolutionize the landscape of education with a simple yet profound belief: that everyone deserves access to quality learning opportunities.</p>
                </div>

                <div className='grid grid-cols-4 gap-4 max-2xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 '>

                    {Founder.map((item, index) => (

                        <div key={index} className="card rounded-none p-6 flex gap-3 flex-col justify-center items-center bg-[#F9FAFB] ">
                            
                            <img src={item.img} alt="" className='w-[80px] h-[80px] rounded-[100px]'/>

                            <div className="info text-center">
                                <h1 className='text-2xl'>{item.name}</h1>
                                <span className='text-base font-medium text-[#6941C6]'>{item.job}</span>
                            </div>

                            <p className='text-center text-[#424242]'>{item.desc}</p>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WereHiring