export function FunctionInvolves () {
    return(
        <div className="flex flex-col mt-12">
            <p className=" text-4xl ml-4 font-semibold">Function involves</p>
            <p className=" text-2xl text-gray-300 ml-4">What this website can do</p>
            <FunctionCardList />
        </div>
    )
}

function FunctionCardList () {
    return(
        <div className="flex flex-row justify-center flex-wrap my-6">
            <FunctionCard content = "Account Authorizing"/>
            <FunctionCard content = " Search by movie name"/>
            <FunctionCard content = "Database CRUD"/>
        </div>
    )
}
function FunctionCard({content}:{content:string}) {
    return(
        <div className="flex flex-col rounded-md shadow-md w-[405px] h-[192px] m-4">
            <div className="text-xl m-6 font-medium">
                {content}
            </div>
            
        </div>
    )
}