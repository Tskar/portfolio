import Link from "next/link"
import Image from "next/image";

import { motion } from "framer-motion";

import ppimage from "../public/ppimg.png";

export default function Contact() {
    return(
        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 2}}
            className="min-h-screen relative flex flex-col text-center max-w-8xl px-8 justify-evenly items-center">
                <div>
                    <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl dark:text-gray-300">
                    About
                    </h3>
                </div>
                <div className="relative flex flex-col max-w-4xl md:flex-row lg:flex-row gap-6">
                    <div className="max-w-xl py-2 flex items-center justify-center">
                        <motion.div 
                            initial={{y:-20, opacity: 0, scale:.8}}
                            transition={{duration:1}}
                            whileInView={{opacity: 1, y:0, scale:1}}
                            className="relative h-64 w-64 rounded-full overflow-hidden transition duration-200 ease-in-out "
                            >
                                <Image src={ppimage}/>
                        </motion.div>
                    </div>
                    <div className=" max-w-8xl mx-auto text-center justify-center ">

                        <p className="text-md lg:text-xl py-2 px-2 leanding-8 text-gray-800">
                        Hello, my name is Sanskar! I am a web developer with a working proficiency in HTML
                        CSS, Tailwind, and JS. I am very comfortable working with the CLI environment, using git version control, 
                        frameworks such as React js and next js and various npm libraries.
                        </p>
                        <p className="text-md lg:text-xl py-2 px-2 leanding-8 text-gray-800">
                        Furthermore I possess a fundamental understanding of mobile first design concepts, agile SDLC, working with APIs, OOP concepts and data structures.
                        </p>

                        <p className="text-md lg:text-xl py-2 px-2 leanding-8 text-gray-800">
                        I am currently learning to work with MERN stack. I plan to expand my skill set by exploring server side with node and express, and eventually grow into a 
                        Full Stack Developer and focusing on a server side language. Until then I will hone in on my current talents and keep
                        hacking away until I master it.
                        </p>

                        <p className="text-md lg:text-xl py-2 px-2 leanding-8 text-gray-800">
                        I would love to work with a team that is truly passionate about what they create and strive to consistently
                        move forward. I am a strong believer that with enough time and effort, one can achieve anything.
                        </p>

                        <p className="text-md lg:text-xl py-2 px-4 leanding-8 text-gray-800">
                        I pride myself in being a family man, an athlete, a musician and overall an outdoor enthusiast.
                        </p>
                    </div>
                </div>

        </motion.div>
    );
}