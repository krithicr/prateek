import homevid from '../images/homevid.mp4'
import ScrollMagic from 'scrollmagic';

const intro = document.querySelector(".intro");
const video = document.querySelector(".video");
//END SECTION
const end = document.querySelector(".endd")

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 6000,
  triggerElement: intro,
  triggerHook: 0
})
  .addIndicators()
  .setPin(intro)
  .addTo(controller);


//Video Animation
let scrollpos = 0;


scene.on("update", e => {
  scrollpos = e.scrollPos/900 ;
  
});

setInterval(() => {
  video.currentTime = scrollpos;
}, 33.3);

function Home2() {
 
    
  
return (
    <div className='flex flex-row-reverse items- justify-center  bg-red-200  '>
    <div className='flex flex-col w-[50%] sticky top-[250px] pt-60'>
        <div className='  items-center flex flex-col justify-center h-[400px]   bg-black text-white'>
            <p className="text-justify al w-[70%] pt-40 text-2xl">
                <p className='ah'>Millennials and Gen Zs in the house</p>
                Grustl is a bunch of like minded young talents working together under one roof, 
                to deliver finest results to the coolest of coolest brands that we work with. 
                So the OKAY BOOMER part can be Skipped.
            </p>
        </div>
        <div className=' items-center flex flex-col justify-center h-[400px]  bg-black text-white'>
            <p className="text-justify al w-[70%] pt-40 text-2xl">
                <p className='ah'>Millennials and Gen Zs in the house</p>
                Grustl is a bunch of like minded young talents working together under one roof, 
                to deliver finest results to the coolest of coolest brands that we work with. 
                So the OKAY BOOMER part can be Skipped.
            </p>
        </div>
    </div>
        
        <div className="videocontainer flex w-[50%] h-auto  bg-blue-200 ">
            <div className="intro ">
                <video src={homevid} autoplay muted className="video z-50 "></video>
            </div>  
        </div>
    </div>
      
    
    
    );
  }
  export default Home2;