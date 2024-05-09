'use client'
import { Nav } from "@douyinfe/semi-ui"
import { IconForm, IconScrollList, IconAvatar } from "@douyinfe/semi-icons-lab"
import { usePathname } from "next/navigation"
import Form from "./form"
import { SideNavProps } from "../lib/definition"

export default function SideNav({ratings}:SideNavProps) {
    const pathName =usePathname();
    const links = [
        {   
            itemKey:'readMe',
            text:"Read Me",
            icon:<IconForm />,
            link:"/"
        },
        {
            itemKey:'movieList',
            text:"Movie List",
            link:"/movies",
            icon:<IconScrollList/>
        }
    ]
    return(
        <div className="flex h-full flex-col px-3 py-4 md:px-2 text-wrap">
            <Nav
           style={{height:'100%'}} 
           items={links}
            >
                <Nav.Header logo= {<IconAvatar className= '' style={{height:'36px', fontSize:36}}/>} className="flex justify-center rounded-md bg-sky-500" text = {<div className="text-white text-wrap">Hongyu's <br/>movie review</div>}> </Nav.Header>
                <div className=" grow bg-gray-100 rounded-md justify-center ">
                    {pathName==='/movies' &&
                    <Form ratings={ratings}/>}
                </div>
                
        </Nav>
        </div>
        
    )

    /*const pathName=usePathname();
    return(
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
            <Link className="mb-2 flex h-20 items-end justify-start rounded-md bg-sky-500 p-4 md:h-40" 
            href="/">
                <p className="text-white w-32 md:2-40"> LOGO</p>
            </Link>
            <div className="md:grow flex flex-col overflow-auto justify-between">
                    <NavLinks />   
                <div className=" grow bg-gray-100 rounded-md justify-center ">
                    {pathName==='/movies' &&
                    <Suspense><Form ratings={ratings}/></Suspense>}
                </div>

                <Link className="py-3 px-3 bg-gray-100 my-3 rounded-md hover:bg-sky-500 text-left" href="/login">
                        Sign out
                </Link>
            </div>
        </div>

    )*/
}

/*'use client'

import Link from "next/link"
import NavLinks from "./nav-links"
import Form from "./form"
import { usePathname } from "next/navigation"
import { SideNavProps } from "../lib/definition"
import { Suspense } from "react"

export default function SideNav({ratings}:SideNavProps) {
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
                    {pathName==='/movies' &&
                    <Suspense><Form ratings={ratings}/></Suspense>}
                </div>

                <Link className="py-3 px-3 bg-gray-100 my-3 rounded-md hover:bg-sky-500 text-left" href="/login">
                        Sign out
                </Link>
            </div>
        </div>

    )
}*/