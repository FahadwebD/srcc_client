

import { useEffect, useState } from "react"






const useInfo =()=>{

    const [information , setInformation] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/info')
        .then(res=>res.json())
        .then(data=>setInformation(data.reverse()))

    },[])
 

    
    return[information , setInformation ]

 
}

export default useInfo;