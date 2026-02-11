"use client";

import { delay, motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Pos System",
    title: "project 1",
    description:
      "Sniper Car Care is an ongoing project for a Dubai client, developing a car service management system with POS functionality, camera-based vehicle detection, and automated messaging for vehicle owners.",
    stack: [
      { name: "TailwindCSS" },
      { name: "Javascript" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "SQL" },
    ],
    Image: "/assets/work/carservice.png",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "Web Application",
    title: "project 1",
    description:
      "Travel Management Web Application developed using Java to understand core Java and OOP concepts. Includes package booking, hotel management, customers, destinations, and payments, focusing on real-world system design and development.",
    stack: [
      { name: "Java" },
      { name: "SQL" },
    ],
    Image: "/assets/work/travel.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "MERN",
    title: "project 1",
    description:
      "BizTrack is a MERN stack web application designed to manage business income and expenses efficiently. It helps track transactions, monitor financial records, generate reports, and analyze profit and loss, supporting better decision-making and organized business management.",
    stack: [
      { name: "MongoDB" },
      { name: "Express.js" },
      { name: "React.js" },
      { name: "Node.js" },
    ],
    Image: "/assets/work/Bizztrack.png",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "Quick Assist 1.0 App",
    title: "project 1",
    description:
      "Quick Assist 1.0 is a Java-based Android mobile application developed to provide fast and convenient assistance services. The app focuses on user-friendly design, efficient task handling, and applying core Java and Android development concepts in a real-world mobile environment.",
    stack: [
      { name: "Java" },
      
    ],
    Image: "/assets/work/QuickAssist1.png",
    live: "",
    github: "",
  },
  {
    num: "05",
    category: "Chatbot",
    title: "project 1",
    description:
      "This is a simple chatbot project developed using HTML and CSS for the user interface and integrated with the DeepSeek API for generating intelligent responses. It provides real-time conversations with a clean and responsive web design.",
    stack: [
      { name: "HTML" },
      { name: "CSS" },
    ],
    Image: "/assets/work/chatbot.png",
    live: "",
    github: "",
  },
  {
    num: "06",
    category: "Quick Assist 2.0 App",
    title: "project 1",
    description:
      "Quick Assist 2.0 is an advanced Flutter-based Android application and the upgraded version of Quick Assist 1.0. It is a fully developed mobile app with enhanced features, improved performance, modern UI design, and scalable architecture for real-world service management.",
    stack: [
      { name: "Flutter" },
      { name: "SQLite" },
      { name: "Supabase" },
    ],
    Image: "/assets/work/QuickAssist2.png",
    live: "",
    github: "",
  },
  {
    num: "07",
    category: "Elder Care Mobile App",
    title: "project 1",
    description:
      "Sithamithuru Eldercare is an ongoing React Native mobile application designed to support elderly care and well-being. The app includes health monitoring, reminders, and caregiver communication features, providing a user-friendly and accessible platform for effective eldercare management.",
    stack: [
      { name: "React Native" },
      { name: "SQLite" },
      { name: "Firebase" },
    ],
    Image: "/assets/work/QuickAssist2.png",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        transition: {delay: 2.4, duration: 0.4, ease:"easeIn"},
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Left Column */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>

              {/* ✅ buttons under the vertical bar */}
              <div className="flex items-center gap-4 mt-4">
                {/* Live Project Button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* GitHub Button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Swiper */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((projrct, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10 "></div>
                    {/* image */}
                    <div className="relative w-full h-full ">
                        <Image 
                            src={project.Image} 
                            fill 
                            className="object-cover" 
                            alt=""/>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* slidere buttons */}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles = "bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
