import Link from "next/link"

export function Title () {
    return(
        <div className="flex flex-col max-w-4xl text-center">
            <div className="text-6xl text-black font-bold m-4">
                    This is  Hongyu&apos;s practice website
            </div>
            <div className="text-2xl text-gray-400 font-normal m-4">
            A Full-stack website built with Next.js, Express.js, MongoDB and AWS. Designed with Figma.
            </div>
            <Link key={"movieList"} href={"/movies"}
                className="bg-black  text-white py-2 px-3 flex justify-center max-w-28 self-center rounded-md hover:bg-white hover:text-black border-black border-2">
            Browse</Link>
            
        </div>
    )
}