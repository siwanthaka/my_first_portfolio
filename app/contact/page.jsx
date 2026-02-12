"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+94) 75 081 8024",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "siwanthakasavinda@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Minuwangoda",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `New Contact Message from ${formData.firstname}`;

    const body = `
Name: ${formData.firstname} ${formData.lastname}
Client Email: ${formData.email}
Phone: ${formData.phone}
Service: ${formData.service}

Message:
${formData.message}
    `;

    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=siwanthakasavinda@gmail.com&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(gmailURL, "_blank");

    // Clear form
    setFormData({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.5, duration: 0.4 },
      }}
      className="h-screen flex items-center justify-center"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[20px] -mt-5">
          
          {/* FORM */}
          <div className="xl:w-[50%] order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">
                Let's work together
              </h3>

              <p className="text-white/60">
                I’m available for freelance work or full-time collaboration.
              </p>

              {/* Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Input
                  name="firstname"
                  placeholder="Firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="lastname"
                  placeholder="Lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  name="phone"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              {/* Service Select */}
              <Select
                onValueChange={(value) =>
                  setFormData({ ...formData, service: value })
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>

                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Frontend Development">
                      Frontend Development
                    </SelectItem>
                    <SelectItem value="UI/UX Design">
                      UI/UX Design
                    </SelectItem>
                    <SelectItem value="Backend Development">
                      Backend Development
                    </SelectItem>
                    <SelectItem value="Video Editing">
                      Video Editing
                    </SelectItem>
                    <SelectItem value="Automation Testing">
                      Automation Testing
                    </SelectItem>
                    <SelectItem value="Python Development">
                      Python Development
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* Message */}
              <Textarea
                name="message"
                className="h-[100px]"
                placeholder="Write your message or project details..."
                value={formData.message}
                onChange={handleChange}
                required
              />

              {/* Button */}
              <Button
                type="submit"
                size="md"
                className="max-w-[160px] self-start"
              >
                Send message
              </Button>
            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-6">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[60px] h-[60px] bg-[#27272c] text-accent rounded-md flex items-center justify-center text-2xl">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-lg">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
