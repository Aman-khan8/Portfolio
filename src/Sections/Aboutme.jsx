import React from "react";
import aboutmePic from "../assets/aboutmePic.jpg"
function About(){
    return <>
    <div className="h-full flex   justify-center items-center  ">
         <div className=" w-[75%]  flex justify-center items-center gap-x-15">
            <div className="w-[25%]  ">
                 <img src={aboutmePic} alt="pic" className="rounded-3xl w-full"/> 
            </div>
            <div className="w-[50%]  flex-col justify-center ">
                <div className="text-blue-700 font-bold ">
                <h2>About me</h2>
                </div> 
                <div className="font-bold text-3xl">
                    <h1>A Dedicated Web Developer</h1>
                </div>
                <div className="font-light md:mt-3">
                    <span>I’m Aman Khan, a Computer Science student currently in my 6th semester at the University of Central Punjab, maintaining a 3.5 CGPA. I’m a passionate and detail-oriented web developer with a strong interest in building modern, responsive, and user-friendly web applications. I enjoy turning ideas into real products using technologies like React, JavaScript, and Tailwind CSS, and I’m continuously improving my skills by working on real projects and learning industry best practices. I’m motivated, consistent, and eager to grow as a developer while contributing to meaningful and impactful projects.</span>
                </div>
            </div>
         </div>
    </div>
    </>
}

export default About