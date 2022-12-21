

import found from '../images/found.png'
import backingus from '../images/backingus.png'
import Aos from 'aos';
import"aos/dist/aos.css";
import { useEffect } from 'react';

function FoundersC() {
    useEffect(()=>{
        Aos.init({duration:1000,
          once: false, 
          mirror: true,});
      }, []);
      document.addEventListener('contextmenu', event => event.preventDefault());
    return(
        <div className='flex items-center justify-center flex-col select-none pt-40' data-aos="fade-up" data-aos-easing="ease-in-out">
            <div className='bg-white h-auto sm:h-screen flex flex-col sm:flex-row w-[80%] ' >
                <div data-aos="fade-up" data-aos-easing="ease-in-out" className='flex flex-col  items-center sm:justify-center justify-end sm:items-start  pt-40   w-full sm:w-[45%] text-justify sm:pt-10'>
                    <div className='text-6xl al  w-full'>Meet</div>
                    <div className='text-6xl ah pt-2 '>The Founders</div>
                    <div className='al w-[100%] text-[1px] sm:text-[16px] sm:pt-8 sm:visible invisible'>
                    Sanjeev has a successful entrepreneurial journey of over 5 years under his belt. 
                    With expertise in scaling startups and building strategies for top brands, he joined 
                    forces with Prateek, one of the most in-demand designer. Prateek's brain knows no bounds 
                    when it comes to creativity. Sharing a common vision and drive for success, the two founded 
                    Grustl, filling a gap in the market for a creative agency that understands the importance of 
                    out-of-the-box thinking for businesses. Together, they identified a problem in the commercial 
                    space and came up with a solution.
                    </div>
                    <div data-aos="fade-up" data-aos-easing="ease-in-out" className='hidden sm:flex flex-col pt-16 items-center justify-center'>
                        <div className='al text-[17px] sm:pt-0 pt-60'>
                            V E N T U R E S &nbsp; B A C K I N G &nbsp; U S
                        </div>
                        <div className=' sm:pt-0 pt-[10px]  w-full'>
                            <img src={backingus} alt="bakingus" className='scale-60'/>
                        </div>
                    </div>
                </div>
                <div className='sm:w-[75%] flex items-center justify-center pl-40  ' data-aos="fade-up" data-aos-easing="ease-in-out">
                    <img src={found} className="sm:scale-65 2xl:scale-50" alt='founders'/>
                </div>
            </div>
            <div className=' text-md  sm:hidden  flex flex-col items-center justify-center '>
                <p className='al w-[80%] text-justify pt-8 ' >    
                    Sanjeev has a successful entrepreneurial journey of over 5 years under his belt. 
                    With expertise in scaling startups and building strategies for top brands, he joined 
                    forces with Prateek, one of the most in-demand designer. Prateek's brain knows no bounds 
                    when it comes to creativity. Sharing a common vision and drive for success, the two founded 
                    Grustl, filling a gap in the market for a creative agency that understands the importance of 
                    out-of-the-box thinking for businesses. Together, they identified a problem in the commercial 
                    space and came up with a solution.
                </p>
                <div data-aos="fade-up" data-aos-easing="ease-in-out" className='sm:hidden flex flex-col  items-center justify-center '>
                    <div className='al text-[17px] sm:pt-0 pt-20'>
                        V E N T U R E S &nbsp; B A C K I N G &nbsp; U S
                    </div>
                    <div className=' sm:pt-0 pt-[10px]  w-full'>
                        <img src={backingus} alt="bakingus" className='scale-60'/>
                    </div>
                </div>
            </div>  
        </div>
    )
}
export default FoundersC