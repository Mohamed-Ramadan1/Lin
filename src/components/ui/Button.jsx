import React from 'react'

export default function Button( { textButton } ) {
  return (
      <a href="" className='button w-full py-[15px] text-[#fff] font-bold rounded-[12px] bg-[#9747FF] text-center transition ease-out hover:bg-[#9747ffd8]'>
          {textButton}
      </a>
  )
}
