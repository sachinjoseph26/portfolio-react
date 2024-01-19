import "./FooterStyles.css"
import React from 'react'
import {FaFacebook, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from "react-icons/fa"

const Footer = () => {
  return (
    <div className="Footer">
        <div className="Foooter-container">
            <div className="left">

                <div className="location">
                    <FaHome size={20} style={{color:"#fff",
                marginRight:"2rem"}}/>
                <div>
                    <p>35 William Nador Street</p>
                    <p>Kitchener</p>
                    <p>N2R0S3</p>
                    <p>ON,CA</p>
                </div>
                </div>

                <div className="phone">
                    <h4>
                    <FaPhone size={20} style={{color:"#fff",
                        marginRight:"2rem"}}/>
                        + 1-647-928-3942
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
                <p>Sachin joseph</p>
                <p>Enjoy in taking challenges.</p>
                <div className="social">
                <a href="https://www.instagram.com/sachin_joseph26/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram
                     size={30} style={{color:"#fff",
                        marginRight:"1rem"}}/>
                </a> 
                <a href="https://www.linkedin.com/in/sachinjoseph-054/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin
                     size={30} style={{color:"#fff",
                        marginRight:"1rem"}}/> 
                </a>
                <FaFacebook
                     size={30} style={{color:"#fff",
                        marginRight:"1rem"}}/> 
                <FaTwitter
                     size={30} style={{color:"#fff",
                        marginRight:"1rem"}}/> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer