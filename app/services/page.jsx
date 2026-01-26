"use client";

import {BsArrowDownRight} from 'react-icons/bs';
import Link from 'next/link';
import { Description } from '@radix-ui/react-dialog';

const services = [
    {
        num: '01',
        title: 'Web Development',
        description: 
            "Skilled in HTML, CSS, and JavaScript for building responsive, user-friendly websites with clean design and basic interactivity.",
        href:""

    },
    {
        num: '02',
        title: 'Automation',
        description: 
            "Experience with Selenium and n8n to automate web tasks, testing workflows, and integrate systems with minimal manual effort.",
        href:""

    },
    {
        num: '03',
        title: 'Database Managment',
        description: 
            "Basic database design skills using SQL, MongoDB, Supabase, Firebase, and Appwrite for modern application development.",
        href:""

    },
    {
        num: '04',
        title: 'Mobile App Development',
        description: 
            "Mobile app development using Flutter, React Native, and Java to build cross-platform and native Android applications.",
        href:""

    },
    {
        num: '05',
        title: 'Basic Data Analysing',
        description: 
            "Experience in basic data analysis with Power BI, creating interactive dashboards and simple data visualizations.",
        href:""

    },
];

import { motion } from 'framer-motion';

const Services  = () => {
    return (
    <section className="min-h-[60vh] flex flex-col justify-center py-6 xl:py-0">
        <div className="container mx-auto">
            <motion.div 
                initial={{opacity: 0}} 
                animate={{
                    opacity:1, 
                    transition: {delay: 2.4, duration: 0.4,ease:"easeIn" },
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                    >
                        {services.map((service, index) =>{
                            return (
                                <div 
                                    key={index} 
                                    className="group flex-1 flex flex-col justify-center gap-4">
                                {/* top */}
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-5xl font-extrabold text-outline
                                    text-transparent group-hover:text-outline-hover transition-all duration-500">
                                        {service.num}
                                        </div>
                                    <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white
                                     group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                                     >
                                        <BsArrowDownRight className="text-primary text-3xl" />
                                    </Link>
                                </div>
                                {/* title */}
                                <h2 className="text-[42px] font-bold leading-none text-white
                                group-hover:text-accent transition-all duration-500">
                                    {service.title}
                                </h2>
                                {/* description */}
                                <p className="text-white/60">{service.description}</p>
                                {/* border */}
                                <div className="border-b border-white/20 w-full"></div>
                                </div>
                            );
                        })}
            </motion.div>
        </div>
    </section>
    );
    
};

export default Services;