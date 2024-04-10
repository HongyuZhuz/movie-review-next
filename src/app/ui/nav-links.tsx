'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"
import clsx from "clsx"

const links = [
    {
        text:"Read Me",
        link:"/"
    },
    {
        text:"Movie List",
        link:"/movies"
    }
]
export default function NavLinks(){
    const pathName = usePathname();
    return(
        <div className="flex flex-col w-full">
            {links.map((l)=>{
                return (<Link key={l.text} className= {clsx("bg-gray-100 my-2 py-3 pl-2 rounded-md hover:bg-sky-500 hover:text-white",
                {
                    'bg-sky-500 text-white':pathName===l.link
                }
                )}
                href={l.link}>{l.text}</Link>)
            })}
        </div>
    )
}