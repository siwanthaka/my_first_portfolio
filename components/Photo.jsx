"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1, transition: { delay: 2, duration: 0.4, ease: "easeIn" } }}
      >
        <motion.div
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" } }}
          className="relative w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten"
        >
          <Image
            src="/assets/photo.png"
            priority
            quality={100}
            fill
            alt=""
            className="object-contain"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Photo;
