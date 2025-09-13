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
      <section className="flex flex-col md:flex-row items-center md:items-start justify-between px-6 md:px-20 py-10 gap-10 bg-gradient-to-r from-[#0d1117] via-gray-800 to-blue-900 ">
      <div className="flex-1"><LeftMain  /></div>
      <div className="flex-1 flex justify-center md:justify-end"><RightMain  /></div>
      </section>
      <div id="aboutMe"><AboutMe /></div>
      <div id="mySkill"><MySkill /></div>
      <div id="myProject"><MyProject /></div>
      <div id="contact"><Contact /></div>
      </div>
     )
}