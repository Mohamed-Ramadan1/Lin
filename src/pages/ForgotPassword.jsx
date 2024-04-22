import React from 'react'

// Components
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';

// Images
import ForgetImg from '../assets/ForgetPassword.png'

export default function ForgotPassword() {
    return (
      <div className='forgotPassword p-[20px] flex flex-col justify-center items-center gap-[50px] max-lg:p-[10px]'>

          <div className="img w-full h-[400px] rounded-[20px] max-lg:h-[200px]">
            <img src={ForgetImg} alt="" className='w-full h-full rounded-[20px] object-cover'/>
          </div>
        
          <div className="contentInfo flex flex-col gap-[40px] max-w-[40%] w-full max-lg:max-w-[100%]">
          
              <div className="title text-center w-full">
                <h1 className='text-4xl font-bold text-[#2d2d2d] mb-[15px]'>Forgot Password ?</h1>
                <p className='text-base text-[20px] text-gray-800'>Enter Your Email to Reset Password</p>
              </div>

              <div className="inputs w-full">

              <form action="" className='flex flex-col gap-[24px]'>

                  <Input type="email" placeholder="Example@email.com" label="Email" />

                  <Button textButton="Reset Password" />

              </form>

              </div>

          </div>
        
      </div>
    )
}
