import "./HeroImgStyles.css"

import React from 'react'
import IntroImg from "../assets/intro.jpg"
import { Link } from "react-router-dom"

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="intro-img"/>
        </div>
        <div className="content">
          <p>I am Sachin Joseph</p>
          <h1>Big Data Solution Architect</h1>
          <div>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
          </div>
        </div>
    </div>
  )
}

export default HeroImg