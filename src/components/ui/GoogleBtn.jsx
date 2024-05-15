
import google from '../../assets/GoogleIcon.png'

export default function GoogleBtn() {
    return (
        <a href="" className='w-full flex items-center gap-3 justify-center p-[12px] rounded-[12px] bg-[#F3F9FA]'>
            <img src={google} alt="" className='w-[28px] h-[28px]'/>
            <span className='font-semibold'>Sign in with Google</span>
        </a>
    )
}
