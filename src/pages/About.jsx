import React from 'react'

// Components
import AboutLiN from '../components/ui/aboutComponents/AboutLiN'
import WhatWeOffer from '../components/ui/aboutComponents/WhatWeOffer'
import WereHiring from '../components/ui/aboutComponents/WereHiring'
import OurValues from '../components/ui/aboutComponents/OurValues'
import OpenPositions from '../components/ui/aboutComponents/OpenPositions'



const About = () => {
    return (
      <div>

        <AboutLiN />
        <WhatWeOffer />
        <WereHiring />
        <OurValues />
        <OpenPositions />
      
      </div>
    )
}

export default About