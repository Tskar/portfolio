import {AiFillGithub, AiFillInstagram, AiOutlineMail} from 'react-icons/ai';
import Link from 'next/link';

export default function Intro() {

    return (
        <div className="h-screen flex flex-col text-center justify-center">
            <h1 className="text-9xl tracking-[10px] text-white drop-shadow-lg">
                programmer
            </h1>
            <h2 className="uppercase py-4 tracking-[20px] text-gray-500 text-2xl mt-2">
                Sanskar Thapa
            </h2>
            <h2 className="text-xl py-2 text-gray-800 font-medium">
                Software Developer.
            </h2>
            <p className="text-md py-2 leanding-8 text-gray-800">
                HTML, CSS, JS
            </p>
            <p className="text-md py-2 px-24 leanding-8 text-gray-800">I'm a software developer specializing in both frontend and backend developmet
                for projects scaling from simple to complex scalable applications. If you would
                like to know more about me, feel free to scroll down.. 
            </p>

            <div className="flex justify-center gap-4 text-4xl">
                <a href="https://github.com/Tskar">
                    <AiFillGithub />
                </a>
                <a href="https://www.instagram.com/sanskarthapa7/">
                    <AiFillInstagram />
                </a>
                <Link href={"#Contact"}>
                    <AiOutlineMail />
                </Link>
            </div>
        </div>
    );
}