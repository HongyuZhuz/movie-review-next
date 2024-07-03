import Form from "@/app/ui/reviews/create-form";


export default function Home({params}:{params:{id:string}}) {
  const id = params.id;
    console.log("start form")
      return (
        <div>
          Creat Review?
          <Form id = {id}></Form>
        </div>
      );
    }