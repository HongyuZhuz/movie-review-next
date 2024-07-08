'use client'
import { Skeleton } from "@douyinfe/semi-ui";
export const cardSkeleton = (<div className="flex-auto flex flex-col  justify-center border w-72 p-5 rounded-md border-sky-600 max-w-80">
    <Skeleton.Image style={{ width: 250, height: 450 }}/>
    <Skeleton.Title style={{ width: 120,  marginTop:20, marginBottom:20}}/>
    <Skeleton.Paragraph rows={5}/>
</div>);

export const cardListSkeleton = (
    <div className="flex flex-wrap gap-4 mt-4  mx-4 md:justify-normal justify-center">
        {Array.from({ length: 20 }).map((_, index) => (
        <>
            {cardSkeleton}
            </>))
            }
    </div>
)



export function MovieDetailSkeleton () {
  return(
    <div className="flex flex-col">
      <div className="flex md:flex-row max-w-[1280px] mb-20 p-4 flex-col">
        <div className="hidden md:block justify-center items-center w-[625px] h-[613px] ">
          <Skeleton.Image style={{ width: 450, height: 550 }}/>
        </div>
        <div className="flex flex-col md:w-[500px] mx-3 md:mx-0 flex-1">
          <div className=" md:text-4xl  text-2xl mb-4">
          <Skeleton.Title  style={{width:240, height:40}}/>
          </div>
          <div className=" mb-4 flex flex-row">
          <Skeleton.Paragraph rows={1} style={{width:150, height:20}}/>
          </div>
          <div className=" text-gray-500 mb-4">
          <Skeleton.Paragraph rows={1} style={{width:150, height:20}}/>
          </div>
          <div className="mb-4">
          <Skeleton.Paragraph rows={8}/>
          </div>
          <Skeleton.Button/>
        </div>
      </div>

<div className="reviewSection">
  <h1>
    Reviews
  </h1>
</div>
</div>
  )
}