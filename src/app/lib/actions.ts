'use server'
import {z} from 'zod';

const FormSchema = z.object(
    {
        movieId:z.string(),
        userInfo:z.object({name:z.string(),_id:z.string()}),
        review:z.string(),
        date:z.string(),
    }
)
const CreateInvoice = FormSchema.omit({userInfo:true,date:true})

export async function createReview (id:string, formData:FormData){

    const {movieId, review} = CreateInvoice.parse(
        {
            movieId:id,
            review:formData.get('review'),
        }
    )
    

    const userInfo = {name:"z", _id:"123"};
    const date = new Date().toISOString().split('T')[0];

    console.log(movieId);
    console.log(review)
    console.log(date)
    console.log(userInfo)

}