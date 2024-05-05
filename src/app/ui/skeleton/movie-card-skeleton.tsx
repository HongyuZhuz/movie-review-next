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