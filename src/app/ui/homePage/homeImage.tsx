
import Image from "next/image"


export function HomeImage () {
       
            return(
                <div className="flex m-10">
            <Image key={'api'} src={'/api'} alt ={'/api'} width={1280} height={640}/>
                </div>
            )
        
    
}

