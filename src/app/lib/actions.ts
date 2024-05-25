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
const CreateInvoice = FormSchema.omit({id:true,date:true})

export async function createReview (id:string, formData:FormData){
    console.log(id);
    console.log(formData.get('review'))
}