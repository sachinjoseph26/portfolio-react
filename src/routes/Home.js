import React from 'react'
import Navbar from '../components/Navbar'
import HeroImg from '../components/HeroImg'
import Footer from '../components/Footer'
import Skills from '../components/Skills'
import Work from '../components/Work'
import Education from '../components/Education'
import AboutContent from '../components/AboutContent'
import ChatForm from '../components/ChatForm'

const Home = () => {
  return (
    <div>
     <Navbar/> 
     <HeroImg/>
     <Work />
      <Skills/>
      <Education/>
     <AboutContent/>
     <ChatForm/>
     <Footer/>
 </div>
  )
}

export default Home