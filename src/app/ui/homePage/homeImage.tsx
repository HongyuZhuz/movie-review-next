'use client'
import Image from "next/image"
import { useEffect, useState } from "react";


export async function HomeImage () {
    const [imageLink,setImageLink] = useState("");


    async function getSignedUrl() {
        try{
            const response = await fetch(`${process.env.ROOT_URL}/api`);
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
    
        const signedUrl = await getSignedUrl();
        
        if(imageLink===""){
            return(<div>missing image</div>)
        }else{
            return(
                <div className="flex m-10">
            <Image key={imageLink} src={imageLink} alt ={imageLink} width={1280} height={640}/>
                </div>
            )
        }
    
}

