import Link from 'next/link'

import {BsThreeDotsVertical} from 'react-icons/bs';
import {WiDaySunny} from 'react-icons/wi';
import {MdNightlight} from 'react-icons/md';


import Hambar from "./Hambar";

import { useState } from "react";

export default function Titlebar({darkMode, setDarkMode}) {

    const [active, setActive] = useState(false);


    return (
        <nav className="sticky top-0 z-20 flex py-4 px-4 justify-between text-center 
            text-sm md:text-lg lg:text-xl  dark:text-white">

            <Link href={"#Intro"}>
                <h1 className="navButton ml-6 font-bold cursor-pointer">
                    Sanskar Thapa
                </h1>
            </Link>
            <ul className="flex gap-8 items-center font-medium">
                <Link className="navButton hidden-mobile" href={"#About"}>
                    <li className="">About</li>
                </Link>
                <Link className="navButton hidden-mobile" href={"#Projects"}>
                    <li className="">Projects</li>
                </Link>
                <Link className="navButton hidden-mobile" href={"#Contact"}>
                    <li className="">Contact</li>
                </Link>
                <li>
                    <MdNightlight className="absolute top-5 right-15 dark:opacity-0"/>
                    <WiDaySunny className="opacity-0 absolute top-5 right-15 dark:opacity-100" onClick={() => setDarkMode(!darkMode)}/>
                </li>
                <li>
                    <BsThreeDotsVertical onClick={() => setActive(!active)} className="md:hidden lg:hidden"/>
                </li>
                <li>
                    {active && <Hambar className="md:hidden lg:hidden" active={active} handleClose={()=>setActive(false)}/>}
                </li>
            </ul>
        </nav>
    );
}
