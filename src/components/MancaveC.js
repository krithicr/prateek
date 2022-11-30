import Aos from 'aos';
import"aos/dist/aos.css";
import React from 'react'
import { useEffect } from 'react';
import guna from '../images/gunastatic.png'
import rishi from '../images/rishistatic.png'
import kiran from '../images/kiranstatic.png'
import thiksha from '../images/thikshastatic.png'

import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F268533%2Fpexels-photo-268533.jpeg%3Fcs%3Dsrgb%26dl%3Dpexels-pixabay-268533.jpg%26fm%3Djpg&imgrefurl=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Fbeautiful%2F&tbnid=nwiTKnJXTwcwcM&vet=12ahUKEwipzfqEtNX7AhVnj9gFHYRXCQ4QMygAegUIARDdAQ..i&docid=B51x0PBR9KNzvM&w=1920&h=1278&q=images&ved=2ahUKEwipzfqEtNX7AhVnj9gFHYRXCQ4QMygAegUIARDdAQ" },
  { url: "../images/rishistatic.png" },
  { url: "../images/kiranstatic.png" },
  { url: "../images/thikshastatic.png" },
];

const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.7
  };
  
  function observerCallback(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        
        entry.target.classList.replace('fadeOut', 'fadeIn');
      } else {
        
        entry.target.classList.replace('fadeIn', 'fadeOut');
      }
    });
  }
  
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  
  const fadeElms = document.querySelectorAll('.fade');
  fadeElms.forEach(el => observer.observe(el));

 

function MancaveC() {
  useEffect(()=>{
    Aos.init({once:false,
      duration:700,
    });
  }, []);

  return (
    <div className='h-auto ' data-aos="fade-up" data-aos-easing="ease-in-out">
      <div className='bg-black h-[60%] pt-96 sm:pt-0 sm:h-screen flex items-center justify-center '  >
        <div className=" " data-Aos="fade-up fade-out" data-aos-delay="400">
          <div  className='ah  bg-black flex flex-col  text-7xl xl:text-9xl gap-0  text-white   justify-center  z-50  fade fadeIn'  >
              <p className='' >the <br></br>
              mancave.
              </p>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center h-screen w-full bg-black'>
      <SimpleImageSlider
        width={896}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
      </div>

      /* <div className=' h-screen '>
        <div class="pic-ctn flex items-center justify-center">
          <img src={guna}alt="" class="pic scale-50" />
          <img src={rishi} alt="" class="pic scale-50" />
          <img src={kiran} alt="" class="pic scale-50" />
          <img src={thiksha} alt="" class="pic scale-50"/>
        </div>
      </div> */
    // </div>
    );
}

export default MancaveC;


