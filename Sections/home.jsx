
import ProfilePic from '../src/assets/AmanKhanpic.jpg'
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { FaLinkedin,FaGithub } from 'react-icons/fa';

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
 


function home(){
     const el = useRef(null); 

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Front-End Developer ", "Future MERN Stack Web Engineer","CS Student (UCP)"],
      typeSpeed: 50,
      backSpeed: 35,
      backDelay: 1000,
      startDelay: 500,
      loop: true,
      showCursor: false,
      cursorChar: "|",
      smartBackspace: true,
    });

    return () => typed.destroy(); // clean up on unmount
  }, []);
    return(
        <>

         <div className=" flex-col h-full  justify-center items-end  gap-y-4  ">
          <div className='h-[75vh] flex justify-center-safe items-center w-full'> 
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-15 w-[65%]  "> 
           <div className=" flex justify-center items-center">
            <div className='flex flex-col gap-y-4  '>
          
            <h1 className="text-4xl gap-y-2 font-bold" ref={el}></h1>
            
       
            <span className='font-light gap-y-2'>Hi, I’m Aman Khan — a CS student and passionate web developer based in Lahore,Pakistan.</span>
  <div className='flex gap-2 '> 
           <a href="https://www.linkedin.com/in/aman-khan-82970a294/" target="_blank" rel="noopener noreferrer">
  <FaLinkedin size={30} className=" hover:text-3xl " />
</a>
<a href="https://github.com/Aman-khan8" target="_blank" rel="noopener noreferrer">
  <FaGithub size={30} className=" hover:text-3xl " />
</a>
  </div>
           
          </div>
           </div>
           <div className="flex  justify-start items-center">
            <img src={ProfilePic} alt="pic" className='border-2 rounded-4xl max-w-[250px]' />
            
           </div>

           </div>
          </div>
          <div className='w-full flex h-[10vh]  '>
            <div className=' w-full flex justify-center items-center '>
              
              <div className='grid grid-cols-7 gap-x-2   '> 
              <h1 className='hidden md:flex font-bold mr-3'>Tech Stack <span> </span> </h1>
              
  {/* HTML */}
  <FaHtml5 className="text-orange-600 w-10 h-8" title="HTML" />

  {/* CSS */}
  <FaCss3Alt className="text-blue-600  w-10 h-8" title="CSS" />

  {/* JavaScript */}
  <FaJs className="text-yellow-400  w-10 h-8" title="JavaScript" />

  {/* React */}
  <FaReact className="text-sky-400 w-10 h-8" title="React" />

  {/* Express */}
  <SiExpress className="text-gray-700 w-10 h-8" title="Express" />

  {/* MongoDB */}
  <SiMongodb className="text-green-500 w-10 h-8" title="MongoDB" />
</div>
</div>
            </div>
      
          </div>
           
        </>
    )
}

export default home