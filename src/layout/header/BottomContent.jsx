import React from 'react'

import './stylebar.css'

const category = [
    {text: 'Business'},
    {text: 'Development'},
    {text: 'IT & Software'},
    {text: 'Office Productivity'},
    {text: 'Design'},
    {text: 'Marketing'},
    {text: 'Health & Fitness'},
    {text: 'Design'},
    {text: 'Marketing'},
    {text: 'Health & Fitness'},
]


export default function BottomContent() {
    return (
        <div className='category border-[1px] border-y-[#E9EAF0]'>
            <div className="container max-w-[1700px] overflow-x-scroll m-auto gap-10 flex justify-between items-start">

                {category.map((item, index) => (
                    <h2 key={index} className='p-[20px] transition ease-out hover:bg-[#f5f5f5]'>
                        <a href="">{item.text}</a>
                    </h2>
                ))}

            </div>
        </div>
    )
}
