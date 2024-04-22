import React, { useEffect, useState } from 'react'

import TopContent from './TopContent'
import MidContent from './MidContent'
import BottomContent from './BottomContent'
import HeaderPhone from './HeaderPhone';



export default function Header() {

  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 970); 
    };

    // Initial check for screen size
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (

    <div>
      
      {isLargeScreen ? (

        <div className='fullScreen'>
          
            <TopContent />

            <MidContent />

            <BottomContent />
          
        </div>
        
      ) : (
          
          <div className='phone'>
            
            <HeaderPhone />
            
      </div>
      )}




    </div>
  )
}

