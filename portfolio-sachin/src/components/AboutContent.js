import "./AboutContentStyles.css"

import React from 'react'
import { Link } from "react-router-dom"
import aboutimage1 from "../assets/aboutimage.jpg"
import aboutimage2 from "../assets/aboutimage2.jpg"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>I am a Software Engineer.Interested in Big Data Analytics and Cloud.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="image-container">
                <div className="img-stack-top">
                    <img src={aboutimage1} className="image" alt="top"/>
                </div>
                <div className="img-stack-bottom">
                    <img src={aboutimage2} className="image" alt="bottom"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent