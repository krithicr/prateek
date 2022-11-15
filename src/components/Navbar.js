// import React from 'react';
// import { Link } from 'react-router-dom';
// import grlogo from '../images/grlogo.png';

// const Navbar = () => {
//   return (
//     <div className='nav flex justify-center items-center h-16 bg-white text-gray-600 relative shadow-sm ' role='navigation'>
//         <div>
//             <Link to="/" className='pl-8'>
//             <img src={grlogo} className="scale-75 z-40 " alt="" />
//             </Link>
//         </div>
//         <div className='px-4 cursor-pointer md:hidden'>
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
//         </div>
//         <div className='pr-8 md:block hidden '>
//             <Link className='p-4' to="/">Home.</Link>
//             <Link className='p-4' to="/Services">Services.</Link>
//             <Link className='p-4' to="/Mancave">Mancave.</Link>
//             <Link className='p-4' to="/Career">Career.</Link>
//             <Link className='p-4' to="/Connect">Connect.</Link>
//         </div>
//     </div>
//   )
// }

// export default Navbar

/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import {motion} from 'framer-motion';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';




const Navbar = () =>{
    
    const variants ={
        open:{opacity: 1, x:2},
        closed: {opacity: 0, x: "-100%"}
    }

    const iconvar = {

        open:{opacity: 0, x:"-100%" },
        closed: {opacity: 1, x: 2}
    }

    const [show , setShow] = useState(false);
    
    const showSidebar = () => setShow(!show);

    return(
  
        <IconContext.Provider value={{ color: 'grey' }} className="ah  w-screen">
            <motion.div className="  w-[800px] h-full absolute z-10 pl-10  flex flex-col items-start  " >
                <motion.nav
                    animate={show ? "open" : "closed"}
                    variants = {variants}
                    transition ={{duration: 0.4}}
                    
                
                >
                    <motion.div className="inner-nav" onClick={showSidebar}>       
                    <motion.button
                        className=" ah font-bold pb-[2rem] pt-[8rem] xl:text-8xl text-4xl hover:text-[#B5B5B5] text-[#605e5e] tracking-wide line-height: 1rem "
                        
                    >
                            <Link className='' to="/">Home.</Link>
                        </motion.button>                                                 
                    </motion.div>
                </motion.nav>

                <motion.nav
                    animate={show ? "open" : "closed"}
                    variants = {variants}
                    transition ={{duration: 0.6}}
                    
                >
                    <motion.div className="inner-nav" onClick={showSidebar}>       
                        <motion.button
                            className=" ah pb-[2rem]  xl:text-8xl text-4xl   font-bold  text-[#605e5e]  hover:text-[#B5B5B5] tracking-wide"
                                
                        >
                            <Link className='' to="/Services">Services.</Link>
                        </motion.button>                                                
                    </motion.div>
                </motion.nav>

                <motion.nav
                    animate={show ? "open" : "closed"}
                    variants = {variants}
                    transition ={{duration: 0.9}}
                >
                    <motion.div className="inner-nav" onClick={showSidebar}>       
                        <motion.button
                        className=" ah pb-[2rem]  xl:text-8xl text-4xl   font-bold  text-[#605e5e] tracking-wide  hover:text-[#B5B5B5]"
                            
                        >
                            <Link className='' to="/Mancave">Mancave.</Link> 
                        </motion.button>                                                 
                    </motion.div>
                </motion.nav>

                <motion.nav
                    animate={show ? "open" : "closed"}
                    variants = {variants}
                    transition ={{duration: 1.2}}
                >
                    <motion.div className="inner-nav" onClick={showSidebar}>       
                        <motion.button
                            className=" ah pb-[2rem]  xl:text-8xl text-4xl  font-bold  text-[#605e5e] tracking-wide  hover:text-[#B5B5B5] "
                            
                        >
                            <Link className='' to="/Career">Career.</Link> 
                        </motion.button>                                                
                    </motion.div>
                </motion.nav>

                <motion.nav
                    animate={show ? "open" : "closed"}
                    variants = {variants}
                    transition ={{duration: 1.5}}
                >
                    <motion.div className="inner-nav" onClick={showSidebar}>
                        <motion.button 
                            className="  xl:text-8xl text-4xl font-bold  text-[#605e5e] tracking-wide  hover:text-[#B5B5B5]"
                            
                        >
                            <Link className='' to="/Connect">Connect.</Link>  
                        </motion.button>                             
                    </motion.div>
                </motion.nav> 
               
                <motion.btn 
                className="toggle absolute flex items-center justify-center h-screen" 
                animate={show ? "open" : "closed"}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.9}}
                variants = {iconvar}
                onClick={showSidebar}
                >
                    
                    <a className='text-4xl lg:text-7xl '><AiIcons.AiOutlineRight  /></a> 
                </motion.btn>
            </motion.div>
        </IconContext.Provider>
    
    )
}

export default Navbar