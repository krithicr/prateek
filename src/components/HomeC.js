import React from 'react'
import grlogo from '../images/grlogo.png';

function HomeC() {
    var i = 0;
    var bgcolor = ["black"];

    function divchange()
    {
        document.getElementById("dd").style.backgroundColor=bgcolor[i];
        i++;
        if(i>bgcolor.length())
        {
            i=0;
        }
        window.setTimeout(divchange(),20);

    }
    setInterval(divchange,2490);
  
   return (
        <div class=" w-full h-full flex justify-center items-center" id="dd">
            <div class=" w-full h-full  z-0">
                <div className='scale-50 lg:scale-95 flex z-50 items-center  justify-center lg:justify-end '>
                    <img src={grlogo} className="scale-75 fixed pt-40  " alt="" />
                </div>
                <div class=" flex justify-center items-center ">
                <img src={require('../images/GRUS.gif')} className="object-contain max-w-screen max-h-screen" alt="Grustl-gif" />
                </div>
            </div>
        </div>
  );
};

export default HomeC
