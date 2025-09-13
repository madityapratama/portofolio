import Head from "next/head";
import React from "react";
import Header from "@/components/header"
import LeftMain from "@/components/leftMain";
import RightMain from "@/components/rightMain";
import AboutMe from "@/components/aboutMe";
import MySkill from "@/components/mySkill";
import MyProject from "@/components/myProject";
import Contact from "@/components/contact";

export default function Home() {
  return (
      <div className="bg-gray-900 dark:bg-gray-900 min-h-screen">
        <Head>
        <title>Aditya - Front End Developer</title>
        <meta name="description" content="John's Web Developer Portfolio" />
      </Head>
      <div id="home"><Header  /></div>
      <section className="flex items-center justify-between min-h-screen px-20 bg-gradient-to-r from-[#0d1117] via-gray-800 to-blue-900 ">
      <div><LeftMain  /></div>
      <div><RightMain  /></div>
      </section>
      <div id="aboutMe"><AboutMe /></div>
      <div id="mySkill"><MySkill /></div>
      <div id="myProject"><MyProject /></div>
      <div id="contact"><Contact /></div>
      </div>
     )
}