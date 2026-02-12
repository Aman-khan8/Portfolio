import React from "react";
import project1 from "../assets/project1.png"
import project2 from "../assets/project2.png"

import ProjectCard from "../Components/projectCard";

function Projects(){
return <>
         <div className=" flex justify-center items-center">
           
            <div className="w-[75%] flex-col justify-center items-center">
                 <div className="flex-col "> 
            <h2 className="text-blue-700 font-bold">Projects</h2>
            <span className="md:text-xl font-bold">Every project is a new challenge and opportunity to learn and grow.</span>
            </div>
              <ProjectCard title="Postly" description="Postly is a full-stack social posting app built with React, featuring a live text editor and protected routes. It integrates Appwrite for user authentication, database operations, and secure backend handling" image={project1} codeLink="https://github.com/Aman-khan8/Postly" liveDemoLink="https://postly-five.vercel.app/"   reverse={false}/>

              <ProjectCard title="Car Rental" description="A responsive front-end car rental website built using React, focusing on clean UI and smooth user experience. It showcases car listings, pricing sections, and booking layouts, with full responsiveness across devices." image={project2} codeLink="https://github.com/Aman-khan8/Car-Rental" liveDemoLink="https://aman-khan8.github.io/Car-Rental/"   reverse={true}/>
               
            </div>
             </div>

</>
} 

export default Projects