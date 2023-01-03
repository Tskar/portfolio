import Link from 'next/link'

import {BsThreeDotsVertical} from 'react-icons/bs';

import Hambar from "./Hambar";

import { useState } from "react";

export default function Titlebar() {

    const [active, setActive] = useState(false);


    return (
        <nav className="sticky top-0 z-20 flex py-4 px-4 justify-between text-center bg-transparent text-sm md:text-lg lg:text-xl">

            <Link href={"#Intro"}>
                <h1 className="navButton font-bold cursor-pointer">
                    Sanskar Thapa
                </h1>
            </Link>
            <ul className="flex gap-8 items-center font-medium">
                <Link className="navButton hidden-mobile" href={"#Projects"}>
                    <li className="">Projects</li>
                </Link>
                <Link className="navButton hidden-mobile" href={"#Contact"}>
                    <li className="">Contact</li>
                </Link>
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
