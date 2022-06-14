import React from 'react'
import './Home.scss'
import snapshot from '../Images/snapshot.png'
import metastorm from '../Images/metastorm.png'
import onestar from '../Images/WithOnestar.png'
import threestar from '../Images/threestar.png'
import twostar from '../Images/twostar.png'
import whatismetagg from '../Images/whatismeta.png'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import caseslide1 from '../Images/caseslide1.png'
import logometastorm from '../Images/Rectangle.png'
import coinmetastrom from '../Images/metastormcoin.png'
import man1 from '../Images/man1.png'
import man2 from '../Images/man2.png'
import man3 from '../Images/man3.png'
import man4 from '../Images/man4.png'
import man5 from '../Images/man5.png'
import man6 from '../Images/man6.png'
import caseslide2 from '../Images/caseslide2.png'
import caseslide3 from '../Images/caseslide3.png'
import slidergun1 from '../Images/slidergun1.png'
import slidergun2 from '../Images/slidergun2.png'
import slidergun3 from '../Images/slidergun3.png'
import slidergun4 from '../Images/slidergun4.png'
import slidergun5 from '../Images/slidergun5.png'
import slidergun6 from '../Images/slidergun6.png'
import slidergun7 from '../Images/slidergun7.png'
import slidergun8 from '../Images/slidergun8.png'
import slidergun9 from '../Images/slidergun9.png'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



const Home = () => {
  return (
    <div className='container-home'>

      <div className='first-block'>
        <div className='Wrapper-content'>
        <div className='first-block-content'>
            <img className='metastorm' src={metastorm}></img>
            <div className='properties-list'>
                <p className='property'>THE BEST FIRST PERSON SHOOTER</p>
                <p className='property'>BUILT ON BLOCKCHAIN</p>
                <p className='property'>PLAY TO EARN IN VR</p>
                <p className='property'>METAVERSE</p>
            </div>
            <div className='buttons-first-block'>
              <button className='button-deck'>DECK</button>
              <button className='button-community'>Community</button>
            </div>
        </div>
       
        </div>
       
      </div>
    
      <div className='block-2'>
        <div className='Wrapper-content'>
          <div className='inner-content-home-2'>
          <div className='block-props'>
                <div className='item-prop'>
                  <img className='img-item' src={onestar}></img> 
                  <p className='text-item'>Play to earn</p>
                </div>
                <div className='item-prop'>
                  <img className='img-item' src={twostar} ></img> 
                  <p className='text-item'>NFT Trading</p>
                </div>
                <div className='item-prop'>
                  <img className='img-item' src={threestar}></img> 
                  <p className='text-item'>Free to play</p>
                </div>
            </div>
            <div className='video-container'>
             <iframe width="760" height="455" src="https://www.youtube.com/embed/mljW5_v3I_Y" title="YouTube video player" frameborder="2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

            </div>
          </div>
          
        </div>
      </div>
      <div className='block-3'>
          <div className="container-big-image">
            <div className='content-container-img'>
              <div className='inner-content-img'>
              <h2 className='subtitle'>What is</h2>
              <h1 className='title'>METASTORM?</h1>
              <p className='text'>MetaStorm is a blockchain based RPG VR shooter with a huge collection of modern weapons that players can use to equip, level up, complete missions and earn tokens.</p>
              <p className='text'>Each player has the opportunity to build battle cards, collect weapons and even steal unique tokens from other players</p>
              <p className='text'> MetaStorm also works as the basis for developing your own FPS project with any ideas. And the reason for it is that MetaStorm includes many functions: weapons, projectiles, uniforms, characters, various game modes, etc.</p>
              </div>
              
            </div>

          </div>
      </div>
      <div className='block-4'>
        <div className='Wrapper-content'>
          <div className='block-slider-1'>
           <h2 className='subtitle-block-4'>NFT BOX</h2>
           <p className='text'>Several types of NFT BOXes will give players various advantages in the game, such as exclusive weapons and equipment, the ability to unlock specific skills (such as a missile strike, call for a helicopter, etc.), the ability to open new maps for battles, the ability to move to a new play tier with more strong rivals.</p>
           <div className='slider-swiper-1'>
           <Swiper
          // install Swiper modules
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={-60}
            slidesPerView={3}
         
            
          
           
            effect={'fade'}
            grabCursor={true}
             navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            >
           <SwiperSlide>
              <img src={caseslide1}></img>
            </SwiperSlide>
            <SwiperSlide>
               <img src={caseslide2}></img>
            </SwiperSlide>
            <SwiperSlide>
             <img src={caseslide3}></img>
            </SwiperSlide>
            <SwiperSlide> <img src={caseslide1}></img></SwiperSlide>
            <SwiperSlide>
               <img src={caseslide2}></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src={caseslide1}></img>
            </SwiperSlide>
         </Swiper>
           </div>
           
          
          </div>
        </div>
      </div>
      <div className='block5'>
        <div className='Wrapper-content'>
        <div className='block-2slider'>
           <Swiper
          // install Swiper modules
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
          	clickable= {true}
            
            
            
            centeredSlides={true}
            effect={'fade'}
            grabCursor={true}
             navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
    >
           <SwiperSlide>
              <img src={slidergun1}></img>
            </SwiperSlide>
            <SwiperSlide>
              <img src={slidergun2}></img>
            </SwiperSlide> 
            <SwiperSlide>
              <img src={slidergun3}></img>
            </SwiperSlide> 
            <SwiperSlide>
              <img src={slidergun4}></img>
            </SwiperSlide> 
            <SwiperSlide>
              <img src={slidergun5}></img>
            </SwiperSlide>
             <SwiperSlide>
              <img src={slidergun6}></img>
            </SwiperSlide> 
            <SwiperSlide>
              <img src={slidergun7}></img>
            </SwiperSlide> 
            <SwiperSlide>
              <img src={slidergun8}></img>
            </SwiperSlide>
             <SwiperSlide>
              <img src={slidergun9}></img>
            </SwiperSlide>
        </Swiper>
           </div> 
        </div>
      
      </div>
      <div className='block-6'>
        <div className='inner-content-6block'>
        <div className='text-6block'>
          <h2 className='headline-6-block'>Metaverse of MetaStorm</h2>
          <p className='text'>VR allows a player to become a part of the game world, get used to the role of his/her character and feel and understand the story of the game most deeply.</p>
          
        </div>
        <iframe width="1030" height="579" src="https://www.youtube.com/embed/Y81ko22GlHw" title="YouTube video player" frameborder="2" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </div>
      </div>
      <div className='block-7'>
        <div className='Wrapper-content'>
        <h2 className='headline-6-block'>GAME CONCEPT</h2>
        
        <div className='content7block'>
          <div className='left-side'>
            <p className='text-7block'>The game concept includes several game modes, one of the modes is to create your own map for play to earn tokens. Players can create their own cards and earn tokens when other players visit them.</p>
            <p>Players can create guilds and fight each other in order to steal the lands. Guilds can build their houses, headquarters, etc.</p>
            <div className='buttons-first-block'>
              <button className='button-deck'>DECK</button>
              <button className='button-community'>Community</button>
            </div>
          </div>
          <div className='right-side'>
              <div className='play-block'>
                <div className='block-uppper-red'>
                  <img className='lowsize-logo' src={logometastorm}></img>
                  <h3 className='headline-play-block'>MODE PLAY</h3>
                </div>
                <div className='block-lower-black'>
                  <p className='property'>TEAM MODE</p>
                  <p className='property'>DEATHMATCH MODE</p>
                  <p className='property'>STORYLINE MODE</p>
                </div>
              </div>
              <div className='play-block'>
                <div className='block-uppper-red'>
                  <img className='lowsize-logo' src={logometastorm}></img>
                  <h3 className='headline-play-block'>CUSTOM MAP</h3>
                </div>
                <div className='block-lower-black-1'>
                  <p className='property'>Build your own map to play and earn</p>

                </div>
              </div>
          </div>
        </div>
        </div>
      </div>
      <div className='block-8'>
      
        <div className='content-8block'>
          <div className='inner-content-block8'>
            <div className='leftside-8block'>
            <h2 className='headline-6-block'>TOKEN MODEL</h2>
            <div className='block-token-mest'>
              <div className='lowsize-logo'>
                  <img src={logometastorm}></img>
              </div>
              <div className='text-token'>
                <h2 className='headline-token'>Token $MEST</h2>
                <p>Maximum supply = 500,000,000</p>
              </div>
             
            </div>
            <ul>
                <li>
                  Used to complete missions with rare drops of NFT tokens.
                </li>
                <li>
                  Conducting in-game events
                </li>
                <li>
                  Bet for receiving weekly rewards in the form of $MEST and NFT tokens.
                </li>
                <li>
                  Conducting major tournaments among guilds Purchase of land in the metaverse or NFT token sets.
                </li>
                <li>
                   Purchase of land in the metaverse or NFT token sets.
                </li>
                <li>
                  Makes it possible to receive rewards for the game to open new cards
                </li>
                <li>
                   Used in different game modes
                </li>
                <li>
                  Used to buy and upgrade weapons.
                </li>
            </ul>
            </div>
           
              <div className='rightside-8block'>
                <img  className='metastormcoin' src={coinmetastrom}></img>

              </div>
          </div>
        
        </div>
      
      </div>  
      <div className='block-9'>
        <div className='Wrapper-content'>
          <div className='inner-content-9'>
            <h2 className='headline-9'>Team</h2>
            <p>MetaSrorm is a team of over 20 people who have a strong passion for both gaming and blockchain. Most of the team members have over 10 years of experience in the gaming industry, and the team also has a wide experience in the field of virtual development. Blockchain is about to revolutionize the gaming world and the MetaStorm team wants to make the most possible input into this industry.</p>
          <div className='developers'>
            <div className='developer'>
              <img src={man1}></img>
            </div>
            <div className='zaglushka'>
              <img src={logometastorm}></img>
            </div>
            <div className='developer'>
              <img src={man2}></img>
            </div>
            <div className='zaglushka'>
              <img src={logometastorm}></img>
            </div>
            <div className='developer'>
              <img src={man3}></img>
            </div>
            <div className='zaglushka'>
              <img src={logometastorm}></img>
            </div>
            <div className='developer'>
              <img src={man4}></img>
            </div>
            <div className='zaglushka'>
              <img src={logometastorm}></img>
            </div>
            <div className='developer'>
              <img src={man5}></img>
            </div>
            <div className='zaglushka'>
              <img src={logometastorm}></img>
            </div>
        
            </div>
          </div>
          <div className='button-cont-9'>
           <button className='button-deck'>MEET OUR TEAM</button>

          </div>



        </div>

         
      </div>
    </div>
  )
}

export default Home