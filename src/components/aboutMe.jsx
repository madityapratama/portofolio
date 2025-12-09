import { FolderGit2, FileUser, Mail } from "lucide-react";

function aboutMe() {
  return (
    <section
      id="aboutMe"
      className="flex-1 bg-gradient-to-r from-[#0d1117] via-gray-800 to-blue-900 text-white py-20 px-6 md:px-20"
    >
      {/* Title */}
      <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-6 text-center md:text-left pt-40">
        About Me
      </h2>

      {/* Description */}
      <p className="text-base md:text-lg leading-relaxed text-gray-300 max-w-4xl mx-auto md:mx-0">
        Hello! I am a graduate of the Diploma 3 in Informatics Engineering at
        the Banjarmasin State Polytechnic, with a final project titled
        <span className="text-blue-400 font-semibold">
          {" "}
          ‘Designing a Midmanners System for Joint Account Administration
          Services in Game Trading’
        </span>
        . During my studies, I interned at the Banjarmasin City BPKPAD and
        gained valuable insights into how technology can streamline
        administrative tasks. I enjoy developing websites using Laravel,
        Next.js, React, Tailwind CSS, PHP, JavaScript, and TypeScript.
        Additionally, I am proficient in Microsoft Word and Excel to support
        various administrative tasks, and I also enjoy designing website UI
        layouts using Figma.
      </p>

      {/* Buttons */}
      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
        <a
          href="#myProject"
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition"
        >
          <FolderGit2 size={18} /> My Project
        </a>

        <a
          href="#contact"
          className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition"
        >
          <Mail size={18} /> Contact Me
        </a>

        <a
          href="/CVsaya2.pdf" // arahkan ke file CV
          className="flex items-center gap-2 px-6 py-3 border border-blue-500 text-white hover:bg-blue-500 hover:text-white rounded-lg transition"
        >
          <FileUser size={18} /> Check My CV
        </a>
      </div>
    </section>
  );
}

export default aboutMe;
