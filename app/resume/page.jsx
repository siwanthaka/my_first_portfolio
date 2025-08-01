"use client";

import { Description } from "@radix-ui/react-dialog";
import { Item } from "@radix-ui/react-select";
import { info } from "autoprefixer";
import { icons } from "lucide-react";
import { comma } from "postcss/lib/list";
import {FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs} from "react-icons/fa";
import {SiTailwindcss, SiNextdotjs} from "react-icons/si";


//about data

const about = {
    title:'About me',
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eius temporibus aliquid",
    info: [
        {
            fieldName: "Name",
            fielsValue: "Siwanthaka Savinda",
        },
        {
            fieldName: "Phone",
            fielsValue: "(+94) 75 081 8024",
        },
        {
            fieldName: "Experience",
            fielsValue: "3 Year",
        },
        {
            fieldName: "LinkedIn",
            fielsValue: "Siwanthaka Savinda",
        },
        {
            fieldName: "Nationality",
            fielsValue: "Srilankan",
        },
        {
            fieldName: "Email",
            fielsValue: "siwanthakasavinda@gmail.com",
        },
        {
            fieldName: "FreeLance",
            fielsValue: "Available",
        },
        {
            fieldName: "Languages",
            fielsValue: "English, Sinhala",
        },
    ]

};

//experience data

const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'My Experience',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eius temporibus adffdt tu piyf gutr",
    items: [
        {
            company: "Dev Wizards pvt ltd",
            position: "Back End developer",
            duration: "2025 - present",
        },
        {
            company: "Dev Wizards pvt ltd",
            position: "Back End developer",
            duration: "2025 - present",
        },
        {
            company: "Dev Wizards pvt ltd",
            position: "Back End developer",
            duration: "2025 - present",
        },
        {
            company: "Dev Wizards pvt ltd",
            position: "Back End developer",
            duration: "2025 - present",
        },
        {
            company: "Dev Wizards pvt ltd",
            position: "Back End developer",
            duration: "2025 - present",
        },
        {
            company: "Dev Wizards pvt ltd",
            position: "Back End developer",
            duration: "2025 - present",
        },
    ],
};

//education data

const education = {
    icon: '/assets/resume/badge.svg',
    title: 'My Education',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eius temporibus adffdt tu piyf gutr",
    items: [
        {
            institution: "Dev Wizards pvt ltd",
            degree: "Back End developer",
            duration: "2025 - present",
        },
        {
            institution: "Dev Wizards pvt ltd",
            degree: "Back End developer",
            duration: "2025 - present",
        },
        {
            institution: "Dev Wizards pvt ltd",
            degree: "Back End developer",
            duration: "2025 - present",
        },
        {
            institution: "Dev Wizards pvt ltd",
            degree: "Back End developer",
            duration: "2025 - present",
        },
        {
            institution: "Dev Wizards pvt ltd",
            degree: "Back End developer",
            duration: "2025 - present",
        },
        {
            institution: "Dev Wizards pvt ltd",
            degree: "Back End developer",
            duration: "2025 - present",
        },
        
    ],
};

//skill data

const skills = {
    title: "My Skills",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non eius temporibus adffdt tu piyf gutr",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "html 5",
        },
        {
            icon: <FaCss3 />,
            name: "css",
        },
        {
            icon: <FaJs />,
            name: "javascript",
        },
        {
            icon: <FaReact />,
            name: "react.js",
        },
        {
            icon: <SiNextdotjs />,
            name: "next.js",
        },
        {
            icon: <SiTailwindcss />,
            name: "tailwind.css",
        },
        {
            icon: <FaNodeJs />,
            name: "node.js",
        },
        {
            icon: <FaFigma />,
            name: "figma",
        },
    ],
};

import {Tabs, TabsContent, TabsList, TabsTrigger, } from "@/components/ui/tabs";

import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, } from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { easeIn, motion } from "framer-motion";


const Resume = () => {
    return (
    <motion.div 
        initial={{opacity: 0}} animate={{opacity: 1, 
        transition: {delay:2.4, duration: 0.4, ease: easeIn},
    }}

    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
        <div className="container mx-auto">
            <Tabs 
                defaultValue="experience" 
                className="flex flex-col xl:flex-row gap-[60px]"
                >
                <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                    <TabsTrigger value="experience">Experience</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                    <TabsTrigger value="about">About me</TabsTrigger>
                </TabsList>

                    {/* content */}
                    <div className="min-h-[70vh] w-full">

                    {/* experience */}
                    <TabsContent value="experience" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{experience.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                {experience.description}
                            </p>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {experience.items.map((item, index) => (
                                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                            <span className="text-accent">{item.duration}</span>
                                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                            <div className="flex items-center gap-3">
                                                {/*dot*/}
                                                <span className="w-[60px] h-[6px] rounded-full bg-accent"></span>
                                                <p className="text-white">{item.company}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>

                    {/* education */}
                    <TabsContent value="education" className="w-full">
                         <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{education.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                {education.description}
                            </p>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {education.items.map((item, index) => (
                                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                            <span className="text-accent">{item.duration}</span>
                                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                            <div className="flex items-center gap-3">
                                                {/*dot*/}
                                                <span className="w-[60px] h-[6px] rounded-full bg-accent"></span>
                                                <p className="text-white">{item.institution}</p>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>

                    {/* skills */}
                    <TabsContent value="skills" className="w-full h-full">
                        <div className="flex flex-col gap-[30px]">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{skills.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                {skills.description}
                                </p>
                            </div>
                            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                {skills.skillList.map((skill, index) => {
                                    return <li key={index}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-full h-[150px] bg-[#5f625f33] rounded-xl flex justify-center items-center group">
                                                    <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p className="capitalize">{skill.name}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </li>;
                                })}
                            </ul>
                        </div>
                    </TabsContent>

                    {/* about me */}
                    <TabsContent value="about" className="w-full text-center xl:text-left">
                     <div className="flex flex-col gap-[30px]">
                        <h3 className="text-4xl font bold">{about.title}</h3>
                        <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                        <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                            {about.info.map((item,index) => {
                                return <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                    <span className="text-white/60">{item.fieldName}</span>
                                    <span className="text-xl">{item.fielsValue}</span>
                                </li>
                            })}
                        </ul>
                     </div>
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    </motion.div>
    );  
};
 export default Resume;