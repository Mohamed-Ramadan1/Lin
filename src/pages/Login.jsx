// Components
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import GoogleBtn from '../components/ui/GoogleBtn';

// Images
import LoginImg from '../assets/Login.jpg'


const Login = () => {

  return (
    <div className="loginPage w-full h-[100vh] max-lg:h-full flex flex-row-reverse justify-between items-center">
      
      <div className="image w-[50%] max-lg:hidden h-full overflow-hidden">
          <img src={LoginImg} alt="" className='w-full h-full object-cover'/>
      </div>

      <div className="contentInfo h-full w-[50%] max-lg:w-full flex flex-col items-center justify-center">

        
        <div className="container w-[60%] max-lg:w-full max-lg:p-[30px] flex flex-col gap-[30px] items-start justify-center">

        <div className="title w-full flex gap-[15px] flex-col items-start ">
          
          <h1 className='text-3xl font-bold text-[#222]'>Welcome Back  👋</h1>
          <p className='text-xl text-[#838383]'>Today is a new day. It's your day. You shape it. Sign in to start managing your projects.</p>
            
        </div>

        <div className="inputs w-full">

            <form action="" className='flex flex-col gap-[24px]'>

                <Input type="email" placeholder="Example@email.com" label="Email" />
              
                <Input type="password" placeholder="At least 8 characters" label="Password" />
                
                <a href="" className='w-full text-end'>Forgot Password?</a>

                <Button textButton="Sign in" />

            </form>
            
        </div>
        

          <div className='w-full flex gap-[30px] flex-col items-center justify-center'>
            
            <div className='w-full flex items-center justify-center relative'>
              <span className=' relative p-[10px] z-10 bg-[#fff]'>or</span>
              <span className='w-full h-[1px] absolute top-[50%] left-[50%]  translate-x-[-50%] bg-[#CFDFE2]'></span>
            </div>

            <GoogleBtn />

            <div>
              <h3>Don't you have an account? <a href="" className='text-[#9747FF]'> Sign up</a></h3>
            </div>

        </div>

        </div>



      </div>

      </div>
      )
};

export default Login;
