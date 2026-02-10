import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function ProjectCard(props) {
  return (
    <div
      className={`w-full flex gap-x-10 md:mt-30 ${
        props.reverse ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div className="w-[45%]">
        <img src={props.image} alt="project" />
      </div>

      <div className="w-[45%]">
        <h2 className="font-bold text-blue-700 flex justify-center">
          {props.title}
        </h2>

        <span className="text-stone-700">{props.description}</span>

        <div className="flex gap-x-10 md:mt-5 w-[80%] justify-center">
          <a href={props.codeLink} target="_blank" rel="noopener noreferrer">
            <div className="flex font-bold gap-x-2 cursor-pointer hover:text-gray-500">
              <span >Code</span>
              <FaGithub size={25}  />
            </div>
          </a>

          <a href={props.liveDemoLink} target="_blank" rel="noopener noreferrer">
            <div className="flex font-bold gap-x-2 cursor-pointer hover:text-gray-500">
              <span className="">Live Demo</span>
              <FaExternalLinkAlt size={22} className="" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
