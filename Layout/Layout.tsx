import React from 'react';
import DefaultInput from "../components/form/DefaultInput";
import Link from "next/link";
import {GrFacebook, GrLinkedin, RiMenu3Fill, GrInstagram} from "react-icons/all";
interface LayoutProps {
    children: React.ReactNode
}

function Layout({children}:LayoutProps) {
    return (
        <>
            <header className="flex w-full justify-between items-center px-5 py-5" >
                <span className="text-2xl" >Kartik.</span>
                <RiMenu3Fill size="24" />
            </header>
            <main>
                {children}
            </main>
            <footer className="flex flex-col gap-20 px-5" >
                <div>
                    <h2 className="text-4xl mb-10 " >Hire Me For Your Next Amazing Project</h2>
                    <p className="mb-10 text-[#333333] " >
                        Let’s make something new, different and more meaningful or make thing more visual or conceptual? Just say hello!Ω
                    </p>
                    <ol className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400" >
                        <li>+998 90 504 74 94</li>
                        <li>dsarifkulo021@gmail.com</li>
                        <li>
                            28 Green Tower, Street name,
                            New York City, USA
                        </li>
                    </ol>
                </div>
                <div>
                    <form className="flex flex-col gap-4 items-end p-5 py-10 bg-[#333333]" >
                        <DefaultInput label={"Your name"} type={"text"} />
                        <DefaultInput label={"Your email"} type={"email"} />
                        <DefaultInput label={"Your budget (optional)"} type={"text"} />
                        <DefaultInput label={"Your project description"} type={"text"} />
                        <button className="" >SEND</button>
                    </form>
                </div>
                <div className="pb-10" >
                    <nav className="flex justify-between mb-10 " >
                        <Link href="" >
                            <GrFacebook size="20" color="#333333" />
                        </Link>
                        <Link href="" >
                            <GrLinkedin size="20" color="#333333" />
                        </Link>
                        <Link href="" >
                            <GrInstagram size="20" color="#333333" />
                        </Link>
                    </nav>
                    <span className="text-md text-[#333333]" >© 2020 Ozart Portfolio Template</span>
                </div>
            </footer>
        </>
    );
}

export default Layout;