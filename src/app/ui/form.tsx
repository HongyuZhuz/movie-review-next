import {useSearchParams, usePathname, useRouter} from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';
import { SideNavProps } from '../lib/definition';

export default function Form({ratings}:SideNavProps) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const {replace} = useRouter();
    ratings.unshift
    

    const handleSearch = useDebouncedCallback((term:string,a:string) => {
        const params = new URLSearchParams(searchParams);
        if(term){
            params.set(a, term);
            params.set('page',"0")
        }else{
            params.delete(a)
            params.set('page',"0")
        }
        replace(`${pathname}?${params.toString()}`)
    },500)

    return (
        <div className='flex py-5 justify-center flex-col mx-2'>
            <input
                type="text"
                placeholder="movie name"
                onChange={(e)=>{
                    handleSearch(e.target.value,"title")
                }}
                className='rounded-md my-.5'
                defaultValue={searchParams.get('title')?.toString()}
            />
            {<select defaultValue={"ALL"} className='rounded-md my-1' onChange={(e)=>{
                    handleSearch(e.target.value,"rated")
                }}
                value={searchParams.get('rated')?.toString()}>
                {ratings.map((rating)=>{
                    return <option key={rating} value={rating}>{rating}</option>
                })}
            </select>}
            <button className='bg-sky-500 text-white p-2 rounded-md hover:bg-sky-600'>search</button>
        </div>
    );
}