"use client";

import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
     Select,
      SelectContent,
      SelectGroup,
       SelectItem,
       SelectLabel,
       SelectTrigger,
       SelectValue
    } from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt} from "react-icons/fa";
import { Phone } from "lucide-react";


const info = [
    {
        icon : <FaPhoneAlt/>,
        title: "Phone",
        description: "(+94) 75 081 8024",
    },
    {
        icon : <FaEnvelope/>,
        title: "Email",
        description: "siwanthkasavinda@gmail.com",
    },
    {
        icon : <FaMapMarkedAlt/>,
        title: "Address",
        description: "Colombo , Malabe",
    },
]


import {motion} from "framer-motion";

const Contact = () => {
    return <motion.section 
            initial={{opacity: 0}} 
            animate={{
                opacity: 1,
                 transition: {delay:2.4, duration: 0.4, ease:'easeIn'},
            }}
            className="py-2"
            >

               <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[20px]">
                    {/*form*/}
                    <div className="xl:w-[50%]  order-2  xl:order-none">
                        <form className="flex flex-col gap-4 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent">Let's work together</h3>
                            <p className="text-white/60">I’m available for freelance work or full-time collaboration.
                            </p>
                            {/*input*/}
                            <div className="grid grid-cols-1 
                            md:grid-cols-2 gap-5">
                                <Input type = "firstname" placeholder="Firstname"/>
                                <Input type = "lastname" placeholder="Lastname"/>
                                <Input type = "email" placeholder="Email address"/>
                                <Input type = "phone" placeholder="Phone number"/>
                            </div>
                            {/*select*/}
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a service"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        <SelectItem value="est">Frontend Development</SelectItem>
                                        <SelectItem value="cst">Ui/Ux Design</SelectItem>
                                        <SelectItem value="mst">Backend Development</SelectItem>
                                        <SelectItem value="nst">DevOps Engineering</SelectItem>
                                        <SelectItem value="rst">Automation Testing</SelectItem>
                                        <SelectItem value="pst">Python App Development</SelectItem>
                                    </SelectGroup>
                                </SelectContent>

                            </Select>
                            {/*textarea*/}
                            <Textarea className="h-[100px]"
                             placeholder= "Write your message or project details..."
                            />


                            {/*btn*/}
                            <Button size="md" className="max-w-[160px] self-start">
                                Send message
                                </Button>
                                </form>
                    </div>
                    {/*info*/}
                    <div className="flex-1 flex items-center xl:justify-end order-1
                    xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-6">
                            {info.map((item, index)=> {
                                return <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[57px] xl:w-[72px] xl:h-[72px] bg-[#27272c]
                                     text-accent rounded-md flex items-center
                                     justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                    <p className="text-white/60">{item.title}</p>
                                  <h3 className="text-lg">{item.description}</h3>  
                                    </div>
                                  
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
               </div>
                </motion.section>;
};

export default Contact;