import React from 'react'
import './Footer.scss'
import twitter from '../Images/Twiiter.png'
import youtube from '../Images/Youtube.png'
import telegram from '../Images/Telegram.png'
import logom from '../Images/LogoM.png'

const Footer = () => {
  return (
    <div className='container-footer'>
        <div className='Wrapper-content'>
        <div className='footer-content'>
            <div className='side'>
                <p>© 2021 MetaStorm. All rights reserved</p>
            </div>
            <div className='side'>
                <p>Contact us</p>
                <div className='social-links'>
                      <img className='social-li' src={twitter}></img>
                      <img className='social-li' src={youtube}></img>
                      <img  className='social-li'src={telegram}></img>
                      <img  className='social-li'src={logom}></img>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer