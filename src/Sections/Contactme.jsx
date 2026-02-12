import React from "react";
import { SiGmail } from "react-icons/si";
import ContactBannner from "../Components/ContactBanner";
import { FaLinkedin,FaGithub } from 'react-icons/fa';


function Contactme(){
 
    return<>
    <div className="flex justify-center items-center md:mt-20">
        <div className="w-[75%] flex-col font-bold">
            <h2 className="text-blue-700">Contact Me</h2>
            <span className="text-xl">Interested in working together or have an exciting project in mind? Let’s connect and build something amazing.</span>

            <div className="md:flex md:mt-20 gap-x-10 mt-5  "> 
    
<ContactBannner
    icon={<SiGmail size={20} className="text-red-600 ml-2 mt-0.5  "/>}
    title="Email Me"
    />
<ContactBannner
    icon={<FaLinkedin size={20} className=" ml-2 mt-0.5 "/>}
    title="LinkedIn"
    />
<ContactBannner
    icon={<FaGithub size={20} className="ml-2 mt-0.5 "/>}
    title="GitHub"
    />

 
           
            </div>
             </div>
          
        
         </div>
           
    
    </>
}



export default Contactme;