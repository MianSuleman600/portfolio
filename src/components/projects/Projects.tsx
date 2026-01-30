"use client";

import { useState, useMemo } from "react";
import projectsData from "@/data/projects.json";
import { ProjectCard } from "@/components/projects/ProjectCard";

interface Project {
  id: number;
  title: string;
  category: string;
  description?: string;
  image: string;
  year?: string;
  tags?: string[];
}

const projects = projectsData as Project[];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(projects.map((p) => p.category)));
    return ["All", ...uniqueCategories];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <section
      id="projects"
      className="py-16 md:py-20 lg:py-24 bg-gray-50 dark:bg-gray-950"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
            My Projects
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A selection of my recent work in UI/UX design, web development, mobile apps
            and branding projects.
          </p>
        </div>

       
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                ${
                  activeCategory === category
                    ? "bg-orange-600 text-white shadow-lg shadow-orange-500/30 scale-105"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-orange-50 dark:hover:bg-orange-950/30 hover:border-orange-400 hover:text-orange-700 dark:hover:text-orange-300"
                }
              `}
            >
              {category}
            </button>
          ))}
        </div>

        
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                priority={index < 6} // optimize LCP (Largest Contentfull Paint) for first visible cards
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-lg text-gray-500 dark:text-gray-400">
              No projects found in "{activeCategory}" category yet.
            </p>
            <p className="mt-2 text-sm text-gray-400 dark:text-gray-500">
              Try selecting another category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}