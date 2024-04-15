'use client'

import Link from "next/link"
import NavLinks from "./nav-links"
import Form from "./form"
import { usePathname } from "next/navigation"

export default function SideNav() {
    const pathName=usePathname();
    return(
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
            <Link className="mb-2 flex h-20 items-end justify-start rounded-md bg-sky-500 p-4 md:h-40" 
            href="/">
                <p className="text-white w-32 md:2-40"> LOGO</p>
            </Link>
            <div className="md:grow flex flex-col overflow-auto justify-between">
                    <NavLinks />   
                <div className=" grow bg-gray-100 rounded-md justify-center ">
                    {pathName==='/movies' &&<Form/>}
                </div>
                
                
                <Link className="py-3 px-3 bg-gray-100 my-3 rounded-md hover:bg-sky-500 text-left" href="/login">
                        Sign out
                </Link>
            </div>
        </div>

    )
}