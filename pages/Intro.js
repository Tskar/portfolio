import {AiFillGithub, AiFillInstagram, AiOutlineMail} from 'react-icons/ai';
import Link from 'next/link';

import { motion } from "framer-motion";


export default function Intro() {

    return (
        <div className="min-h-screen flex flex-col text-center justify-center gap-5">

            <div className='max-w-8xl mx-auto'>
                <h1 className="text-3xl drop-shadow-md tracking-[10px] text-white 
                    md:drop-shadow-xl md:text-7xl lg:text-9xl lg:drop-shadow-lg dark:text-gray-800 ">
                    programmer
                </h1>
            </div>
            <div>
                <h2 className="uppercase tracking-[20px] text-gray-500 text-lg mt-2 
                    md:py-4 lg:py-4 md:text-xl lg:text-2xl  dark:text-gray-300">
                    Sanskar Thapa
                </h2>
            </div>
            <div>
                <h2 className="text-xl py-2 text-gray-800 font-medium 
                    md:text-3xl lg:text-4xl dark:text-gray-400">
                    Software Developer.
                </h2>
                <p className="text-md py-2 leanding-8 text-gray-800 dark:text-gray-500">
                    HTML, CSS, JS
                </p>
            </div>
            <div className="max-w-4xl mx-auto px-6">
                <p className="text-md py-2 max-w-6xl leanding-8 text-gray-800 dark:text-gray-400">
                    I'm an aspiring software developer specializing in both frontend and backend developmet
                    for projects scaling from simple to complex scalable applications. If you would
                    like to know more about me, feel free to scroll down.. 
                </p>
            </div>
            <div className='divider-horizontal w-[50%] border-b-2 mx-auto dark:text-gray-300 '>

            </div>

            <motion.div 
              initial={{y:-20, opacity: 0, scale: 0.5}}
              animate={{}}
              transition={{duration:.5}}
              whileInView={{opacity: 1, y:0, scale:1}}
              className="text-3xl flex justify-center gap-16 py-3 text-gray-600 md:text-4xl lg:text-6xl dark:text-gray-300">
              <motion.div whileHover={{scale:1.2}}>
                <a href="https://github.com/Tskar">
                    <AiFillGithub />
                </a>
              </motion.div>
              <motion.div whileHover={{scale:1.2}}>
                <a href="https://www.instagram.com/sanskarthapa7/">
                    <AiFillInstagram />
                </a>
              </motion.div>
              <motion.div whileHover={{scale:1.2}}>
                <Link href={"#Contact"}>
                    <AiOutlineMail />
                </Link>
              </motion.div>
            </motion.div>
        </div>
    );
}