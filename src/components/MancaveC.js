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
import {Link} from 'react-router-dom';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import gunavid from '../images/1.gif'
import rishivid from '../images/rishivid.gif'
import kiranvid from '../images/kiranvid.gif'
import thikshavid from '../images/thikshavid.gif'

function MancaveC() {
  useEffect(()=>{
    Aos.init({duration:1000,
      once: false, 
      mirror: true,});
  }, []);

  document.addEventListener('contextmenu', event => event.preventDefault());
 

  return (
    <div className='select-none h-auto flex flex-col items-center justify-center bg-black z-20 ' data-aos="fade-up" data-aos-easing="ease-in-out">
      <div className='bg-black h-[60%] pt-96 sm:pt-0 sm:h-screen flex items-center justify-center w-full'  >
        <div className=" " data-Aos="fade-up fade-out" data-aos-delay="400">
          <div  className='ah  bg-black flex flex-col  text-7xl xl:text-9xl gap-0  text-white   justify-center  z-50  fade fadeIn'  >
              <p className='' >the <br></br>
              mancave.
              </p>
          </div>
        </div>
      </div>

      {/* Desktop Site*/ }
      <div className='hidden sm:flex   w-[1200px]   flex-row items-center justify-center' data-aos="fade-up" data-aos-easing="ease-in-out">
        <Link className='z-0 card -ml-20' to='/Mancave/Guna'>
          <button className='mgbg    '><img src={guna} class="saturate-0 hover:saturate-100  duration-1000   translate-x-2 hover:-translate-x-6 " alt=""/></button>
        </Link>
        <Link className=' z-10 card -ml-32'  to='/Mancave/Rishi'>
          <button className='mrbg   '><img src={rishi} class="saturate-0 hover:saturate-100  duration-1000  translate-x-2 hover:-translate-x-6 " alt=""/></button>
        </Link>
        <Link className='z-20 card -ml-32' to='/Mancave/Kiran'>
          <button className='mkbg   '><img src={kiran} class=" saturate-0 hover:saturate-100  duration-1000 translate-x-2 hover:-translate-x-6 " alt=""/></button>
        </Link>
        <Link className='card z-30 -ml-32' to='/Mancave/Thiksha'>
          <button className='mtbg  '><img src={thiksha} class=" saturate-0 hover:saturate-100  duration-1000 translate-x-2 hover:-translate-x-6 " alt=""/></button>
        </Link>
        <Link className='card z-40 -ml-32' to='/Mancave/Kitty'>
          <button className='mkitbg  '><img src={kitty} class=" saturate-0 hover:saturate-100  duration-1000 translate-x-2 hover:-translate-x-6 " alt=""/></button>
        </Link>
        <Link className=' card z-50 -ml-32  ' to='/Mancave/Pratap'>
          <button className='mkprabg  '><img src={pratap} class=" saturate-0 hover:saturate-100  duration-1000 translate-x-2 hover:-translate-x-6 " alt=""/></button>
        </Link>
        
      </div>

    
      {/*Mobile Div*/ }
      
      <AwesomeSlider className='h-screen sm:h-0 invisible'data-aos="fade-up" data-aos-easing="ease-in-out" >

        {/*Guna*/}
        <div className='sm:hidden flex flex-col items-center justify-center h-auto  w-auto overflow-x-scroll bg-black relative pb-40 pt-40'>
          <div className='w-[100%] flex items-center justify-center mcmobbg'>
            <img src={gunavid} galleryimg="no" className="   z-0 scale-100" alt="guna"></img>
            <div className='w-[85%] absolute bottom-0 h-auto  flex items-center justify-center '>
              <div className='flex flex-col items-center justify-center sm:items-start sm:justify-start '>
                <div className='ah w-full  pt-0 text-[#464646] text-4xl'>
                  GUNA <br></br>
                </div>
                <div className='   w-full text-[12px]  text-[#D4D4D4]  flex flex-row rounded-sm tracking-wider'>
                        <p className='al pl-2 bg-[#912D38]'>FULL STACK </p><p className='ah pl-2 bg-[#912D38] pr-2'>DEVELOPER</p>
                </div>
                <div className='flex items-center justify-center  w-[100%] '>
                  <p className='text-[#BDB7B7] text-[14px] pt-10 text-justify pb-40  '>
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
            <div className='w-[85%] absolute bottom-0 h-auto  flex items-center justify-center '>
              <div className='flex flex-col items-center justify-center sm:items-start sm:justify-start '>
                <div className='ah w-full  pt-20 text-[#464646] text-4xl'>
                  RISHI <br></br>
                </div>
                <div className='   w-full text-[12px]  text-[#D4D4D4]  flex flex-row rounded-sm tracking-wider'>
                        <p className='al pl-2 bg-[#225BBB]'>WEB </p><p className='ah pl-2 bg-[#225BBB] pr-2'>DEVELOPER</p>
                </div>
                <div className='flex items-center justify-center  w-[100%] '>
                  <p className='text-[#BDB7B7] text-[14px] pt-10 text-justify pb-40  '>
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
            <div className='w-[85%] absolute bottom-0 h-auto  flex items-center justify-center '>
              <div className='flex flex-col items-center justify-center sm:items-start sm:justify-start '>
                <div className='ah w-full  pt-20 text-[#464646] text-4xl'>
                  KIRAN <br></br>
                </div>
                <div className='   w-full text-[12px]  text-[#D4D4D4]  flex flex-row rounded-sm tracking-wider'>
                        <p className='al pl-2 bg-[#B29A73]'>STUDIO </p><p className='ah pl-2 bg-[#B29A73] pr-2'>TASK MANAGER</p>
                </div>
                <div className='flex items-center justify-center  w-[100%] '>
                  <p className='text-[#BDB7B7] text-[14px] pt-10 text-justify pb-40  '>
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
            <div className='w-[85%] absolute bottom-0 h-auto  flex items-center justify-center '>
              <div className='flex flex-col items-center justify-center sm:items-start sm:justify-start '>
                <div className='ah w-full  pt-20 text-[#464646] text-4xl'>
                THIKSHA <br></br>
                </div>
                <div className='   w-full text-[12px]  text-[#D4D4D4]  flex flex-row rounded-sm tracking-wider'>
                        <p className='al pl-2 bg-[#6C553D]'>CONTENT </p><p className='ah pl-2 bg-[#6C553D] pr-2'> STRATEGIST</p>
                </div>
                <div className='flex items-center justify-center  w-[100%] '>
                  <p className='text-[#BDB7B7] text-[14px] pt-10 text-justify pb-40  '>
                    Like every gang has someone who turns up late to work, here she’s the one. But manages to get things done in a snap. Spends a lot of time brainstorming her inspiration ideas to the team. But this kid’s got sales in her Dna, she can sell out events in a blink.</p>
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
