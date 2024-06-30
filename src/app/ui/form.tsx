'use client'
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
        <div className='flex py-5 justify-center flex-col md:flex-row mx-2 flex-1'>
            <input
                type="text"
                placeholder="movie name"
                onChange={(e)=>{
                    handleSearch(e.target.value,"title")
                }}
                className='rounded-md h-10 grow mx-3'
                defaultValue={searchParams.get('title')?.toString()}
            />
            {<select defaultValue={"ALL"} className='rounded-md h-10 grow mx-3' onChange={(e)=>{
                    handleSearch(e.target.value,"rated")
                }}
                value={searchParams.get('rated')?.toString()}>
                {ratings.map((rating)=>{
                    return <option key={rating} value={rating}>{rating}</option>
                })}
            </select>}
            <button className='bg-black text-white p-1 px-2 rounded-md hover:bg-white hover:text-black border-black border-2 h-10'>search</button>
        </div>
    );
}