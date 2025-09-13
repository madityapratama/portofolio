"use client";
import { TypeAnimation } from "react-type-animation";

function leftMain() {
  return (
    <div className="font-poppins font-semibold text-white p-4 pt-10 md:pt-20 md:pl-20">
      <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl leading-tight">
        Hello I'm Adit, a <br />
        <span className="text-blue-500">
          <TypeAnimation
            sequence={[
              "Front End Web Developer",
              2000,
              "",
              "UI/UX Designer",
              2000,
              "",
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </span>
      </h1>
    </div>
  );
}

export default leftMain;
