'use client'
import Image from "next/image"
import { useEffect, useState } from "react";


export function HomeImage () {
    const [imageLink,setImageLink] = useState("");


    async function getSignedUrl() {
        try{
            const response = await fetch(`/api`);
            const data = await response.json();
            setImageLink(data.signedUrl)
        }catch(e)
        {
            console.error(e);
        }
        
      }

    useEffect(() => {
        getSignedUrl()
        console.log(imageLink)
      }, []);
        
        if(imageLink===""){
            return(<div>Loading...</div>)
        }else{
            return(
                <div className="flex m-10">
            <Image key={imageLink} src={imageLink} alt ={imageLink} width={1280} height={640}/>
                </div>
            )
        }
    
}

