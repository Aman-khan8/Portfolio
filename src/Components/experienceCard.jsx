import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

function ExperienceCard(props) {
  return (
    <div className="md:w-[30%] w-full h-[35%] shrink-0  z-50 bg-white shadow-lg rounded-2xl overflow-hidden ">
      
      <img 
        src={props.image} 
        alt="card" 
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <p className="text-gray-700 text-sm">
          {props.description}
        </p>
      </div>

    
      {props.liveDemoLink && (
        <a 
          href={props.liveDemoLink} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <div className="flex font-bold justify-center items-center cursor-pointer hover:text-gray-500 pb-3">
            <span>Certificate</span>
            <FaExternalLinkAlt size={18} className="ml-2" />
          </div>
        </a>
      )}

    </div>
  );
}

export default ExperienceCard;
