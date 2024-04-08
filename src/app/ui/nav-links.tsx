import Link from "next/link"
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
    return(
        <div className="flex flex-col w-full">
            {links.map((l)=>{
                return (<Link className= "bg-gray-100 my-2 py-3 pl-2 rounded-md hover:bg-red-300"href={l.link}>{l.text}</Link>)
            })}
        </div>
    )
}