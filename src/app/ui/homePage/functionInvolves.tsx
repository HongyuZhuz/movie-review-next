import Image from "next/image"

export function FunctionInvolves () {
    return(
        <div className="flex flex-col mt-12">
            <p className=" text-4xl ml-4 font-semibold">Function involves</p>
            <p className=" text-2xl text-gray-400 ml-4">What this website can do</p>
            <FunctionCardList />
        </div>
    )
}

function FunctionCardList () {
    return(
        <div className="flex flex-row justify-center flex-wrap mt-6 mb-4">
            <FunctionCard 
                title = "Account Authorizing"
                icon = "profile"
                sentence = "User can sign up and log in their accounts to manage their reviews"/>
                <FunctionCard 
                title = "Search by movie name"
                icon = "search"
                sentence = "Use domain parameter to give immediate feedback of searching attempts"/>
                <FunctionCard 
                title = "Database CRUD"
                icon = "database"
                sentence = "Link with AWS and MongoDB Atlas to create, update and delete reviews."/>
        </div>
    )
}
function FunctionCard({title,icon,sentence}:{title:string, icon:string, sentence:string}) {
    return(
        <div className="flex flex-col rounded-md shadow-md md:w-[405px] h-[192px] w-80 m-4">
            <div className="text-xl m-6 font-medium">
                {title}
            </div>
            <div className="flex flex-row mx-6">
                <div className="flex">
                    <Image key= {icon} src={`/${icon}.png`} alt={icon} width={80} height={80} className="object-contain"/>
                </div>
                <div className=" text-[16] text-gray-400 ml-3">
                    {sentence}
                </div>
            </div>
        </div>
    )
}