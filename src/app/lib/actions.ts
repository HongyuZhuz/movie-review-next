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
    console.log(formData.get("star"))
    console.log(formData.get("review"))
    console.log(formData.get("title"))

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

export async function deleteReview (id:string, reviewId:string, formData:FormData){
    try{
        const response = await axios.delete('https://jb7iw7mjxgoabj2pm6v6qquoea0zkwli.lambda-url.us-east-1.on.aws/api/v1/movies/review', {
            params: {
                review_id: reviewId,
                user_id: "123"
            }
        });
        console.log('Delete response:', response.data);}
    
    catch(error) {
        console.error('Error fetching data:', error)
    }
    revalidatePath(`/movies/${id}`);
}

export async function editReview ( id:string,formData:FormData) {
    const review = formData.get("review")
    

    const data = {
        review:review,
        movie_id:id,
        user_id:"123",
        name:"z"
    }

    const response = await axios.put("https://jb7iw7mjxgoabj2pm6v6qquoea0zkwli.lambda-url.us-east-1.on.aws/api/v1/movies/review",data)
    console.log(id)

}