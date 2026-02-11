import React, { useRef } from "react";
import internship1 from "../assets/PelLogo.png"
import ExperienceCard from "../Components/experienceCard";
import hackathon1 from "../assets/hackathon1.jpeg"
import hackathon2 from "../assets/hackathon2.jpeg"
import hackathon3 from "../assets/hackathon3.jpeg"
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Experience() {
  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (sliderRef.current) {
      const { clientWidth } = sliderRef.current;
      if (direction === "left") {
        sliderRef.current.scrollBy({ left: -clientWidth, behavior: "smooth" });
      } else {
        sliderRef.current.scrollBy({ left: clientWidth, behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <div className="h-full flex justify-center items-center md:mt-30 ">
        <div className="w-[75%] flex-col">
          <div className="font-bold">
            <h2 className="text-blue-700">Experience</h2>
            <span className="text-xl">
              Experience is not just what you’ve done — it’s what you’ve learned and improved from doing it
            </span>
          </div>

          {/* Slider Container */}
          <div className="relative w-full md:mt-20">
            {/* Left Arrow */}
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow z-10 hover:bg-white"
            >
              <FaArrowLeft />
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow z-10 hover:bg-white"
            >
              <FaArrowRight />
            </button>

            {/* Slider */}
            <div
              ref={sliderRef}
              className="w-full flex h-[30%] gap-x-10 overflow-x-auto scroll-smooth snap-x snap-mandatory px-4"
            >
                 
              <ExperienceCard
                image={internship1}
                description="Completed a 5-week Web Development internship at PEL, where I enhanced my React and backend development skills while working under the supervision of experienced IT professionals on real-world projects."
                liveDemoLink="https://www.linkedin.com/in/aman-khan-82970a294/recent-activity/all/"
              />
            
              <ExperienceCard
                image={hackathon1}
                description="Participated in the Think2Code Hackathon, collaborating with my team to build and present an innovative solution under time constraints. Gained hands-on experience in teamwork, rapid problem-solving, and real-world development challenges."
              />

              <ExperienceCard
                image={hackathon2}
                description="Participated as a solo competitor in an IEEE-hosted university coding hackathon, solving complex algorithmic and logical challenges under competitive time constraints, while enhancing problem-solving, analytical thinking, and quick decision-making skills"
              />

              <ExperienceCard image={hackathon3} description="Participated in a team-based problem-solving and idea-proposal event hosted by Takleek, UCP, presenting innovative solutions under expert guidance while enhancing analytical thinking, creativity, and collaborative problem-solving skills."
/>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Experience;
