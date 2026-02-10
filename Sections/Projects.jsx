import React from "react";
import project1 from "../src/assets/project1.png"

function Projects(){
return <>
         <div className="h-full flex justify-center items-center">
           
            <div className="w-[75%] flex-col justify-center items-center">
                 <div className="flex-col "> 
            <h2 className="text-blue-700 font-bold">Projects</h2>
            <span className="text-xl font-bold">Every project is a new challenge and opportunity to learn and grow.</span>
            </div>
                <div className="w-full">
                    <div className="w-[50%]">
                     <img src={project1} alt="project" />
                    </div>
                </div>
            </div>
             </div>

</>
} 

export default Projects