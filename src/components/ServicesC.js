import React from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef} from "react";
import './Services.css';

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

      
        

        

        return (

          <div className="service flex flex-row h-auto object-contain start w-full items- justify-center" ref={ref}>
            
            <div className=" pt-60  pb-[300px] sm:flex hidden start w-[40%] ">
            <div className="  flex items-center justify-center  text-5xl ah h-[400px]  sticky top-[250px] "> 
               <div className="flex flex-row ">
                 <div className="w-[4px] h-[400px] bg-gray-300 sm:visible invisible "></div>
                 <div className="-pl-1">
                   <div className="scrollb  w-[6px] h-[100px]  "></div>
                   <div className="scrollb1  w-[6px] h-[100px] bg-white "></div>
                   <div className="scrollb2  w-[6px] h-[100px] bg-white "></div>
                   <div className="scrollb3  w-[6px] h-[100px] bg-white "></div>
                 </div>
               </div> 
            
                <ul className=" text-[#B5B5B5] pl-20 w-[950px] text-5xl sm:visible invisible ">
        
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
            
            <div className="fadepara flex items-center justify-center text-2xl  h-auto w-full sm:w-[55%] text-justify pt-40 sm:pt-[250px] ">
               <ul className='flex flex-col items-center justify-center'>
                 <li className="sm:w-[80%] w-[90%] pt-10"> 
                   <p className=' ah pl-1 font-extrabol text-center sm:invisible '>Creative Branding</p> 
                   <div className='w-full'>
                      <p className='box-1 sm:text-left text-center ah font-extrabol pt-4'>Not just your Ordinary Branding Agency</p>
                      <p className="first-paragraph pt-5 al text-justify">
                        Your brand is your reputation and those small details and trends tend to make a huge impact on eyes, 
                        hearts and minds of the people around you. Making people Admire those small details and streaks creates 
                        a huge impact on their subconscious minds, which is nothing but magic. And we do that magic for you!
                      </p>
                    </div>
                 </li>
                 <li className="sm:w-[80%] w-[90%] pt-40 sm:pt-96">
                   <p className='ah pl-1 font-extrabol text-center sm:invisible '>Influencer Marketing</p> 
                   <div>
                    <p className=' box-2 ah sm:text-left text-center ah font-extrabol pt-4'>Underrated yet Extensive</p>
                    <p className="second-paragraph pt-5 al text-justify">
                      From using the referral code for an extra 20% discount to getting us to follow a new skin care routine, 
                      the influencers got us. Not just us you too. These people are backed up by loyal audiences who relate themselves 
                      with them. So why still underestimate the power of the new age word of mouth marketing. Let Grustl be the bridge 
                      between the brand and the influencer, so the influencer as well as the brand can skip the tedious process of outreach, 
                      building strategies and running campaigns.
                    </p>
                    </div>
                 </li>
                 <li className="sm:w-[80%] w-[90%] pt-40 sm:pt-96">
                   <p className='ah  pl-1 font-extrabol text-center sm:invisible '>Brand Strategy</p> 
                    <div>
                      <p className='box-3 ah sm:text-left text-center ah font-extrabol pt-4'> It’s high time to define your brand</p>
                      <p className="third-paragraph pt-5 al text-justify">
                        Questions like what is the meaning of the brand, why does it exist, what is the market volume, 
                        how to win over competitors and hence forth must be addressed. Before vaguely coming up with solutions 
                        we at Grustl do intense case studies and immense research to full-fill the problem of how the brand wants 
                        to be perceived and how the ideal customer perceives the brand. 
                      </p>
                    </div>
                </li>
                 <li className="sm:w-[80%] w-[90%] pt-40 sm:pt-96 pb">
                   <p className='ah pl-1 font-extrabol text-center sm:invisible '>Consulting</p> 
                    <div >
                      <p className='box-4 ah sm:text-left text-center ah font-extrabol pt-4'>Borrow the Grustl Brains</p>
                      <p className="fourth-paragraph al pt-5 text-justify pb-40 sm:pb-96">
                        More than time burnt on designing and planning content, we spend majority of our time on 
                        analysing the needs of brands. By just pointing out the North Star brand which is nothing 
                        but the brands those are similar to the brand that we want to create or become, we at grustl 
                        can obtain insights and concepts to get you there to where you wanted to be.
                      </p>
                    </div>
                 </li>
                
               </ul>
             </div> 
      
          </div>
        );
    }
export default ServicesC