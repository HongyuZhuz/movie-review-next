import Image from "next/image"


export async function HomeImage () {
    const signedUrl = await getSignedUrl();
    
    
    return(
        <div className="flex m-10">
            <Image key={"home image"} src={signedUrl} alt ="missing" width={1280} height={640}/>
            <div>{signedUrl}</div>
        </div>
    )
}

async function getSignedUrl() {
    const response = await fetch(`${process.env.ROOT_URL}/api`);
    const data = await response.json();
    return data.signedUrl;
  }