/* eslint-disable react/style-prop-object */
import Aos from 'aos';
import"aos/dist/aos.css";
import { useEffect } from 'react';
import M1 from '../images/M1.png'
import M2 from '../images/M2.png'
import M3 from '../images/M3.png'



function MancaveC() {
  useEffect(()=>{
    Aos.init({duration:3000,
      once: false, 
      mirror: true,});
  }, []);


  return (
    
    
    <div className='bg-black max-w-screen flex-col scroll-smooth ' data-aos="fade-up" data-aos-easing="ease-in-out">
      
				
        <div className='ah  bg-black text-9xl  h-screen  text-white  w-fill  flex items-center justify-center' data-aos-easing="ease-in-out" data-aos="fade-up">
            <div className='al'>the</div> &nbsp;
            <div className='font-bold'>mancave.</div>
        </div>

        {/* images */}
        
      

        <div class="bg-black pb-20 pt-20 bgg h-auto flex items-center justify-center "  data-aos="fade-up" data-aos-duration="2000"  data-aos-easing="ease-in-out" >
          <div className='  g z-50'>
            <button>
                <img src={M1} className="scale-75 hover:scale-[0.8] transition duration-700 ease-in-out delay-200" alt="guna"></img>
            </button>
            <button>
                <img src={M2} className="scale-75 hover:scale-[0.8] transition duration-700 ease-in-out delay-200" alt="sanjeev"></img>
            </button>
            <button>
                <img src={M3} className="scale-75 hover:scale-[0.8] transition duration-700 ease-in-out delay-200" alt="prateek"></img>
            </button>
          </div>
          
    
        </div> 
        
        
      </div>
  );
}

export default MancaveC