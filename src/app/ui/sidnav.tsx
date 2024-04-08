import Link from "next/link"
import NavLinks from "./nav-links"

export default function SideNav() {
    return(
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
            <Link className="mb-2 flex h-20 items-end justify-start rounded-md bg-red-600 p-4 md:h-40" 
            href="/">
                <p className="text-white w-32 md:2-40"> LOGO</p>
            </Link>
            <div className="grow flex flex-col overflow-auto justify-between">
                <div>
                    <NavLinks />
                </div>
                <div className="grow bg-gray-100 rounded-md"/>
                <button className="py-3 px-3 bg-gray-100 my-3 rounded-md hover:bg-red-300 text-left">
                        Sign out
                </button>
                
                
                
            </div>
        </div>

    )
}