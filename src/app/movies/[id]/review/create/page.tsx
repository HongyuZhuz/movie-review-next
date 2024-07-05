import Form from "@/app/ui/reviews/create-form";


export default function Home({params}:{params:{id:string}}) {
  const id = params.id;
    console.log("start form")
      return (
        <div className="flex justify-center rounded-md shadow-lg p-10 items-center">
          <Form id = {id}></Form>
        </div>
      );
    }