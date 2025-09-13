function MySkill() {
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
    { name: "Word", icon: "devicon-windows8-original" }, // placeholder
    { name: "Excel", icon: "devicon-windows8-original" }, // placeholder
  ];

  return (
    <div
      id="#mySkill"
      className="flex-1 bg-gradient-to-r from-[#0d1117] via-gray-800 to-blue-900 pb-20"
    >
      <h2 className="font-poppins text-4xl font-bold mb-6 text-white pt-40 pl-20">
        My Skill
      </h2>
      <div className="grid grid-cols-5 gap-6 px-20 pb-20">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center p-6 border border-gray-600 rounded-lg text-white shadow-sm hover:scale-105 hover:bg-blue-600 transition"
          >
            <i className={`${skill.icon} text-4xl`}></i>
            <span className="mt-2 text-sm">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MySkill;
