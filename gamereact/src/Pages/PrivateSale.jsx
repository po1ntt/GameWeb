import React from 'react'
import threestar from '../Images/threestar.png'
import logometastorm from '../Images/Rectangle.png'
import snipersmall from '../Images/snipersmall.png'
import box1 from '../Images/box1.png'
import box2 from '../Images/box2.png'
import owncart1 from '../Images/owncart1.png'
import owncart2 from '../Images/owncart2.png'
import owncart3 from '../Images/owncart3.png'

import './PrivateSale.scss'
export const PrivateSale = () => {
  return (
    <div>
        <div className='container-private'>

        
        <div className='team-inner'>
            <div className='content-team'>
                <div className='head'>
                        <img src={threestar}></img>
                        <h2 className='headline-team'>Private Sale</h2>
                    </div>
                </div>
                <div className='wrapper-private-sale'>
                    <div className='container-aciton'>
                        <div className='text-content-private'>
                            <div className='container-img-private'>
                                <img src={logometastorm}></img>
                            </div>
                            <div className='container-text-private'>
                                <h2 className='headline-private'>Closes in</h2>
                                <p className='text-private'>December 30 at 14:00 UTC</p>
                            </div>
                        </div>
                       
                    </div>
                    <div className='container-options'>
                        <div className='first-white'>
                            <div className='head-option'>
                                 <h2 className='headline-private-options'>
                                    Captain
                                </h2>
                                <h3 className='subtitle-private-options'>
                                     Package 
                                </h3>
                            </div>
                            <div className='content-optional'>
                                <div className='min-per-person'>
                                    <div className='text-per-person'>
                                         Min per person
                                    </div>
                                    <div className='coins-count'>
                                        1,5
                                    </div>
                                </div>
                                <hr className='cherta'></hr>
                                <div className='min-per-person'>
                                    <div className='text-per-person'>
                                        Max per person
                                    </div>
                                    <div className='coins-count'>
                                        5,0
                                    </div>
                                </div>
                                <div className='containter-price-private'>
                                    <h4>Price: $1</h4>
                                </div>
                                <div className='container-textbox-private'>
                                    <input type='number' placeholder='Enter amount of BNB' className='input-private'></input>
                                </div>
                                <div className='button-container-private'>
                                    <button className='button-deck'>BUY</button>

                                </div>
                            </div>

                        </div>
                        <div className='second-violet'>
                            <div className='head-option'>
                                 <h2 className='headline-private-options'>
                                     Colonel
                                </h2>
                                <h3 className='subtitle-private-options'>
                                     Package 
                                </h3>
                            </div>
                            <div className='content-optional'>
                                <div className='min-per-person'>
                                     <div className='text-per-person'>
                                        Total
                                    </div>
                                    <div className='text-per-person'>
                                        20 seats
                                    </div>
                                </div>
                                <hr className='cherta'></hr>
                                <div className='min-per-person'>
                                    <div className='text-per-person'>
                                        Per person
                                    </div>
                                    <div className='coins-count'>
                                        7,5
                                    </div>
                                </div>
                                
                            </div>
                            <div className='container-sniper-img'>
                                <img src={snipersmall}></img>
                            </div>
                            <div className='text-container-private'>
                                <h5>Exclusive sniper rifle</h5>
                                <h6>You can use it during battles, and you will also have the opportunity to sell it on the NFT marketplace</h6>
                            </div>
                            <div className='container-sniper-img'>
                                <img src={box1}></img>
                                <img src={box2}></img>
                            </div>
                            <div className='text-container-private'>
                                <h5>NFT BOX Skills</h5>
                                <h6>Inside the box you can find such skills as helicopter call, rocket strike, etc. These skills you can use during fights</h6>
                            </div>
                            <div className='text-container-private'>
                                <h5>NFT BOX Outfit</h5>
                                <h6>Аfter opening the box, you will have access to one of the types of exclusive equipment that you can use in battles; you will also have the opportunity to sell it on the NFT marketplace</h6>
                            </div>
                             <div className='containter-price-private'>
                                    <h4>Price: $1</h4>
                                </div>
                                <div className='container-textbox-private'>
                                    <input type='number' placeholder='Enter amount of BNB' className='input-private'></input>
                                </div>
                                <div className='button-container-private'>
                                    <button className='button-deck'>BUY</button>

                                </div>
                        </div>
                        <div className='third-gold'>
                            <div className='head-option'>
                                 <h2 className='headline-private-options'>
                                    General
                                </h2>
                                <h3 className='subtitle-private-options'>
                                     Package 
                                </h3>
                            </div>
                            <div className='content-optional'>
                                <div className='min-per-person'>
                                    <div className='text-per-person'>
                                     Total
                                    </div>
                                    <div className='text-per-person'>
                                    5 seats
                                    </div>
                                </div>
                                <hr className='cherta'></hr>
                                <div className='min-per-person'>
                                    <div className='text-per-person'>
                                        Per person
                                    </div>
                                    <div className='coins-count'>
                                         19
                                    </div>
                                </div>
                                <div className='container-sniper-img'>
                                    <img src={owncart1}></img>
                                    <img src={owncart2}></img>
                                    <img src={owncart3}></img>
                                </div>
                                 <div className='text-container-private'>
                                    <h5>Your own card</h5>
                                    <h6>You will have your own card and earn MEST tokens when other players visit it. You can also sell your card on the NFT marketplace.</h6>
                                </div>
                                <div className='container-sniper-img'>
                                    <img src={snipersmall}></img>
                                </div>
                                <div className='text-container-private'>
                                    <h5>Exclusive sniper rifle</h5>
                                    <h6>You can use it during battles, and you will also have the opportunity to sell it on the NFT marketplace</h6>
                                </div>
                                <div className='container-sniper-img'>
                                    <img src={box1}></img>
                                    <img src={box2}></img>
                                </div>
                                <div className='text-container-private'>
                                    <h5>NFT BOX Skills</h5>
                                    <h6>Inside the box you can find such skills as helicopter call, rocket strike, etc. These skills you can use during fights</h6>
                                </div>
                                <div className='text-container-private'>
                                    <h5>NFT BOX Outfit</h5>
                                    <h6>Аfter opening the box, you will have access to one of the types of exclusive equipment that you can use in battles; you will also have the opportunity to sell it on the NFT marketplace</h6>
                                </div>
                                <div className='containter-price-private'>
                                    <h4>Price: $1</h4>
                                </div>
                                <div className='container-textbox-private'>
                                    <input type='number' placeholder='Enter amount of BNB' className='input-private'></input>
                                </div>
                                <div className='button-container-private'>
                                    <button className='button-deck'>BUY</button>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
               
            </div>
        </div>
        <div>

        </div>
    </div>
                
                   
  )
}
