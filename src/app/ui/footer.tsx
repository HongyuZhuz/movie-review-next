import Link from "next/link"
import Image from "next/image"

export default function Footer () {
    return(
        <div className="flex flex-col justify-center text-center mt-10 pb-20">
            <hr className=" md:mx-36 mx-10"/>
            <p className="text-black text-2xl pt-20">Hongyu&apos;s practice website</p>
            <Link className=" text-gray-400 text-xl pt-3 underline hover:text-gray-600" href = "">Download Resume</Link>
            <IconList />
        </div>
    )
}

function IconList () {
    return (
        <div className="flex justify-center flex-row pt-3 ">
            <Link key={"personal website"} className="" href={"https://www.hongyu-zhu.com"}><Image key = "personal website" alt = "missing git icon"src={"/cool.png"} className="p-2 opacity-60 hover:opacity-100" width={40} height={40}/></Link> 
           <Link key={"github"} className="" href={"https://github.com/HongyuZhuz"}><Image key = "git" alt = "missing git icon"src={"\github-mark.svg"} className="p-2 opacity-60 hover:opacity-100" width={40} height={40}/></Link> 
           <Link key={"linkedIn"} className="" href={"https://www.linkedin.com/in/hongyu-zhu-180817173/"}><Image key = "linkedIn" alt = "missing git icon"src={"\iconmonstr-linkedin-3.svg"} className="p-2 opacity-60 hover:opacity-100" width={40} height={40}/></Link> 
        </div>
    )
}