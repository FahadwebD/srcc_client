

import { useEffect, useState } from "react"






const useInfo =()=>{

    const [information , setInformation] = useState([]);

    useEffect(()=>{
        fetch('https://peaceful-spire-22388.herokuapp.com/info')
        .then(res=>res.json())
        .then(data=>setInformation(data.reverse()))

    },[])
 

    
    return[information , setInformation ]

 
}

export default useInfo;