import React from 'react';
import {
  FaInstagram,
  FaBehance,
  FaLinkedinIn
} from 'react-icons/fa';

import {
  AiOutlineYoutube,
} from 'react-icons/ai';

import {
  TiSocialTwitter
} from 'react-icons/ti';


document.addEventListener('contextmenu', event => event.preventDefault());
const Footer = () => {
  document.addEventListener('contextmenu', event => event.preventDefault());
  return (
    <div className='select-none h-[400px] w-full flex flex-col items-center justify-center bg-black gap-5'>
      <div className='flex justify-between w-[70%] sm:w-[20%] my-6 '>
        <FaInstagram size={40} className="text-white"/>
        <TiSocialTwitter size={40} className="text-white"/>
        <AiOutlineYoutube size={40} className="text-white"/>
        <FaBehance size={40} className="text-white" /> 
        <FaLinkedinIn size={40} className="text-white sm:flex hidden" /> 
      </div>
      <div className='text-[#909090]  al text-md sm:text-xl flex flex-col items-center justify-center gap-5 '>
        <p >@ 2022 Grustl.</p>
        <div className='flex flex-row gap-2 duration-700'>
          <p className='hover:text-white duration-700 text-center '>Grustl Originals </p>
          <p>|</p>
          <p className='hover:text-white duration-700 text-center'> Privacy Policy </p>
          <p>|</p>
          <p className='hover:text-white duration-700 text-center'> Terms </p>
          <p>|</p>
          <p className='hover:text-white duration-700 text-center'> Copyright Policy</p>
        </div>
        
      </div>

    </div>
  );
};

export default Footer



{/* <div>
<h1 className='w-full text-4xl font-bold text-[#000]'>grustl.</h1>
<p className='py-4'>You are one step away from transforming your brand with grutsl. 
The revolutionary branding agency in the planet. Let’s join hands and bring change. </p>
<div className='flex justify-between md:w-[75%] my-6'>
    <FaFacebookSquare size={30} />
    <FaInstagram size={30} />
    <FaTwitterSquare size={30} />
    <FaGithubSquare size={30} />

</div>
</div>
<div className='lg:col-span-2 flex justify-between mt-6'>
<div>
<h6 className='font-medium  text-gray-900'>Solutions</h6>
<ul>
    <li className='py-2 text-sm'>Analytics</li>
    <li className='py-2 text-sm'>Marketing</li>
    <li className='py-2 text-sm'>Commerce</li>
    <li className='py-2 text-sm'>Insights</li>
</ul>
</div>
<div>
<h6 className='font-medium text-gray-900'>Support</h6>
<ul>
    <li className='py-2 text-sm'>Pricing</li>
    <li className='py-2 text-sm'>Documentation</li>
    <li className='py-2 text-sm'>Guides</li>
    <li className='py-2 text-sm'>API Status</li>
</ul>
</div>
<div>
<h6 className='font-medium text-gray-900'>Company</h6>
<ul>
    <li className='py-2 text-sm'>About</li>
    <li className='py-2 text-sm'>Blog</li>
    <li className='py-2 text-sm'>Jobs</li>
    <li className='py-2 text-sm'>Press</li>
    <li className='py-2 text-sm'>Careers</li>
</ul>
</div>
<div>
<h6 className='font-medium text-gray-900'>Legal</h6>
<ul>
    <li className='py-2 text-sm'>Claim</li>
    <li className='py-2 text-sm'>Policy</li>
    <li className='py-2 text-sm'>Terms</li>
</ul>
</div>
</div> */}