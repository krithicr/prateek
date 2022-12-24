import React from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef} from "react";
// import './Services.css';
import Aos from 'aos';
import"aos/dist/aos.css";

function ServicesC() {
        gsap.registerPlugin(ScrollTrigger);

        const ref = useRef(null);

        useEffect(() => {
          const element = ref.current;

          gsap.to(
            element.querySelector(".first"),
            {
              color:"black",
              scrollTrigger: {
                trigger: element.querySelector(".start"),
                start: "top top",
                end: "400px",
                scrub: true,
                
              }
            }
          );
        }, []);


       //gray/
        useEffect(() => {
          const element = ref.current;

          gsap.to(
            element.querySelector(".first"),
            {
              color:"#B5B5B5",
              scrollTrigger: {
                trigger: element.querySelector(".first-paragraph"),
                start: "top top",
                end: "400px",
                scrub: true,
                
              }
            }
          );
        }, []);

        useEffect(() => {
          const element = ref.current;

          gsap.to(
            element.querySelector(".second"),
            {
              color:"black",
              scrollTrigger: {
                trigger: element.querySelector(".first-paragraph"),
                start: "top top",
                end: "400px",
                scrub: true,
             
              }
            }
          );
        }, []);

        //gray/
        useEffect(() => {
          const element = ref.current;

          gsap.to(
            element.querySelector(".second"),
            {
              color:"#B5B5B5",
              scrollTrigger: {
                trigger: element.querySelector(".second-paragraph"),
                start: "top top",
                end: "400px",
                scrub: true,
              
              }
            }
          );
        }, []);

        useEffect(() => {
          const element = ref.current;

          gsap.to(
            element.querySelector(".third"),
            {
              color:"black",
              scrollTrigger: {
                trigger: element.querySelector(".second-paragraph"),
                start: "top top",
                end: "400px",
                scrub: true,
               
              }
            }
          );
        }, []);

        //gray/
        useEffect(() => {
          const element = ref.current;

          gsap.to(
            element.querySelector(".third"),
            {
              color:"#B5B5B5",
              scrollTrigger: {
                trigger: element.querySelector(".third-paragraph"),
                start: "top top",
                end: "400px",
                scrub: true,
              
              }
            }
          );
        }, []);

        useEffect(() => {
          const element = ref.current;

          gsap.to(
            element.querySelector(".fourth"),
            {
              color:"black",
              scrollTrigger: {
                trigger: element.querySelector(".third-paragraph"),
                start: "top",
                end: "400px",
                scrub: true,
               
              }
            }
          );
        }, []);

        //gray
        useEffect(() => {
          const element = ref.current;

          gsap.to(
            element.querySelector(".fourth"),
            {
              color:"#B5B5B5",
              scrollTrigger: {
                trigger: element.querySelector(".fourth-paragraph"),
                start: "top",
                end: "400px",
                scrub: true,
              
              }
            }
          );
        }, []);
        
        // scroll
        useEffect(() => {
          const element = ref.current;

          gsap.to(
            element.querySelector(".scrollb"),
            {
              background:"black",
              scrollTrigger: {
                trigger: element.querySelector(".start"),
                start: "top",
                end: "400px",
                Tween: true,
                scrub: true,
                duration: {min: 0.2, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
                delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
                ease: "power1.inOut"
              }
            }
          );
        }, []);

        useEffect(() => {
          const element = ref.current;

          gsap.to(
            element.querySelector(".scrollb"),
            {
              background:"white",
              scrollTrigger: {
                trigger: element.querySelector(".first-paragraph"),
                start: "top top",
                end: "400px",
                Tween: true,
                scrub: true,
                duration: {min: 0.2, max: 3}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
                delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
                ease: "power1.inOut"
              }
            }
          );
        }, []);

        useEffect(() => {
          const element = ref.current;

          gsap.to(
            element.querySelector(".scrollb1"),
            {
              background:"black",
              scrollTrigger: {
                trigger: element.querySelector(".first-paragraph"),
                start: "top",
                end: "400px",
                Tween: true,
                scrub: true,
                duration: {min: 0.4, max: 6}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
                delay: 10, // wait 0.2 seconds from the last scroll event before doing the snapping
                ease: "power1.in"
              }
            }
          );
        }, []);

        useEffect(() => {
          const element = ref.current;

          gsap.to(
            element.querySelector(".scrollb1"),
            {
              background:"white",
              scrollTrigger: {
                trigger: element.querySelector(".second-paragraph"),
                start: "top top",
                end: "400px",
                Tween: true,
                scrub: true,
                duration: {min: 0.4, max: 6}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
                delay: 10, // wait 0.2 seconds from the last scroll event before doing the snapping
                ease: "power1.in"
              }
            }
          );
        }, []);

        useEffect(() => {
          const element = ref.current;

          gsap.to(
            element.querySelector(".scrollb2"),
            {
              background:"black",
              scrollTrigger: {
                trigger: element.querySelector(".second-paragraph"),
                start: "top",
                end: "400px",
                scrub: true,
                Tween: true,
                duration: {min: 0.4, max: 6}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
                delay: 10, // wait 0.2 seconds from the last scroll event before doing the snapping
                ease: "power1.in"
              }
            }
          );
        }, []);

        useEffect(() => {
          const element = ref.current;

        gsap.to(
          element.querySelector(".scrollb2"),
          {
            background:"white",
            scrollTrigger: {
              trigger: element.querySelector(".third-paragraph"),
              start: "top top",
              end: "400px",
              scrub: true,
              Tween: true,
              duration: {min: 0.4, max: 6}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
              delay: 10, // wait 0.2 seconds from the last scroll event before doing the snapping
              ease: "power1.in"
            }
          }
        );
      }, []);

      useEffect(() => {
        const element = ref.current;

        gsap.to(
          element.querySelector(".scrollb3"),
          {
            background:"black",
            scrollTrigger: {
              trigger: element.querySelector(".third-paragraph"),
              start: "top",
              end: "400px",
              scrub: true,
              Tween: true,
              duration: {min: 0.4, max: 6}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
              delay: 10, // wait 0.2 seconds from the last scroll event before doing the snapping
              ease: "power1.in"
            }
          }
        );
      }, []);

      useEffect(() => {
        const element = ref.current;

        gsap.to(
          element.querySelector(".scrollb3"),
          {
            background:"black",
            scrollTrigger: {
              trigger: element.querySelector(".fourth-paragraph"),
              start: "top",
              end: "400px",
              scrub: true,
              Tween: true,
              duration: {min: 0.4, max: 6}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
                delay: 10, // wait 0.2 seconds from the last scroll event before doing the snapping
                ease: "power1.in"
            }
          }
        );
      }, []);

      
      useEffect(()=>{
        Aos.init({duration:700,
          once: false, 
          mirror: true,});
      }, []);

        
      document.addEventListener('contextmenu', event => event.preventDefault());
        return (

          <div id="Services" className="select-none service flex flex-row h-auto object-contain start w-full items- justify-center gap-5"  ref={ref}>
            
            <div className=" pt-60  pb-[300px] sm:flex hidden start w-[40%] pl-10 ">
            <div className="  flex items-center justify-center  text-5xl ah h-[400px]  sticky top-[250px] w-[100%]"> 
               <div className="flex flex-row ">
                 {/* <div className="w-[4px] h-[400px] bg-gray-300 sm:visible invisible "></div> */}
                 {/* <div className="-pl-1">
                   <div className="scrollb  w-[6px] h-[100px]  "></div>
                   <div className="scrollb1  w-[6px] h-[100px] bg-white "></div>
                   <div className="scrollb2  w-[6px] h-[100px] bg-white "></div>
                   <div className="scrollb3  w-[6px] h-[100px] bg-white "></div>
                 </div> */}
               </div> 
            
                <ul className=" text-[#B5B5B5] pl-0 w-[100%] text-5xl sm:visible invisible ">
        
                 <li className="first pt-6 h-[100px]  "> 
                 <h1>Creative Branding</h1> 
                 </li>
                 <li className="second pt-6  h-[100px] s">
                   <h1 className="">Influencer Marketing</h1>
                 </li>
                 <li className="third pt-6 h-[100px] ">
                   <h1>Brand Strategy</h1>
                 </li>
                 <li className="fourth pt-6 h-[90px] ">
                   <h1>Consulting</h1>
                 </li>
                
               
               </ul>
      
             </div>
            </div>
            
            <div className=" flex items-center justify-center text-2xl  h-auto w-full sm:w-[50%] text-justify pt-40 sm:pt-[250px]  ">
               <ul className='  flex flex-col items-center justify-center'>
                 <li className="  sm:w-[80%] w-[90%] pt-10 " data-aos="fade-up" data-aos-easing="ease-in-out"> 
                   <p className=' ah pl-1 font-extrabol text-center sm:invisible '>Creative Branding</p> 
                   <div className='w-full first-paragraph '>
                      <p className='box-1 sm:text-left text-center ah font-extrabol pt-4 text-3xl'>Not just your Ordinary Branding Agency</p>
                      <p className=" al pt-4 text-justify leading-7 text-[19px] "data-aos="fade-up">
                      Your brand is the cornerstone of your reputation, and it's the little things that can make a big impact 
                      on how people perceive your business. At our company, we help you showcase the unique qualities of your 
                      brand and forge an emotional connection with your audience, leaving a lasting impression on their 
                      subconscious minds. With our expertise, you can build a strong, positive reputation and connect 
                      with your audience in a meaningful way.
                      </p>
                    </div>
                 </li>
                 <li className=" sm:w-[80%] w-[90%] pt-40 sm:pt-96" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="1000">
                   <p className='ah pl-1 font-extrabol text-center sm:invisible '>Influencer Marketing</p> 
                   <div className='second-paragraph '>
                    <p className=' box-2 ah sm:text-left text-center ah font-extrabol pt-4 text-3xl'>Underrated yet Extensive</p>
                    <p className=" pt-5 al text-justify leading-7 text-[19px]"data-aos="fade-up" data-aos-easing="ease-in-out">
                    Influencers have a powerful sway over their loyal audiences, and can be effective 
                    at promoting products and services through word-of-mouth marketing. From offering 
                    referral codes for discounts to sharing tips for new skin care routines, influencers 
                    can help drive business for your brand. At Grustl, we serve as a bridge between brands 
                    and influencers, simplifying the process of outreach, strategy development, and campaign 
                    management. Let us help you harness the power of influencer marketing and grow your business.
                    </p>
                    </div>
                 </li>
                 <li className=" sm:w-[80%] w-[90%] pt-40 sm:pt-96" data-aos="fade-up" data-aos-easing="ease-in-out">
                   <p className='ah  pl-1 font-extrabol text-center sm:invisible '>Brand Strategy</p> 
                    <div className='third-paragraph '>
                      <p className='box-3 ah sm:text-left text-center ah font-extrabol pt-4 text-3xl' > It’s high time to define your brand</p>
                      <p className=" pt-5 al text-justify leading-7 text-[19px]" data-aos="fade-up" data-aos-easing="ease-in-out">
                      Before we can help your brand succeed, it's crucial to have a deep understanding of 
                      the market and your competition. At Grustl, we conduct thorough research and case 
                      studies to uncover the answers to important questions about your brand's purpose, 
                      its place in the market, and how to stand out from the competition. By gaining insight 
                      into how you want to be perceived and how your ideal customer sees you, we can develop 
                      a tailored, effective brand strategy that helps you achieve your goals.
                      </p>
                    </div>
                </li>
                 <li className=" sm:w-[80%] w-[90%] pt-40 sm:pt-96 pb " data-aos="fade-up" data-aos-easing="ease-in-out">
                   <p className='ah pl-1 font-extrabol text-center sm:invisible '>Consulting</p> 
                    <div className='fourth-paragraph '>
                      <p className='box-4 ah sm:text-left text-center ah font-extrabol pt-4 text-3xl' >Borrow the Grustl Brains</p>
                      <p className=" al pt-5 text-justify pb-40 sm:pb-96 leading-7 text-[19px]" data-aos="fade-up" data-aos-easing="ease-in-out">
                      At Grustl, we focus on understanding the needs of our clients' brands and providing tailored solutions. 
                      By identifying the "North Star" brands that align with your desired brand identity, we can gain insights 
                      and develop concepts to help you achieve your goals. Rather than spending excessive time on content design 
                      and planning, we prioritize analysis and strategic planning to ensure the success of your brand.
                      </p>
                    </div>
                 </li>
                
               </ul>
             </div> 
      
          </div>
        );
    }
export default ServicesC