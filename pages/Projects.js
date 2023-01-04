import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";


import p1image1 from "../public/p1image1.png";
import p2image1 from "../public/p2image1.png";
import p3image1 from "../public/p3image1.png";

export default function Projects() {

    return (
        
        <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 2}}
            className="min-h-screen py-10 flex relative flex-col text-center 
                md:text-left max-w-7xl px-10 justify-center mx-auto items-center text-gray-500 dark:text-gray-300">
            <div className="flex flex-col justify-center text-center">
                <h3 className="uppercase py-4 tracking-[20px]  text-2xl">
                    Portfolio
                </h3>
                <p className="text-md py-4 leading-8 text-gray-800 dark:text-gray-400">
                    These are some of the projects I have worked on to understand the basics
                    of software life cycle.
                </p>
            </div>
            <div className="flex flex-col gap-10 h-auto lg:flex-row lg:flex-wrap max-w-screen-sm">
                <div className="flex-1 basis-1/3 relative">
                    <Image src={p1image1} className="rounded-xl" width={'100%'} height={'100%'}/>
                    <div className="absolute top-0 opacity-80 rounded-xl w-[100%] h-[100%] transition duration-300
                        ease-in-out hover:bg-gray-600">
                        <div className="flex items-center justify-center h-full opacity-0 hover:opacity-100">
                                <section className="flex  transition duration-300 flex-col px-5 font-bold text-white">
                                    <h2 className="font-semibold text-lg">Shopping Cart</h2>
                                    <p className="py-2">Website created with Js, Css, HTML, React framework.</p>
                                    <div>
                                        <a href="https://tskar.github.io/shopping-list/">
                                            <button className="projectButtons">
                                                Check it out
                                            </button>
                                        </a>
                                    </div>
                                </section>
                        </div>
                    </div>
                </div>
                <div className="flex-1 basis-1/3 relative">
                    <div className="">
                        <Image src={p2image1} className="rounded-xl" width={'100%'} height={'100%'}/>
                    </div>
                    <div className="absolute top-0 opacity-80 rounded-xl w-[100%] h-[100%] transition duration-300
                        ease-in-out hover:bg-gray-600">
                        <div className="flex items-center justify-center h-full opacity-0 hover:opacity-100">
                            <section className="flex transition duration-300 flex-col px-5 font-bold text-white">
                                <h2 className="font-semibold text-lg">Project Algorithm</h2>
                                <p className="py-2">Fun and educational project created with React framework.</p>
                                <a href="https://tskar.github.io/project-algorithm/">
                                    <button className="projectButtons">Check it out!</button>
                                </a>
                            </section>
                        </div>
                    </div>
                </div>
                <div className="flex-1 basis-1/3 relative">
                    <div className="">
                        <Image src={p3image1} className="rounded-xl" width={'100%'} height={'100%'}/>
                    </div>
                    <div className="absolute top-0 opacity-80 rounded-xl w-[100%] h-[100%] transition duration-300
                        ease-in-out hover:bg-gray-600">
                        <div className="flex items-center justify-center h-full opacity-0 hover:opacity-100">
                            <section className="flex transition duration-300 flex-col px-5 font-bold text-white">
                                <h2 className="font-semibold text-lg">Find Recipe</h2>
                                <p className="py-2">Fully functional website created with React framework.</p>
                                <a href="https://tskar.github.io/project-recipe/">
                                    <button className="projectButtons">Check it out!</button>
                                </a>
                            </section>
                        </div>
                    </div>
                </div>       
            </div>
        </motion.div>
    );
}