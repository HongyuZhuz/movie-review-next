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

export const movieDetailSkeleton = (<div className="flex flex-col">
<div className="flex flex-col h-screen">
  <div className="text-lg">
    <Skeleton.Title></Skeleton.Title>
  </div>
  <div className="flex flex-col md:flex-row justify-center flex-auto">
    <div className=" flex justify-center md:max-h-96 border-4">
        <Skeleton.Image style={{ width: 300, height: 450 }}></Skeleton.Image>
    </div>
        
    <div className="md:w-1/2 p-4 flex flex-col flex-1">
      <div className=" max-w-80">
      <Skeleton.Paragraph rows={6}></Skeleton.Paragraph>
      <div>
      <Skeleton.Paragraph rows={3}></Skeleton.Paragraph>
      </div>
      <div>
      <Skeleton.Paragraph rows={1}></Skeleton.Paragraph>
      </div>
      </div>
      
    </div>
  </div>
  
  
</div>
<br/>

<div className="reviewSection">
  <h1>
    Reviews
  </h1>
</div>
</div>)