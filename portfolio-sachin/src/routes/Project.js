import React from 'react'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroImg2 from '../components/HeroImg2'
import Skills from '../components/Skills'
import Work from '../components/Work'
import Education from '../components/Education'


const Project = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="RESUME" text="Works,Skills,Experience,Education"/>
      <Work />
      <Skills/>
      <Education/>
      <Footer/>
    </div>
  )
}

export default Project