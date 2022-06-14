import React from 'react'
import threestar from '../Images/threestar.png'
import manbig1 from '../Images/mansizebig-1.png'
import manbig2 from '../Images/mansizebig-2.png'
import manbig3 from '../Images/mansizebig-3.png'
import manbig4 from '../Images/mansizebig-4.png'
import manbig5 from '../Images/mansizebig-5.png'
import manbig6 from '../Images/mansizebig-6.png'
import manbig7 from '../Images/mansizebig-7.png'
import manbig8 from '../Images/mansizebig-8.png'
import manbig9 from '../Images/mansizebig-9.png'
import manbig10 from '../Images/mansizebig-10.png'


import './Team.scss'
const Team = () => {
  return (
    <div className='container'>
        <div className='team-inner'>
      
                <div className='content-team'>
                    <div className='head'>
                        <img src={threestar}></img>
                        <h2 className='headline-team'>Team</h2>
                    </div>
                    <div className='dev-container'>
                    <div className='delevopers'>
                        <div className='developer' >
                            <img src={manbig1}></img>
                        </div>
                        <div className='desc-developer'>
                            <h2 className='title-desc'>Son Phung <span> In </span></h2>
                            <p className='subtitle-desc'>Ceo</p>
                        </div>
                        <div className='developer' >
                            <img src={manbig2}></img>
                        </div>
                        <div className='desc-developer'>
                            <h2 className='title-desc'>Kevin Parson <span> In </span></h2>
                            <p className='subtitle-desc'>Chief Sales Officer (CSO)</p>
                        </div>
                        <div className='desc-developer'>
                            <h2 className='title-desc'>Jacob Wilson <span> In </span></h2>
                            <p className='subtitle-desc'>Chief Financial Officer (CFO)</p>
                        </div>
                        <div className='developer' >
                            <img src={manbig3}></img>
                        </div>
                        <div className='desc-developer'>
                            <h2 className='title-desc'>Hung Pham <span> In </span></h2>
                            <p className='subtitle-desc'>CTO</p>
                        </div>
                        <div className='developer' >
                        <img src={manbig4}></img>
                        </div>
                        <div className='developer' >
                        <img src={manbig5}></img>
                        </div>
                        <div className='desc-developer'>
                            <h2 className='title-desc'>Tiep Do <span> In </span></h2>
                            <p className='subtitle-desc'>Chief Game Designer</p>
                        </div>
                        <div className='developer' >
                        <img src={manbig6}></img>
                        </div>
                        <div className='desc-developer'>
                            <h2 className='title-desc'>Khang Luu <span> In </span></h2>
                            <p className='subtitle-desc'>Game Dev Director</p>
                        </div>
                        <div className='desc-developer'>
                            <h2 className='title-desc'>Thang Nguyen <span> In </span></h2>
                            <p className='subtitle-desc'>Thang Nguyen</p>
                        </div>
                        <div className='developer' >
                        <img src={manbig7}></img>
                        </div>
                        <div className='desc-developer'>
                            <h2 className='title-desc'>Ngô Văn <span> In </span></h2>
                            <p className='subtitle-desc'>Blockchain Dev Lead</p>
                        </div>
                        <div className='developer' >
                        <img src={manbig8}></img>
                        </div>
                        <div className='developer' >
                        <img src={manbig9}></img>
                        </div>
                        <div className='desc-developer'>
                            <h2 className='title-desc'>Vien Nguyen <span> In </span></h2>
                            <p className='subtitle-desc'>Creative Designer</p>
                        </div>
                        <div className='developer' >
                        <img src={manbig10}></img>
                        </div>
                        <div className='desc-developer'>
                            <h2 className='title-desc'>Phan Phùng <span> In </span></h2>
                            <p className='subtitle-desc'>Art Director</p>
                        </div>
                    </div>
                    </div>
                    
                </div>
           
        </div>
    </div>
  )
}

export default Team