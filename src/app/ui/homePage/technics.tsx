import Image from "next/image"
import clsx from "clsx"
const texts = ["Figma","Tailwind", "Nextjs", "Expressjs", "MongoDB", "AWS"]

export function Technics () {
    return(
        <div className="flex flex-col mt-12 md:w-auto w-screen">
            <div className="flex flex-col ml-8 md:ml-4">
            <h1 className=" text-4xl ml-4 font-semibold">Technics</h1>
            <p className=" text-2xl text-gray-400 ml-4">How I build the website</p>
            </div>
            <div className="flex md:flex-row flex-wrap justify-evenly m-10 flex-col">
                {texts.map((text)=>(<Technic content = {text}/>))}
            </div>
        </div>
    )
}

function Technic ({content}:{content:string}) {
    return(
        <div className="flex   flex-col justify-center  items-center md:w-52 my-16">
            <Image src={`/${content}.svg`} key={content} alt={content} width={50} height={50} 
            style={{
          height: content === "Expressjs" || content === "Tailwind" ||content==="AWS"? '39px' : '50px',
          width: 'auto'
        }}
        className={clsx({'my-2':content === "Expressjs" || content === "Tailwind" ||content==="AWS"})}/>
            <p className=" text-center text-black text-xl mt-3">{content}</p>
        </div>
    )
}