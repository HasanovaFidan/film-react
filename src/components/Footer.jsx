import React from 'react'
import { FaFacebookSquare, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GiThunderball } from "react-icons/gi";
function Footer() {
  return (
    <div>
    <footer>
        <div className="footer__div">
  <div className="icon__div">
<div className='div'> <a href="https://github.com/"> <FaGithub/></a></div> 
       <div className='div'> <FaLinkedin/></div>
      <div className='div'> <a href="https://www.instagram.com/"> <FaInstagram/></a> </div>
       <div className='div'> <FaFacebookSquare/></div>
        <div className='div'><FaTwitter /></div>
       <div className='div'> <GiThunderball /></div>
  </div>
  <div className="h__div">
    <p>Designed&Built by</p>
    <p>Fidan Hasanova</p>
  </div>
      
        </div>
    </footer>
    </div>
  )
}

export default Footer
