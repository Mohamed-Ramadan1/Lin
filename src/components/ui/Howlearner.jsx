import React from 'react'
import { CoffeeIcon } from '../icons/CoffeeIcon'

const dataInfo = [
  {
    title: 'Advancing Career Opportunities:',
    desc: 'Meet Sarah, a marketing professional looking to advance her career. By enrolling in online courses in digital marketing and analytics, she gained valuable skills and knowledge that helped her secure a promotion and transition into a leadership role within her company.'
  },
  {
    title: 'Exploring New Passions:',
    desc: 'Meet John, a software engineer with a passion for photography. Through online courses in photography and videography, he honed his skills and started a side business as a freelance photographer. Now, he'
  },
  {
    title: 'Building Confidence and Self-Esteem:',
    desc: 'Meet Maria, a recent college graduate struggling with self-doubt. By enrolling in online courses in public speaking and communication skills, she gained confidence and improved her ability to articulate ideas effectively, ultimately landing her dream job and excelling in her professional endeavors.'
  },
  {
    title: 'Continuous Learning and Personal ',
    desc: 'Meet David, a retiree with a thirst for knowledge. Through online courses in history, literature, and philosophy, he continues to feed his curiosity and stay intellectually engaged in retirement, enriching his life with new perspectives and ideas.'
  },
]


export const Howlearner = () => {
  return (
    <div className='hLearn relative overflow-hidden flex justify-center items-center px-[124px] py-[70px] max-lg:px-[30px] max-sm:py-[30px] max-sm:px-[15px]'>
      <div className="container max-w-[1400px] m-auto flex gap-[50px] flex-col justify-between items-start max-md:flex-col">
        
              <div className="title flex gap-[10px] flex-col items-start">
                <CoffeeIcon />
                <h1 className='text-3xl font-bold'>How learners like you are achieving their goals</h1>
              </div>
        
        <div className="content max-w-[1400px] w-full flex-wrap flex gap-[20px] flex-warp items-start">
          
              {dataInfo.map((item, index) => (
                  <div key={index} className="info w-full flex flex-col items-start gap-[10px] p-[20px] rounded-[10px] bg-[#F3F3F3]">
                    <h1 className='py-[10px] px-[10px] text-3xl font-[400] border-l-[#9747FF] border-l-[3px]'>{item.title}</h1>
                    <p className=''>{item.desc}</p>
                  </div>
                    
                  ))}
              </div>
          </div>
    </div>
  )
}
