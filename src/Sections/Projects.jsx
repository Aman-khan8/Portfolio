import React, { useMemo, useState } from "react";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/AI_schedule_Analyzer.png";

import ProjectCard from "../Components/projectCard";

const projects = [
  {
    title: "AI Schedule Analyzer",
    description:
      "An AI-powered task and schedule management web app built with the MERN stack and Google Gemini API. Featuring secure user authentication, it analyzes daily tasks and upcoming meetings to deliver optimized personalized schedules, daily overviews, and actionable productivity insights.",
    image: project3,
    codeLink: "https://github.com/Aman-khan8/AI-Schedule-Analyzer",
    liveDemoLink: "",
    category: "web",
    reverse: true,
  },
  {
    title: "Postly",
    description:
      "Postly is a full-stack social posting app built with React, featuring a live text editor and protected routes. It integrates Appwrite for user authentication, database operations, and secure backend handling",
    image: project1,
    codeLink: "https://github.com/Aman-khan8/Postly",
    liveDemoLink: "https://postly-five.vercel.app/",
    category: "web",
    reverse: false,
  },
  {
    title: "Car Rental",
    description:
      "A responsive front-end car rental website built using React, focusing on clean UI and smooth user experience. It showcases car listings, pricing sections, and booking layouts, with full responsiveness across devices.",
    image: project2,
    codeLink: "https://github.com/Aman-khan8/Car-Rental",
    liveDemoLink: "https://aman-khan8.github.io/Car-Rental/",
    category: "web",
    reverse: true,
  },
];

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showAllProjects, setShowAllProjects] = useState(false);

  const filteredProjects = useMemo(() => {
    return selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);
  }, [selectedCategory]);

  const visibleProjects = showAllProjects
    ? filteredProjects
    : filteredProjects.slice(0, 2);

  return (
    <div className="flex justify-center items-center">
      <div className="w-[75%] flex-col justify-center items-center">
        <div className="flex-col">
          <h2 className="text-blue-700 font-bold">Projects</h2>
          <span className="md:text-xl font-bold">
            Every project is a new challenge and opportunity to learn and grow.
          </span>
        </div>

        <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <label className="text-sm font-semibold text-slate-700">
            Filter projects
            <select
              className="ml-3 rounded border border-slate-300 px-3 py-2"
              value={selectedCategory}
              onChange={(event) => {
                setSelectedCategory(event.target.value);
                setShowAllProjects(false);
              }}
            >
              <option value="all">All</option>
              <option value="web">Web Projects Projects</option>
            </select>
          </label>
        </div>

        {visibleProjects.map((project, index) => (
          <ProjectCard
            key={`${project.title}-${index}`}
            title={project.title}
            description={project.description}
            image={project.image}
            codeLink={project.codeLink}
            liveDemoLink={project.liveDemoLink}
            reverse={project.reverse}
          />
        ))}

        {filteredProjects.length > 2 && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAllProjects((prev) => !prev)}
              className="rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800"
            >
              {showAllProjects ? "View less" : "View more projects"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;