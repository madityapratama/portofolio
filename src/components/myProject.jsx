import { useState } from "react";
import Image from "next/image";

function MyProject() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Designing a Midmanners System for Joint Account Administration Services in Game Trading",
      img: "/images/project1.png",
      desc: "The Midmanners System is a shared account platform for online gaming transactions with key features including real-time chat and a payment gateway integrated with Midtrans. My work was on the frontend using Next.js, React, TypeScript, and Tailwind CSS. The project ran from March to July 2025.",
      tech: ["devicon-react-original colored", "devicon-nodejs-plain colored", "devicon-typescript-plain colored","devicon-nextjs-plain","devicon-tailwindcss-plain colored"],
      gallery: ["/images/project1-1.png", "/images/project1-2.png", "/images/project1-3.png", "/images/project1-4.png", "/images/project1-5.png", "/images/project1-6.png"],
    },
    {
      id: 2,
      title: "Web-based Archive Management Information System (SIM-A) at BPKPAD Banjarmasin City",
      img: "/images/project2.png",
      desc: "This project is my internship project at BPKPAD Kota Banjarmasin. This system was created to facilitate the management of incoming and outgoing mail at BPKPAD Kota Banjarmasin. In this project, I worked as a front-end developer using Laravel and Tailwind CSS. The project ran from September 2024 to January 2025.",
      tech: ["devicon-laravel-plain colored", "devicon-php-plain colored", "devicon-tailwindcss-plain colored"],
      gallery: ["/images/project2-1.png", "/images/project2-2.png", "/images/project2-3.png", "/images/project2-4.png", "/images/project2-5.png", "/images/project2-6.png"],
    },
    {
      id: 3,
      title: "Midmanners Website UI/UX Designer",
      img: "/images/project3.png",
      desc: "Similar to my previous project, this is my final project. However, in this project, I was tasked with designing the UI/UX of the Midmanners website using Figma. My design covers the main page, features page, posts page, all user profiles page, and user dashboard.",
      tech: ["devicon-figma-plain colored"],
      gallery: ["/images/project3-1.png", "/images/project3-2.png", "/images/project3-3.png", "/images/project3-4.png"],
    },
    {
      id: 4,
      title: "Midmanners System Database Design for Joint Account Administration Services in Game Trading",
      img: "/images/projek4.png",
      desc: "In this project, I was tasked with designing CDM, LDM and PDM databases using PowerDesigner tools. These database designs were created to support the Midmanners system that my colleague and I developed for our final project.",
      tech: ["devicon-mysql-plain colored"],
      gallery: ["/images/projek4.png", "/images/projek4-1.png", "/images/projek4-2.png"],
    },
  ];

  return (
    <div className="flex-1 bg-gradient-to-r from-[#0d1117] via-gray-800 to-blue-900 min-h-screen">
      <h2 className="font-poppins text-4xl font-bold mb-10 text-white pt-40 pl-20">
        My Project
      </h2>

      <div className="grid grid-cols-6 grid-rows-4 gap-6 px-20 pb-20">
        {projects.map((p, i) => (
          <div
            key={p.id}
            onClick={() => {
              setActiveProject(p.id);
              setIsOpen(true);
            }}
            className={`col-span-3 row-span-2 rounded-xl border border-gray-600 bg-gray-900/60 hover:scale-105 transition-transform duration-300 overflow-hidden cursor-pointer ${
              i === 1 ? "col-start-4" : ""
            } ${i === 2 ? "row-start-3" : ""} ${i === 3 ? "col-start-4 row-start-3" : ""}`}
          >
            <Image
              src={p.img}
              alt={p.title}
              width={500}
              height={300}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-4">
              <h3 className="text-white text-lg font-semibold">{p.title}</h3>
              <p className="text-gray-300 text-sm mt-2">{p.desc}</p>

              {/* Tech Icons */}
              <div className="flex gap-3 mt-3">
                {p.tech.map((icon, idx) => (
                  <i key={idx} className={`${icon} text-2xl`} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isOpen && activeProject !== null && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-lg relative max-w-4xl w-full">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-white text-xl"
            >
              ✖
            </button>
            <h3 className="text-white text-2xl font-bold mb-4">
              {projects.find((p) => p.id === activeProject)?.title}
            </h3>

            <div className="grid grid-cols-3 gap-4">
              {projects
                .find((p) => p.id === activeProject)
                ?.gallery.map((img, idx) => (
                  <Image
                    key={idx}
                    src={img}
                    alt="Gallery"
                    width={400}
                    height={300}
                    className="rounded-lg object-cover w-full h-48"
                  />
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyProject;
