'use server'
import {z} from 'zod';
import axios from 'axios';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const FormSchema = z.object(
    {
        movieId:z.string(),
        userInfo:z.object({name:z.string(),_id:z.string()}),
        review:z.string(),

    }
)
const CreateInvoice = FormSchema.omit({userInfo:true})

export async function createReview (id:string, formData:FormData){

    const {movieId, review} = CreateInvoice.parse(
        {
            movieId:id,
            review:formData.get('review'),
        }
    )
    
    const userInfo = {name:"z", _id:"123"};

    const data = {
        review:review,
        name:userInfo.name,
        user_id:userInfo._id,
        movie_id:movieId
    }

    await axios.post("https://jb7iw7mjxgoabj2pm6v6qquoea0zkwli.lambda-url.us-east-1.on.aws/api/v1/movies/review",data)

    revalidatePath(`/movies/${id}`);
    redirect(`/movies/${id}`);
    
}