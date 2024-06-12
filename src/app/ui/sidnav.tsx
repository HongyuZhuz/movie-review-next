'use client'
import { Dropdown, Nav } from "@douyinfe/semi-ui"
import { IconForm, IconScrollList, IconAvatar } from "@douyinfe/semi-icons-lab"
import { usePathname } from "next/navigation"
import Form from "./form"
import { SideNavProps } from "../lib/definition"
import {Select,Button, Avatar} from "@douyinfe/semi-ui"

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
        <div>

        
        <div className="hidden md:block">
            <div className="flex  flex-col px-3 py-4 md:px-2 text-wrap h-screen">
            <Nav
           style={{height:'100%'}} 
           items={links}
           footer={
            <div className="mt-auto p-4 bg-white w-full">
                    Sign out
                </div>}
            >
                <Nav.Header logo= {<IconAvatar className= '' style={{height:'36px', fontSize:36}}/>} className="flex justify-center rounded-md bg-sky-500" text = {<div className="text-white text-wrap">Hongyu&apos;s <br/>movie review</div>}> </Nav.Header>
                <div className=" grow bg-gray-100 rounded-md justify-center ">
                    {pathName==='/movies' &&
                    <Form ratings={ratings}/>}
                </div>
        </Nav>
        </div>
        </div>

        <div className=" md:hidden flex flex-col">
            <div className="flex flex-row justify-start">
            <Nav
            mode={'horizontal'}
           style={{width:'100%'}} 
           items={links}
           footer={
            <>
                Sign out
            </>}
            >
            <Nav.Header  className="flex justify-center rounded-md  h-full grow" text = {<div className="text-sm">Hongyu&apos;s movie review</div>}> </Nav.Header>
                
        </Nav>
        
        </div>
        <div className=" grow bg-gray-100 rounded-md justify-center ">
                    {pathName==='/movies' &&
                    <Form ratings={ratings}/>}
                </div>
        </div>
        </div>
        
        
    )
}
