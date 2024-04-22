import React from 'react'

// Image
import WhatWeOfferImage from '../../../assets/WhatWeOfferImage.jpg'

const WhatWeOffer = () => {
    return (
        <div className='whatWeOffer relative overflow-hidden flex justify-center items-center px-[124px] py-[70px] max-lg:px-[30px] max-sm:py-[30px] max-sm:px-[15px] bg-[#F9FAFB]'>

            <div className="container grid gap-10 max-md:gap-4 grid-cols-2 max-md:grid-cols-1  max-w-[1400px] m-auto">

                <div className="image w-full h-full max-md:h-[300px]">
                    <img src={WhatWeOfferImage} alt="" className='w-full h-full object-cover'/>
                </div>

                <div className="content py-[20px] flex flex-col items-start justify-around gap-[30px]">

                    <div className='flex flex-col items-start gap-[10px]'>
                        <span className='text-base text-[#6941C6]'>What We Offer</span>
                        <h1 className='text-6xl font-semibold text-[#101828] text-start'>Empowering Education Discover Our Story</h1>
                    </div>

                    <div className='grid grid-cols-2 gap-10'>
                        <div>
                            <h1 className='text-6xl font-bold mb-[15px] text-[#6941C6]'>400+</h1>
                            <span className='text-2xl'>Diverse Course Catalog</span>
                        </div>
                        <div>
                            <h1 className='text-6xl font-bold mb-[15px] text-[#6941C6]'>600%</h1>
                            <span className='text-2xl'>Expert Instructors</span>
                        </div>
                        <div>
                            <h1 className='text-6xl font-bold mb-[15px] text-[#6941C6]'>10k</h1>
                            <span className='text-2xl'>Flexible Learning</span>
                        </div>
                        <div>
                            <h1 className='text-6xl font-bold mb-[15px] text-[#6941C6]'>200+</h1>
                            <span className='text-2xl'>Certification</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhatWeOffer