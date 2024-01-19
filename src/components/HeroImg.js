import "./HeroImgStyles.css"

import React from 'react'
import IntroImg from "../assets/intro.jpg"
import { Link } from "react-router-dom"
import pfpic from "../assets/pfpic1.png"
const HeroImg = () => {
  return (
    <div className="hero">
      
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="intro-img"/>
        </div>
      
        <div className="content">
          <h1>Sachin Joseph</h1>
          <p>Big Data Solution Architect</p>
          <div>
          <Link to="/download-resume" className="btn">Download Resume</Link>
            
          </div>
        </div>

        <div className="profilepic">
              <img className="pfpic" src={pfpic} alt="pfpic"/>
        </div>
        
    </div>
  )
}

export default HeroImg