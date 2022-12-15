import homevid from '../images/homevid.mp4'
import { useEffect} from "react";
import Aos from 'aos';
import"aos/dist/aos.css";

// import ScrollMagic from 'scrollmagic';

// const intro = document.querySelector(".intro");
// const video = document.querySelector(".video");
// //END SECTION
// // const end = document.querySelector(".endd")

// //SCROLLMAGIC
// const controller = new ScrollMagic.Controller();

// //Scenes
// let scene = new ScrollMagic.Scene({
//   duration: 19000,
//   triggerElement: intro,
//   triggerHook: 0
// })
//   .addIndicators()
//   .setPin(intro)
//   .addTo(controller);


// //Video Animation
// let scrollpos = 0;


// scene.on("update", e => {
//   scrollpos = e.scrollPos/800 ;
  
// });

// setInterval(() => {
//   video.currentTime = scrollpos;
// }, 33.3);

function Home2() {

    
 
  document.addEventListener('contextmenu', event => event.preventDefault());
  useEffect(()=>{
    Aos.init({duration:1000,
      once: false, 
      mirror: true,});
  }, []);

return (
    <div class=" h-auto hidden sm:flex flex-col items-center justify-center text-center  pb-40">
      <div class=" w-auto  sticky top-[0px] h-screen object-cover">
          <video className=" sm:object-cover h-screen w-screen" src={homevid} type="video/mp4" autoplay={"true"} muted ></video>
      </div>
      <div class="flex flex-row text-[#909090] z-10 items-end justify-start h-[90%]">
        <div className='w-[40%]'>

        </div>
        <div className='flex flex-col items-end  justify-end lg:w-[60%] w-[50%]  z-10 gap-80 '>
            <div className='  items-center flex flex-col justify-center h-auto    'data-aos="fade-up" data-aos-easing="ease-in-out">
                <p className="text-justify al w-[70%] pt-40 text-2xl">
                    <p className='ah lg:text-4xl text-[40px] underline decoration-4 underline-offset-[12px] pb-7'>Millennials and Gen Zs in the house</p>
                    Grustl is a bunch of like minded young talents working together under one roof, 
                    to deliver finest results to the coolest of coolest brands that we work with. 
                    So the OKAY BOOMER part can be Skipped.
                </p>
            </div>
            <div className=' items-center flex flex-col justify-center h-auto   'data-aos="fade-up" data-aos-easing="ease-in-out">
                <p className="text-justify al w-[70%] pt- text-2xl">
                    <p className='ah lg:text-4xl text-[40px] underline decoration-4 underline-offset-[12px] pb-7'>Dump Traditional Approaches</p>
                    It’s a New era and generic marketing stuff like SEO, Templates, boring email 
                    campaigns and all sorts of bs belong to the trash. We are just about creating impacts to brands of the modern age.
                </p>
            </div>
            <div className='  items-center flex flex-col justify-center h-auto    'data-aos="fade-up" data-aos-easing="ease-in-out">
                <p className="text-justify al w-[70%] pt-0 text-2xl">
                    <p className='ah lg:text-4xl text-[40px] underline decoration-4 underline-offset-[12px] pb-7'>Let Grustl Guide Through</p>
                    Grustl works with a bunch of influencers and talents hence we have a shed of creators and talent pool in-house where grustl 
                    simplifies the hassle of outreach and managing which lets the brands and influencers to solely focus on what they are good at 
                    and “We Connect”.
                </p>
            </div>
            <div className='  items-center flex flex-col justify-center h-auto    'data-aos="fade-up" data-aos-easing="ease-in-out">
                <p className="text-justify al w-[70%] pt- text-2xl">
                    <p className='ah lg:text-4xl text-[40px] underline decoration-4 underline-offset-[12px] pb-7'>Network and outreach</p>
                    Grustl is a bunch of like minded young talents working together under one roof, 
                    to deliver finest results to the coolest of coolest brands that we work with. 
                    So the OKAY BOOMER part can be Skipped.
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