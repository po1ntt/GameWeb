import React from 'react'
import { Link } from 'react-router-dom'
import logometastorm from '../Images/Rectangle.png'
import './Header.scss'
import twitter from '../Images/Twiiter.png'
import youtube from '../Images/Youtube.png'
import telegram from '../Images/Telegram.png'
import logom from '../Images/LogoM.png'

const Header = () => {
  return (
    <div className='container-header'>
        <div className='Wrapper-content'>
            <div className='Navbar'>
              <div className='side'>
                <div className='logo-item'>
                    <img src={logometastorm}></img>
                </div>
                <div className='nav-links'>
                  <Link className='link' exact to='/'>Main</Link>
                  <Link className='link' exact to='/about'>About</Link>
                  <Link className='link'  exact to='/team'>Team</Link>
                </div>
              </div>
              <div className='side'>
                  <div className='social-links'>
                      <img className='social-li' src={twitter}></img>
                      <img className='social-li' src={youtube}></img>
                      <img  className='social-li'src={telegram}></img>
                      <img  className='social-li'src={logom}></img>
                  </div>
                 
              </div>
              <div className='side'>
                <div className='links-buttons'>
                      <Link className='Link-Wallet' to='/Connect-Wallet'>Connect Wallet</Link>
                      <Link className='Link-PrivateSale' to='/private-sale'>Private Sale</Link>

                </div>
              </div>
            </div>
        </div>

    </div>
  )
}

export default Header