import { FolderGit2, FileUser, Mail } from "lucide-react";

function aboutMe() {
    return (
        <div>
            <div className="flex-1 bg-gradient-to-r from-[#0d1117] via-gray-800 to-blue-900">
            <h2 className="font-poppins text-4xl font-bold mb-6 text-white pt-40 pl-20 ">
            About Me
            </h2>
            <p className="text-lg leading-relaxed text-gray-300 pr-20 pl-20">
            Hello! I am a graduate of the Diploma 3 in Informatics Engineering at the Banjarmasin State Polytechnic, with a final project titled ‘Designing a Midmanners System for Joint Account Administration Services in Game Trading’. During my studies, I interned at the Banjarmasin City BPKPAD and gained valuable insights into how technology can streamline administrative tasks. I enjoy developing websites using Laravel, Next.js, React, Tailwind CSS, PHP, JavaScript, and TypeScript. Additionally, I am proficient in Microsoft Word and Excel to support various administrative tasks, and I also enjoy designing website UI layouts using Figma.
            </p>

            <div className="mt-8 flex gap-4 pl-20 pb-40">
            <a
                href="#myProject"
                className="flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition"
            >
               <FolderGit2 size={18}/> My Project
            </a>
            <a
                href="#contact"
                className="flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg shadow-md transition"
            >
               <Mail size={18}/> Contact Me
            </a>
            <a
                href="/cvSaya.pdf" // bisa diarahkan ke CV kamu
                className="flex items-center gap-2 px-6 py-3 border text-white border-blue-500 hover:bg-blue-500 hover:text-white rounded-lg transition"
            >
               <FileUser size={18} /> Check my CV
            </a>
            </div>
        </div>
        </div>
    );
}

export default aboutMe;