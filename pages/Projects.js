import Link from "next/link";
import Image from "next/image";

import p1image1 from "../public/p1image1.png";
import p2image1 from "../public/p2image1.png";
import p3image1 from "../public/p3image1.png";

export default function Projects() {

    return (
        <div className="min-h-screen relative flex flex-col gap-4 items-center justify-evenly mx-auto "> 
            <h3 className="uppercase py-8 tracking-[20px] text-gray-500 text-2xl">
                Projects
            </h3>

            <div className="flex flex-col py-10 gap-10 w-[60%]">
                <p className="text-md text-gray-800">
                    These are some of the projects I have worked on to understand the basics
                    of software life cycle.
                </p>
                <div className="bg-white flex border-gray-400 border-2">
                    <Image src= {p1image1} className="w-[60%]"/>
                    <section className="flex flex-col px-5">
                        <h2 className="font-semibold text-lg">Shopping Cart</h2>
                        <p className="py-2">Website created with Js, Css, HTML, React framework.</p>
                        <a href="https://tskar.github.io/shopping-list/">
                            <button className="projectButtons">Check it out!</button>
                        </a>
                    </section>
                </div>
                <div className="bg-white flex border-gray-400 border-2">
                    <Image src= {p2image1} className="w-[60%]"/>
                    <section className="px-5">
                        <h2 className="font-semibold text-lg">Project Algorithm</h2>
                        <p className="py-2">Fun and educational project created with React framework.</p>
                        <a href="https://tskar.github.io/project-algorithm/">
                            <button className="projectButtons">Check it out!</button>
                        </a>
                    </section>
                </div>
                <div className="bg-white flex border-gray-400 border-2">
                    <Image src= {p3image1} className="w-[60%]"/>
                    <section className="px-5">
                        <h2 className="font-semibold text-lg">Find Recipe</h2>
                        <p className="py-2">Fully functional website created with React framework.</p>
                        <a href="https://tskar.github.io/project-recipe/">
                            <button className="projectButtons">Check it out!</button>
                        </a>
                    </section>
                </div>
            </div>
        </div>
    );
}