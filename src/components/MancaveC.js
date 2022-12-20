/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-lone-blocks */
import Aos from 'aos';
import"aos/dist/aos.css";
import React from 'react'
import { useEffect } from 'react';
import guna from '../images/gunamancave.png'
import rishi from '../images/rishimancave.png'
import kiran from '../images/kiranmancave.png'
import thiksha from '../images/thikshamancave.png'
import kitty from '../images/kittymancave.png'
import pratap from '../images/pratapmancave.png'
import sriram from '../images/srirammancave.png'
import prano from '../images/pranomancave.png'
import sriyaa from '../images/sriyaamancave.png';
import {Link} from 'react-router-dom';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import gunavid from '../images/1.gif'
import rishivid from '../images/rishivid.gif'
import kiranvid from '../images/kiranvid.gif'
import thikshavid from '../images/thikshavid.gif'
import pratapvid from '../images/pratapvid.gif'


function MancaveC() {
  useEffect(()=>{
    Aos.init({duration:1000,
      once: false, 
      mirror: true,});
  }, []);

  
  document.addEventListener('contextmenu', event => event.preventDefault());
 

  return (
    <div id="Mancave" className='select-none  flex flex-col items-center justify-center bg-black z-20 ' data-aos="fade-up" data-aos-easing="ease-in-out">
      <div className='bg-black h-[60%] pt-96 sm:pt-0 sm:h-screen flex items-center justify-center w-full'  >
        <div className=" " data-Aos="fade-up fade-out" data-aos-delay="400">
          <div  className='ah  bg-black flex flex-col  text-7xl xl:text-9xl gap-0  text-white   justify-center  z-50  fade fadeIn'  >
              <p className='' >the <br></br>
              mancave.
              </p>
          </div>
        </div>
      </div>
      <div class="carousel pb-40 sm:flex hidden " data-aos="fade-up" data-aos-easing="ease-in-out">
        <div class="carousel-item mgbg z-0 "><Link  to='/Mancave/Guna'><button><img src={guna} alt="Image 1" className='saturate-0 hover:saturate-100  duration-1000   translate-x-2 hover:-translate-x-6'/></button></Link></div>
        <div class="carousel-item mrbg z-[10] -ml-40 "><Link  to='/Mancave/Rishi'><button><img src={rishi} alt="Image 1" className='saturate-0 hover:saturate-100  duration-1000   translate-x-2 hover:-translate-x-6'/></button></Link></div>
        <div class="carousel-item mkbg z-[12] -ml-40"><Link  to='/Mancave/Kiran'><button><img src={kiran} alt="Image 1" className='saturate-0 hover:saturate-100  duration-1000   translate-x-2 hover:-translate-x-6'/></button></Link></div>
        <div class="carousel-item mksriyaabg z-[13] -ml-40"><Link  to='/Mancave/Sriyaa'><button><img src={sriyaa} alt="Image 1" className='saturate-0 hover:saturate-100  duration-1000   translate-x-2 hover:-translate-x-6'/></button></Link></div>
        <div class="carousel-item mkpranobg z-[14] -ml-40 "><Link  to='/Mancave/Prano'><button><img src={prano} alt="Image 1" className='saturate-0 hover:saturate-100  duration-1000   translate-x-2 hover:-translate-x-6'/></button></Link></div>
        <div class="carousel-item mksribg z-[15] -ml-40"><Link  to='/Mancave/Sriram'><button><img src={sriram} alt="Image 1" className='saturate-0 hover:saturate-100  duration-1000   translate-x-2 hover:-translate-x-6'/></button></Link></div>
        <div class="carousel-item mtbg z-[16] -ml-40"><Link  to='/Mancave/Thiksha'><button><img src={thiksha} alt="Image 1" className='saturate-0 hover:saturate-100  duration-1000   translate-x-2 hover:-translate-x-6'/></button></Link></div>
        <div class="carousel-item mkprabg z-[17] -ml-40"><Link  to='/Mancave/Pratap'><button><img src={pratap} alt="Image 1" className='saturate-0 hover:saturate-100  duration-1000   translate-x-2 hover:-translate-x-6'/></button></Link></div>
        <div class="carousel-item mkitbg z-[18] -ml-40"><Link  to='/Mancave/Kitty'><button><img src={kitty} alt="Image 1" className='saturate-0 hover:saturate-100  duration-1000   translate-x-2 hover:-translate-x-6'/></button></Link></div>
        
      </div>
      

    
      {/*Mobile Div*/ }
      
      <AwesomeSlider buttons={true} 
      organicArrows={false}
      buttonContentRight={<p style={{ color: "white" }}>left</p>}
      buttonContentLeft={<p style={{ color: "white" }}>Right</p>}
      play
      cancelOnInteraction={false} // should stop playing on user interaction
      interval={6000} 
      className='h-screen sm:h-0 invisible 'data-aos="fade-up" data-aos-easing="ease-in-out"  >

        {/*Guna*/}
        <div className='sm:hidden flex flex-col items-center justify-center h-auto  w-auto  relative pb-40 pt-40 bg-black' >
          <div className='w-[100%] flex items-center justify-center '>
            <img src={gunavid} galleryimg="no" className="   z-0 scale-100" alt="guna"></img>
            <div className='w-[85%] absolute bottom-0 h-auto  flex items-center justify-center   pt-28 mb-48  bg-gradient-to-t from-black to-transparent via-black'>
              <div className='flex flex-col '>
                <div className='ah w-full  pt-0 text-[#464646] text-4xl'>
                  GUNA <br></br>
                </div>
                <div className='    text-[12px]  text-[#D4D4D4] bg-[#912D38] flex flex-row gap-2 items-center justify-center py-[2px] w-[50%] rounded-sm tracking-wider'>
                        <p className='al  ml-4'>FULL STACK</p>  <p className='ah mr-4'> DEVELOPER</p>
                </div>
                <div className='flex items-center justify-center  w-[100%] '>
                  <p className='text-[#BDB7B7] text-[14px] pt-10 text-justify   '>
                    Pure Tech Junkie who steps into the office in the morning with a snack in his left hand and a  log book to debug the previous days bugs in his right hand. He Loves his coffee soo much that he can chug 11 cups of coffee a day and still feel the caffeine rush is insufficient. </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Rishi*/}
        <div className='sm:hidden flex flex-col items-center justify-center h-auto  w-auto overflow-x-scroll bg-black relative pb-40 pt-40'>
          <div className='w-[100%] flex items-center justify-center mcmobbg'>
            <img src={rishivid} galleryimg="no" className="   z-0 scale-100" alt="guna"></img>
            <div className='w-[85%] absolute bottom-0 h-auto  flex items-center justify-center pt-28 mb-40  bg-gradient-to-t from-black to-transparent via-black'>
              <div className='flex flex-col  '>
                <div className='ah w-full  pt-20 text-[#464646] text-4xl'>
                  RISHI <br></br>
                </div>
                <div className='    text-[12px]  text-[#D4D4D4] bg-[#225BBB] flex flex-row gap-2 items-center justify-center py-[2px] w-[35%] rounded-sm tracking-wider'>
                        <p className='al pl-2 '>WEB</p>  <p className='ah'> DEVELOPER</p>
                </div>
                <div className='flex items-center justify-center  w-[100%] '>
                  <p className='text-[#BDB7B7] text-[14px] pt-10 text-justify  '>
                  Bro’s got no chills that he drifts his car into the parking lot every morning. Sits in his workspace and unpacks his space suit like backpack and pulls out his RGB setup from the future where he spends most of his time. Rishi is a night owl. He spends time animating and perfecting designs and he never tend to get off his workspace until he gets the solution for the problem. </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Kiran*/ }
        <div className='sm:hidden flex flex-col items-center justify-center h-auto  w-auto overflow-x-scroll bg-black relative pb-40 pt-40'>
          <div className='w-[100%] flex items-center justify-center mcmobbg'>
            <img src={kiranvid} galleryimg="no" className="   z-0 scale-100" alt="guna"></img>
            <div className='w-[85%] absolute bottom-0 h-auto  flex items-center justify-center pt-28 mb-40  bg-gradient-to-t from-black to-transparent via-black'>
              <div className='flex flex-col  '>
                <div className='ah w-full  pt-20 text-[#464646] text-4xl'>
                  KIRAN <br></br>
                </div>
                <div className='    text-[12px]  text-[#D4D4D4] bg-[#296152] flex flex-row gap-2 items-center justify-center py-[2px] w-[50%] rounded-sm tracking-wider'>
                        <p className='al pl-2 '>STUDIO</p>  <p className='ah'>TASK MANAGER</p>
                </div>
                <div className='flex items-center justify-center  w-[100%] '>
                  <p className='text-[#BDB7B7] text-[14px] pt-10 text-justify   '>
                  This guy is the Real Deal. He is the light house of entertainment of the Grustl House and keeps everyone occupied. The day he doesn’t turn up it’s a dull day here. He is the Gate Keeper and has passed the punctuality check. Bro is the Real G. </p>
                    </div>
              </div>
            </div>
          </div>
        </div>

        {/*Thiksha*/ }
        <div className='sm:hidden flex flex-col items-center justify-center h-auto  w-auto overflow-x-scroll bg-black relative pb-40 pt-40'>
          <div className='w-[100%] flex items-center justify-center mcmobbg'>
            <img src={thikshavid} galleryimg="no" className="   z-0 scale-100" alt="guna"></img>
            <div className='w-[85%] absolute bottom-0 h-auto  flex items-center justify-center  pt-28 mb-40  bg-gradient-to-t from-black to-transparent via-black'>
              <div className='flex flex-col  '>
                <div className='ah w-full  pt-20 text-[#464646] text-4xl'>
                THIKSHA <br></br>
                </div>
                <div className='    text-[12px]  text-[#D4D4D4] bg-[#6C553D] flex flex-row gap-2 items-center justify-center py-[2px] w-[45%] rounded-sm tracking-wider'>
                        <p className='al pl-2 '>CONTENT</p>  <p className='ah'>STRATEGIST</p>
                </div>
                <div className='flex items-center justify-center  w-[100%] '>
                  <p className='text-[#BDB7B7] text-[14px] pt-10 text-justify '>
                    Like every gang has someone who turns up late to work, here she’s the one. But manages to get things done in a snap. Spends a lot of time brainstorming her inspiration ideas to the team. But this kid’s got sales in her Dna, she can sell out events in a blink.</p>
                  </div>
              </div>
            </div>
          </div>
        </div>

        {/*pratap*/ }
        <div className='sm:hidden flex flex-col items-center justify-center h-auto  w-auto overflow-x-scroll bg-black relative pb-40 pt-40'>
          <div className='w-[100%] flex items-center justify-center mcmobbg'>
            <img src={pratapvid} galleryimg="no" className="   z-0 scale-100" alt="guna"></img>
            <div className='w-[85%] absolute bottom-0 h-auto  flex items-center justify-center  pt-28 mb-40  bg-gradient-to-t from-black to-transparent via-black'>
              <div className='flex flex-col  '>
                <div className='ah w-full  pt-20 text-[#464646] text-4xl'>
                PRATAP <br></br>
                </div>
                <div className='    text-[12px]  text-[#D4D4D4] bg-[#564F3E] flex flex-row gap-2 items-center justify-center py-[2px] w-[30%] rounded-sm tracking-wider'>
                        <p className='al pl-2 '>SEO</p>  <p className='ah'>ANALYST</p>
                </div>
                <div className='flex items-center justify-center  w-[100%] '>
                  <p className='text-[#BDB7B7] text-[14px] pt-10 text-justify '>
                  This Dawg is a Geek. Plays trial and error game with algorithms of various mediums by the day and turns into a data analyst by night. His No. 1 friend being the pizza delivery guy that he gets to greet him atleast thrice a week. Man knows how to play the algorithm game right. </p>
                    </div>
              </div>
            </div>
          </div>
        </div>
        
      </AwesomeSlider>
     
     </div>
    );
}

export default MancaveC;
