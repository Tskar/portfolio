import Link from 'next/link'


export default function Titlebar() {

    return (
        <nav className="flex py-5 px-4 justify-between text-center bg-[#e7a923]">

            <Link href={"#Welcome"}>
                <h1 className="navButton font-bold cursor-pointer">
                    Sanskar Thapa
                </h1>
            </Link>
            <ul className="flex gap-8 items-center font-medium">
                <Link className="navButton" href={"#Project"}>
                    <li className="">Projects</li>
                </Link>
                <Link className="navButton" href={"#Contact"}>
                    <li className="">Contact</li>
                </Link>
            </ul>
        </nav>
    );
}