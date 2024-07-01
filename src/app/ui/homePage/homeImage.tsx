import Image from "next/image"


export async function HomeImage () {
    
        const signedUrl = await getSignedUrl();
        
        if(signedUrl===""){
            return(<div>missing image</div>)
        }else{
            return(
                <div className="flex m-10">
            <Image key={"home image"} src={signedUrl} alt ={signedUrl} width={1280} height={640}/>
                </div>
            )
        }
    
}

async function getSignedUrl() {
    try{
        const response = await fetch(`${process.env.ROOT_URL}/api`,{
            headers: { 'Cache-Control': 'no-store' },
          });
        const data = await response.json();
        return data.signedUrl;
    }catch(e)
    {
        return ("");
    }
    
  }