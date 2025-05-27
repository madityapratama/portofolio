import Head from "next/head";
import React from "react";
import Header from "@/components/header"
import LeftMain from "@/components/leftMain";

export default function Home() {
  return (
      <div className="bg-gray-900 dark:bg-gray-900 min-h-screen">
        <Head>
        <title>Aditya - Front End Developer</title>
        <meta name="description" content="John's Web Developer Portfolio" />
      </Head>
      <div><Header  /></div>
      <div><LeftMain  /></div>
      </div>
     )
}