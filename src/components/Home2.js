
import { useEffect} from "react";
import Aos from 'aos';
import"aos/dist/aos.css";
import phone from "../images/phone.svg"
import candle from "../images/Candle.png"
import money from "../images/money.png"
import 'react-awesome-slider/dist/styles.css';

function Home2() {

    
 
  //document.addEventListener('contextmenu', event => event.preventDefault());
  useEffect(()=>{
    Aos.init({duration:700,
      once: false, 
      mirror: true,});
  }, []);

return (
    <div className='h-auto z-0 sm:flex hidden flex-col' >
        <div className='relative rounded-b-[120px]  h-screen w-full bg-black z-[10] flex flex-row gap-40 items-center justify-start '>
            <div data-aos="fade-up" data-aos-easing="ease-in-out" className='border-[1px]  border-white w-[60%] h-[50%] bg-gradient-to-tr items-center justify-center from-black mx-20 to-[#414141] rounded-[40px] flex felx-col'>
                <div className="w-[90%] h-[70%] text-white  flex flex-col items-center justify-center ">
                    <p className=" text-[56px] ah text-left w-full  leading-[55px]">“Sketching exceptional<br></br>
                    apps, onepixel at a time”</p>
                    <p className="text-[18px] pt-10  al ">
                        <p className="w-[90%]">"Experience the best in class <span className="ah tracking-wider"> UI/UX Design</span>   with our team  
                        of experts. We specialise in carefully crafting unique 
                        and intuitive app and web user interfaces, ensuring 
                        user-friendly and visually appealing digital experiences.</p>
                    </p>
                    {/* <div className="pt-10 w-full flex items-start justify-start">
                        <button className="ah bg-[#373737] w-[30%] border-[1px] border-white h-12 rounded-[40px] text-white text-center">Discover</button>
                    </div> */}
                </div>
            </div>

                <img src={phone} alt="bakingus" data-aos="fade-up" data-aos-easing="ease-in-out"  className='z-[11] absolute right-20 -bottom-10'/>

        </div>

        <div className='z-[8] bg-[#E4E4E4] rounded-b-[120px] h-screen w-full  flex flex-row-reverse  items-center justify-end -translate-y-24 '>
            
            <div data-aos="fade-up" data-aos-easing="ease-in-out" className='bg-gradient-to-bl from-[#C3C3C3] to-[#FFFFFF] absolute right-10 w-[57%] h-[45%] items-center justify-center border-[1px] mx-2 border-black  rounded-[40px] flex felx-col '>
                <div className="w-[90%] h-[70%] text-black  flex flex-col items-center justify-center ">
                    <p className="text-[45px] 2xl:text-[56px] ah text-left w-full  leading-[55px]">“Maximize the Impact of Your Brand <br></br>with Strategic Branding Choices”</p>
                    <p className="text-[18px] pt-10  al ">
                        <p className="w-[90%]">"We specialise in creating professional <span className="ah tracking-wider"> Branding Resources </span>
                        including logo, packaging designs, Pitch Decks, Custom T-shirts and more to help 
                        businesses effectively communicate their brand identity and values to their target 
                        audience.</p>
                    </p>
                    {/* <div className="pt-10 w-full flex items-start justify-start">
                        <button className="ah bg-[#373737] w-[30%] border-[1px] border-white h-12 rounded-[40px] text-white text-center">Discover</button>
                    </div> */}
                </div>
            </div>
            <img src={candle} alt="bakingus"  className='h-full w-[50%] left-0 relative object-cover pb-24 '/>
                

        </div> 
        <div className='h-screen   w-full bg-[#141414] rounded-b-[120px] z-[7] flex flex-row gap-40 items-center justify-start -translate-y-44'>
            <div  className='relative border-[1px]  border-white w-[50%] h-[50%] bg-gradient-to-tr items-center justify-center ml-40 from-black to-[#414141] rounded-[40px] flex felx-col'>
                <div className="w-[90%] h-[70%] text-white  flex flex-col items-center justify-center ">
                    <p className="text-[45px] 2xl:text-[56px] ah text-left w-full leading-[55px]">Leave the Heavy Lifting to us, <br></br>watch your Brand Thrive.</p>
                    <p className="text-[18px] pt-10  al ">
                        <p className="w-[90%]">As your partner in growth, we're invested in your success just as 
                        much as you are. Our team of experts will handle all the marketing research and strategy 
                        development, so you can focus on what truly matters - expanding your brand.</p>
                    </p>
                    {/* <div className="pt-10 w-full flex items-start justify-start">
                        <button className="ah bg-[#373737] w-[30%] border-[1px] border-white h-12 rounded-[40px] text-white text-center">Discover</button>
                    </div> */}
                </div>
            </div>
            
                <img data-aos="fade-up" data-aos-easing="ease-in-out" src={money} alt="bakingus" className='2xl:w-[47%] w-[50%] z-[11] absolute right-0 ' />

        </div>
        
    </div>
    );
  }
  export default Home2;




  