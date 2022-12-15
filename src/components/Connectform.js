/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { useState } from 'react';
import insta from '../images/instagram.svg'
import twitter from '../images/twitter.svg'
import mail from '../images/mail.svg'
import grlogo from '../images/grlogo.png'
import Forminput from './Forminput.js'
import "../App.css";


const Connectform = () => {
  
  const [values, setValues] = useState({
    Cname: "",
    Name: "",
    Email: "",
    Phone: "",
    Requirements: "",
  });

  const inputs = [
    {
      id: 1,
      name: "Cname",
      type: "text",
      placeholder: "Company name",
      errorMessage:
        "Company name should be 3-16 characters and shouldn't include any special character!",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "name",
      type: "text",
      placeholder: "Name",
      errorMessage: "It should be a valid Username!",
      required: true,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      required: true,
    },
    {
      id: 4,
      name: "phone",
      type: "num",
      placeholder: "Phone",
      errorMessage: "It should be a valid phone number without +91!",
      pattern: `[0-9]{10}`,
      required: true,
    },
    {
      id: 5,
      name: "Requirements",
      type: "text",
      placeholder: "Enter your Requirements",
      errorMessage:
        "Enter your requirements so that we could help you!",
      required: true,
    },
  ];
  //   {
  //     id: 5,
  //     name: "confirmPassword",
  //     type: "password",
  //     placeholder: "Confirm Password",
  //     errorMessage: "Passwords don't match!",
  //     label: "Confirm Password",
  //     pattern: values.password,
  //     required: true,
  //   },
  // ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  
  
  return (
    <div className='flex flex-row sm:flex-col'>
        <div className='z-50 shadow-xl bg-blend-overlay  flex flex-col place-content-end items-end justify-center  w-full h-20 sm:h-[100px] fixed backdrop-blur-3xl'>
         <img src={grlogo} id="name" className=" sm:w-[10%] pr-10  w-[30%]   " alt="" />
        </div> 
        <div className='flex items-center justify-center h-screen gap-[240px] pt-20 logoform'>
          <div className='flex items-center bg-white justtify-center '>
                    <p className='ah text-6xl'>Connect<br />
                    <p className='al text-6xl'>with grustl.</p></p>
          </div>
          <div className='w-full max-w-md '>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
              
              {inputs.map((input) => (
                <Forminput
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              ))}
              <div className='flex flex-row gap-3'>
                <button className='inline-block p-5 w-64 bg-black text-white font-medium text-xs leading-tight uppercase rounded-2xl shadow-md hover:bg-gray-300 hover:shadow-lg focus:bg-gray-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out '>SCHEDULE DEMO</button>
                <div className='shadow appearance-none border'>
                      <button
                          type="button"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                          className=" p-3 w-14  text-black font-medium text-xs rounded  hover:bg-gray-100 hover:shadow-lg focus:bg-gray-100 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-200 active:shadow-lg transition duration-150 ease-in-out">
                              <img src={mail} className='ah' id='icon'></img>
                        </button>
                        <button
                          type="button"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                          className=" p-3 w-14  text-black font-medium text-xs rounded  hover:bg-gray-100 hover:shadow-lg focus:bg-gray-100 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-200 active:shadow-lg transition duration-150 ease-in-out">
                              <img src={insta} className='ah' id='icon1'></img>
                        </button>
                        <button
                          type="button"
                          data-mdb-ripple="true"
                          data-mdb-ripple-color="light"
                          className=" p-3 w-14  text-black font-medium text-xs rounded  hover:bg-gray-100 hover:shadow-lg focus:bg-gray-100 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-200 active:shadow-lg transition duration-150 ease-in-out">
                              <img src={twitter} className='ah' id='icon2'></img>
                        </button>
                </div>
              </div>
          </form>
          </div>
      </div>
    </div>
  )
}

export default Connectform