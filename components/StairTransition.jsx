"use client";

import { AnimatePresence } from "framer-motion";
import {usePathname} from "next/navigation";

// components
import Stairs from "./Stairs";


const StairTransition = () => {
    const pathname = usePathname();
    return ( 
     <>
        <AnimatePresence mode="wait">
            <div key={pathname}>
                <div className="h-screen w-screen fixed top-0 right-0 
                pointer-events-none z-40 flex ">
                <stairs />
                </div>
            </div>
        </AnimatePresence>
     </>
    );
};

export default StairTransition;