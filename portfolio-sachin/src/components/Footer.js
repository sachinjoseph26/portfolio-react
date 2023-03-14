import "./FooterStyles.css"
import React from 'react'
import {FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="Footer">
        <div className="Foooter-container">
            <div className="left">

                <div className="location">
                    <FaHome size={20} style={{color:"#fff",
                marginRight:"2rem"}}/>
                <div>
                    <p>486 Karn Street</p>
                    <p>Canada</p>
                </div>
                </div>

                <div className="phone">
                    <h4>
                    <FaPhone size={20} style={{color:"#fff",
                        marginRight:"2rem"}}/>
                        1-647-928-3942
                    </h4>  
                </div>

                <div className="email">
                    <h4>
                    <FaMailBulk size={20} style={{color:"#fff",
                        marginRight:"2rem"}}/>
                        sachinjoseph054@gmail.com
                    </h4>  
                </div>

            </div>
            <div className="right">
                <h4>About</h4>
                <p>This is me Sachin joseph
                    Enjoy in taking challenges.
                </p>
                <div className="social">
                <FaFacebook
                     size={30} style={{color:"#fff",
                        marginRight:"1rem"}}/> 
                <FaInstagram
                     size={30} style={{color:"#fff",
                        marginRight:"1rem"}}/> 
                <FaLinkedin
                     size={30} style={{color:"#fff",
                        marginRight:"1rem"}}/> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer