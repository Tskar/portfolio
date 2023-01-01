import {AiFillGithub, AiFillInstagram, AiOutlineMail} from 'react-icons/ai';
import Link from 'next/link'


export default function Titlebar() {

    return (
        <nav className="flex flex-col py-5 px-4 justify-center text-center bg-green-500">

                <h1 className="text-xl font-bold">
                    Sanskar Thapa
                </h1>
                <div className="flex justify-center gap-4 text-2xl">
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
            </nav>
    );
}