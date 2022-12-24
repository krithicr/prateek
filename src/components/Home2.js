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
    <div className='h-auto z-0'>
        <div class=" h-auto hidden sm:flex flex-col items-center justify-center text-center  pb-40">
        <div class=" w-auto  sticky top-[0px] h-screen object-cover">
            <video src={homevid}  muted autoPlay   className='sm:object-cover h-screen w-screen '/> 
        </div>
        <div class="flex flex-row text-[#909090] z-10 items-end justify-start h-[90%]">
            <div className='w-[40%]'>

            </div>
            <div className='flex flex-col items-end  justify-end lg:w-[60%] w-[50%]  z-10 gap-80 ' data-aos="fade-up" data-aos-easing="ease-in-out">
                <div className='  items-center flex flex-col justify-center h-auto    ' data-aos="fade-up" data-aos-easing="ease-in-out">
                    <p className="text-justify al w-[70%] pt-40 text-2xl">
                        <p className='ah lg:text-4xl text-[40px] underline decoration-4 underline-offset-[12px] pb-7'>Millennials and Gen Zs in the house</p>
                            At Grustl, we are a team of Talented Young Professionals Delivering Exceptional 
                            Work for the coolest and most innovative brands in the industry.
                    </p>
                </div>
                <div className=' items-center flex flex-col justify-center h-auto pt-40  'data-aos="fade-up" data-aos-easing="ease-in-out">
                    <p className="text-justify al w-[70%] pt- text-2xl" data-aos="fade-up" data-aos-easing="ease-in-out">
                        <p className='ah lg:text-4xl text-[40px] underline decoration-4 underline-offset-[12px] pb-7'>Dump Traditional Approaches</p>
                        In this New era, generic marketing techniques like SEO, templates, 
                        and boring email campaigns no longer work. At Grustl, we believe in 
                        creating real, tangible impacts for the modern brands we work with.
                    </p>
                </div>
                <div className='  items-center flex flex-col justify-center h-auto  pt-40  'data-aos="fade-up" data-aos-easing="ease-in-out">
                    <p className="text-justify al w-[70%] pt-0 text-2xl" data-aos="fade-up" data-aos-easing="ease-in-out">
                        <p className='ah lg:text-4xl text-[40px] underline decoration-4 underline-offset-[12px] pb-7'>Let Grustl Guide Through</p>
                        At Grustl, we take our time to carefully research and develop creative 
                        strategies that are tailored to each of our client’s needs. We believe 
                        that by implementing these strategies, we can help our clients achieve 
                        real, tangible results and stand out in their market.
                    </p>
                </div>
                <div className='  items-center flex flex-col justify-center h-auto   pt-40 'data-aos="fade-up" data-aos-easing="ease-in-out">
                    <p className="text-justify al w-[70%] pt- text-2xl" data-aos="fade-up" data-aos-easing="ease-in-out">
                        <p className='ah lg:text-4xl text-[40px] underline decoration-4 underline-offset-[12px] pb-7'>Network and outreach</p>
                        Till day, we work with a diverse group of influencers and talented individuals 
                        to create a comprehensive in-house pool of creators. By simplifying the process 
                        of outreach and management, Grustl allows brands and influencers to focus on 
                        their areas of expertise.
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
        <AwesomeSlider className="bg-black" Arrows={true} bullets={false} interval={9}>
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