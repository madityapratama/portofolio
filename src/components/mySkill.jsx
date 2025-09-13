function mySkill() {
  const skills = [
    { name: "HTML", icon: "devicon-html5-plain colored" },
    { name: "CSS", icon: "devicon-css3-plain colored" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "TypeScript", icon: "devicon-typescript-plain colored" },
    { name: "PHP", icon: "devicon-php-plain colored" },
    { name: "Laravel", icon: "devicon-laravel-plain colored" },
    { name: "Next.js", icon: "devicon-nextjs-plain" },
    { name: "React", icon: "devicon-react-original colored" },
    { name: "TailwindCSS", icon: "devicon-tailwindcss-plain colored" },
    { name: "MySQL", icon: "devicon-mysql-plain colored" },
    { name: "Git", icon: "devicon-git-plain colored" },
    { name: "GitHub", icon: "devicon-github-original" },
    { name: "Figma", icon: "devicon-figma-plain colored" },
    { name: "Word", icon: "devicon-windows8-original" }, // sementara placeholder
    { name: "Excel", icon: "devicon-windows8-original" }, // sementara placeholder
  ];

  return (
    <section
      id="mySkill"
      className="flex-1 bg-gradient-to-r from-[#0d1117] via-gray-800 to-blue-900 py-20 px-6 md:px-20"
    >
      <h2 className="font-poppins text-3xl md:text-4xl font-bold mb-10 text-white text-center md:text-left">
        My Skills
      </h2>

      {/* Grid skill */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center p-6 border border-gray-700 rounded-xl text-white shadow-md hover:scale-105 hover:bg-blue-600 transition-transform duration-300 ease-in-out"
          >
            <i className={`${skill.icon} text-4xl md:text-5xl`}></i>
            <span className="mt-3 text-sm md:text-base">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default mySkill;
