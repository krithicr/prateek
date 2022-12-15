
import M5 from '../images/M5.jpg'
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
        <div className='flex items-center justify-center flex-col select-none' data-aos="fade-up" data-aos-easing="ease-in-out">
            <div className='bg-white h-auto sm:h-screen flex flex-col sm:flex-row w-full gap-20' >
                <div className='w-[10%] invisible sm:visible '>
                </div>
                <div data-aos="fade-up" data-aos-easing="ease-in-out" className='flex flex-col   items-center sm:justify-center justify-end sm:items-start  pt-40   w-full sm:w-[45%] text-justify sm:pt-10'>
                    <div className='text-6xl al  '>Meet</div>
                    <div className='text-6xl ah pt-2 '>The Founders</div>
                    <div className='al w-[85%] text-[1px] sm:text-[16px] sm:pt-8 sm:visible invisible'>
                    Sanjeev has a successful entrepreneurial journey of over 5 years under his belt. 
                    With expertise in scaling startups and building strategies for top brands, he joined 
                    forces with Prateek, one of the most in-demand designer. Prateek's brain knows no bounds 
                    when it comes to creativity. Sharing a common vision and drive for success, the two founded 
                    Grustl, filling a gap in the market for a creative agency that understands the importance of 
                    out-of-the-box thinking for businesses. Together, they identified a problem in the commercial 
                    space and came up with a solution.
                    </div>
                </div>
                <div className='sm:w-[55%] flex items-center justify-center  ' data-aos="fade-up" data-aos-easing="ease-in-out">
                    <img src={found} className="sm:scale-60" alt='founders'/>
                </div>
            </div>
            <div className=' text-md sm:text-[1px] visible sm:invisible  flex items-center justify-center '>
                <p className='al w-[80%] text-justify pt-8' >    
                Sanjeev having a 5+ year long entrepreneurial journey backing him up. With all the expertise he had on scaling up startups and building strategies for the best brands in his previous company eventually stumbled upon Prateek who happened to be one of highest demanded designers in the country. Prateek’s brain has no creative limits. 
                        <br></br><br></br>
                        Both being extremely ambitious and with all the like minded vision they both had they both joined hands and came up with Grustl considering the fact that there is no creative agency or resources in the country that doesn’t understand that “for a business to stand out of the box the traditional routes should be skipped out of the box ideas should be welcomed”. Both these pals identified a problem in the commercial space and came up with a fix.
                    </p>
            </div>
            
            <div className=' h-auto pb-60 flex flex-col-reverse sm:flex-row items-center justify-center  ' data-aos="fade-up" data-aos-easing="ease-in-out">
                <div data-aos="fade-up" data-aos-easing="ease-in-out" className='flex flex-col items-center justify-center sm:invisible visible h-[10px] sm:h-auto w-auto sm:w-[1px]'>
                    <div className='al text-[18px] sm:pt-0 pt-60'>
                        V E N T U R E S &nbsp; B A C K I N G &nbsp; U S
                    </div>
                    <div className=' sm:pt-0 pt-[10px]  w-full'>
                        <img src={backingus} alt="bakingus" className='scale-75'/>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-easing="ease-in-out" className=' flex flex-col items-center justify-center text-center  sm:w-[50%] '>
                    <div className=' pt-2 sm:pt-0  items-center justify-center flex '>
                        <img src={M5} className="w-[60%] h-[60%]   " alt="guna"></img>
                    </div>
                        <p className=' text-3xl ah'>R. Shanmugasundaram<br></br>
                        <span className='al'>Mentor/Investor</span></p>
                </div>
                <div data-aos="fade-up" data-aos-easing="ease-in-out" className='  sm:w-[50%] h-full flex flex-col items-center justify-center pt-40'>
                    <span className=' text-5xl sm:text-6xl ah'>Honorary <span className='al text-5xl sm:text-6xl'>Table</span></span>
                    <div className='flex flex-col items-center justify-center invisible sm:visible h-[10px] sm:h-auto'>
                        <div className='al text-xl pt-20'>
                            V E N T U R E S &nbsp; B A C K I N G &nbsp; U S
                        </div>
                        <div className=' pt-[0px]  w-full'>
                            <img src={backingus} alt="bakingus" className='scale-50'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default FoundersC