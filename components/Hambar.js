import Link from "next/link"

import { motion } from "framer-motion";
import {CgClose} from "react-icons/cg";


export default function Hambar({active, handleClose}) {

    if(!active) return null;

    return(
        <motion.div 
            initial={{right:-200}}
            whileInView={{right:0}}
            transition={{duration: 1}}
            className="fixed bg-black/60 backdrop-blur-sm right-0 top-0 w-[60%] h-[100vh] text-white flex justify-center">
            <div className="navButton fixed right-10 top-10">
                <CgClose className="text-lg" onClick={handleClose}/>
            </div>
             <ul className="flex flex-col w-[100%] justify-center gap-8 items-center font-medium">
                
                <Link className="navButton text-2xl" href={"#Projects"}>
                    <li className="hover:text-gray-400 hover:translate-y-[-5px]">Projects</li>
                </Link>
                <Link className="navButton text-2xl" href={"#Contact"}>
                    <li className="hover:text-gray-400 hover:translate-y-[-5px]">Contact</li>
                </Link>
            </ul>
        </motion.div>
    );
}