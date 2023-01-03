

import { useEffect, useState } from "react"






const useInfo =()=>{

    const [information , setInformation] = useState([]);

    useEffect(()=>{
        fetch('https://serversrcnc.vercel.app/info')
        .then(res=>res.json())
        .then(data=>setInformation(data.reverse()))

    },[])
 

    
    return[information , setInformation ]

 
}

export default useInfo;