import homevid from '../images/homevid.mp4'
import homevidmob from '../images/homevidmob.mp4'
import { useEffect} from "react";
import Aos from 'aos';
import"aos/dist/aos.css";

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

function Home2() {

    
 
  document.addEventListener('contextmenu', event => event.preventDefault());
  useEffect(()=>{
    Aos.init({duration:1000,
      once: false, 
      mirror: true,});
  }, []);

return (
    <div className='h-auto'>
        <div class=" h-auto hidden sm:flex flex-col items-center justify-center text-center  pb-40">
        <div class=" w-auto  sticky top-[0px] h-screen object-cover">
            <video className=" sm:object-cover h-screen w-screen" src={homevid} type="video/mp4" autoplay={"true"} muted ></video>
        </div>
        <div class="flex flex-row text-[#909090] z-10 items-end justify-start h-[90%]">
            <div className='w-[40%]'>

            </div>
            <div className='flex flex-col items-end  justify-end lg:w-[60%] w-[50%]  z-10 gap-80 ' data-aos="fade-up" data-aos-easing="ease-in-out">
                <div className='  items-center flex flex-col justify-center h-auto    ' data-aos="fade-up" data-aos-easing="ease-in-out">
                    <p className="text-justify al w-[70%] pt-40 text-2xl">
                        <p className='ah lg:text-4xl text-[40px] underline decoration-4 underline-offset-[12px] pb-7'>Millennials and Gen Zs in the house</p>
                        Grustl is a team of like-minded, talented young individuals who are dedicated to producing 
                        exceptional work for the coolest and most innovative brands in the industry. Working together 
                        under one roof, they are able to harness their collective passion and skills to consistently 
                        exceed their clients' expectations. 
                    </p>
                </div>
                <div className=' items-center flex flex-col justify-center h-auto   'data-aos="fade-up" data-aos-easing="ease-in-out">
                    <p className="text-justify al w-[70%] pt- text-2xl" data-aos="fade-up" data-aos-easing="ease-in-out">
                        <p className='ah lg:text-4xl text-[40px] underline decoration-4 underline-offset-[12px] pb-7'>Dump Traditional Approaches</p>
                        In this new era, generic marketing techniques like SEO, templates, and boring email 
                        campaigns no longer work. At Grustl, we believe in creating real, tangible impacts 
                        for the modern brands we work with. We focus on delivering unique and effective 
                        solutions that help our clients stand out in today's competitive market. Our goal 
                        is to help brands make a lasting impression on their customers and drive real results.
                    </p>
                </div>
                <div className='  items-center flex flex-col justify-center h-auto    'data-aos="fade-up" data-aos-easing="ease-in-out">
                    <p className="text-justify al w-[70%] pt-0 text-2xl" data-aos="fade-up" data-aos-easing="ease-in-out">
                        <p className='ah lg:text-4xl text-[40px] underline decoration-4 underline-offset-[12px] pb-7'>Let Grustl Guide Through</p>
                        At Grustl, we are strong believers in the power of creativity. We believe that unique, 
                        original ideas that are built from the ground up are the key to making a product or 
                        brand stand out from its competition. That's why we take the time to carefully research 
                        and develop creative strategies that are tailored to each of our clients' needs. 
                        We believe that by implementing these strategies, we can help our clients achieve 
                        real, tangible results and stand out in their market.
                    </p>
                </div>
                <div className='  items-center flex flex-col justify-center h-auto    'data-aos="fade-up" data-aos-easing="ease-in-out">
                    <p className="text-justify al w-[70%] pt- text-2xl" data-aos="fade-up" data-aos-easing="ease-in-out">
                        <p className='ah lg:text-4xl text-[40px] underline decoration-4 underline-offset-[12px] pb-7'>Network and outreach</p>
                        At Grustl, we work with a diverse group of influencers and talented individuals to create 
                        a comprehensive in-house pool of creators. By simplifying the process of outreach and
                        management, Grustl allows brands and influencers to focus on their areas of expertise and 
                        strength. We pride ourselves on connecting the right people with the right opportunities.
                    </p>
                </div>
                <div className='  items-center flex flex-col justify-center h-auto    '>
                    <p className="text-justify al w-[70%] pt- text-2xl">
                        <p className='ah'></p>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </p>
                </div>
                
            </div>
        </div>
    </div>
    <div className='flex flex-col sm:hidden h-auto'>
        <video src={homevidmob}  muted autoPlay={true}  type="video/mp4" autoplay={"true"}  className='object-fill '></video>
        <div className='w-full h-[50%] '>
        <AwesomeSlider className="bg-black" organicArrows={false} interval={9}>
            <div className='text-white w-[80%] text-center ' >
                
                        At Grustl, we work with a diverse group of influencers and talented individuals to create 
                        a comprehensive in-house pool of creators. By simplifying the process of outreach and
                        management, Grustl allows brands and influencers to focus on their areas of expertise and 
                        strength. We pride ourselves on connecting the right people with the right opportunities.
                    
            </div>
            <div className='text-white w-[80%] text-center'>
                
                        At Grustl, we work with a diverse group of influencers and talented individuals to create 
                        a comprehensive in-house pool of creators. By simplifying the process of outreach and
                        management, Grustl allows brands and influencers to focus on their areas of expertise and 
                        strength. We pride ourselves on connecting the right people with the right opportunities.
                   
            </div>
            <div className='text-white w-[80%] text-center'>
               
                        At Grustl, we work with a diverse group of influencers and talented individuals to create 
                        a comprehensive in-house pool of creators. By simplifying the process of outreach and
                        management, Grustl allows brands and influencers to focus on their areas of expertise and 
                        strength. We pride ourselves on connecting the right people with the right opportunities.
                   
            </div>
            <div className='text-white w-[80%] text-center'>
                
                        At Grustl, we work with a diverse group of influencers and talented individuals to create 
                        a comprehensive in-house pool of creators. By simplifying the process of outreach and
                        management, Grustl allows brands and influencers to focus on their areas of expertise and 
                        strength. We pride ourselves on connecting the right people with the right opportunities.
                   
            </div>

        </AwesomeSlider>
        </div>
        

    </div>
</div>
    

    );
  }
  export default Home2;




  // <div className='flex flex-row select-none bg-black  h-auto object-contain start w-full'>
  //     <div className=' sticky top-0'>
  //       <video src={homevid}  muted autoPlay   className='sm:object-cover'/>
  //     </div>
           
      //   <div className='flex flex-col w-[50%]  z-50 gap-60 pb-60'>
      //     <div className='  items-center flex flex-col justify-center h-auto   bg-black text-white'>
      //         <p className="text-justify al w-[70%] pt-40 text-2xl">
      //             <p className='ah'>Millennials and Gen Zs in the house</p>
      //             Grustl is a bunch of like minded young talents working together under one roof, 
      //             to deliver finest results to the coolest of coolest brands that we work with. 
      //             So the OKAY BOOMER part can be Skipped.
      //         </p>
      //     </div>
      //     <div className='  items-center flex flex-col justify-center h-auto   bg-black text-white'>
      //         <p className="text-justify al w-[70%] pt-0 text-2xl">
      //             <p className='ah'>Millennials and Gen Zs in the house</p>
      //             Grustl is a bunch of like minded young talents working together under one roof, 
      //             to deliver finest results to the coolest of coolest brands that we work with. 
      //             So the OKAY BOOMER part can be Skipped.
      //         </p>
      //     </div>
      //     <div className='  items-center flex flex-col justify-center h-auto   bg-black text-white'>
      //         <p className="text-justify al w-[70%] pt- text-2xl">
      //             <p className='ah'>Millennials and Gen Zs in the house</p>
      //             Grustl is a bunch of like minded young talents working together under one roof, 
      //             to deliver finest results to the coolest of coolest brands that we work with. 
      //             So the OKAY BOOMER part can be Skipped.
      //         </p>
      //     </div>
      //     <div className=' items-center flex flex-col justify-center h-auto  bg-black text-white'>
      //         <p className="text-justify al w-[70%] pt- text-2xl">
      //             <p className='ah'>Millennials and Gen Zs in the house</p>
      //             Grustl is a bunch of like minded young talents working together under one roof, 
      //             to deliver finest results to the coolest of coolest brands that we work with. 
      //             So the OKAY BOOMER part can be Skipped.
      //         </p>
      //     </div>
      // </div>
  //   </div>