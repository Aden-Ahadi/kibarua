"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  work: string;
  imageSrc: string;
}

const ProjectCard = ({ title, work, imageSrc }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all hover:shadow-md">
      <div className="flex sm:block">
        <div className="w-24 h-24 sm:w-full sm:h-48 flex-shrink-0 overflow-hidden">
          <Image
            src={imageSrc || "/placeholder.svg"}
            alt={title}
            width={400}
            height={300}
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="flex-1 p-4">
          <h3 className="text-xl font-semibold text-[#0a3b1d]">{title}</h3>
          <p className="text-gray-700 mt-1 text-sm sm:text-base">{work}</p>
        </div>
      </div>
    </div>
  );
};

export default function PopularProjects() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "Electrician",
      work: "Fix wiring, install lights, repair sockets",
      imageSrc: "/electrician.jpg?height=300&width=400",
    },
    {
      title: "Plumber",
      work: "Unclog drains, fix leaks, install water tanks",
      imageSrc: "/plumber.jpg?height=300&width=400",
    },
    {
      title: "Appliance Repair",
      work: "Fix fridges, AC units, microwaves.",
      imageSrc: "/appliance.jpg?height=300&width=400",
    },
    {
      title: "Digging",
      work: "Pit latrines, drainage trenches, garden holes",
      imageSrc: "/digging.jpg?height=300&width=400",
    },
    {
      title: "Lawn Mowing",
      work: "Overgrown yards, compound clearing.",
      imageSrc: "/lawn.jpg?height=300&width=400",
    },
    {
      title: "Furniture repairs",
      work: "Fix broken chairs and doors, fix couches.",
      imageSrc: "/furniture.jpg?height=300&width=400",
    },
    {
      title: "Event Photographer",
      work: "Take pictures at Funerals, weddings, parties.",
      imageSrc: "/photographer.jpg?height=300&width=400",
    },
    {
      title: "Heavy Lifting",
      work: "Furniture, boxes, or shop inventory.",
      imageSrc: "/lifting.jpg?height=300&width=400",
    },
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      <h2 className="text-2xl sm:text-4xl font-bold text-[#0a3b1d] mb-4 sm:mb-8">
        Popular Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-9">
        {visibleProjects.map((project, index) => (
          <Link href="#" key={index}>
            <ProjectCard
              title={project.title}
              work={project.work}
              imageSrc={project.imageSrc}
            />
          </Link>
        ))}
      </div>

      <div className="text-center mt-8">
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-orange-500 hover:text-orange-600 font-semibold text-lg"
        >
          {showAll ? "Show Less" : "See More Projects"}
        </button>
      </div>
    </div>
  );
}
