import { useEffect, useState } from "react"






const useGallary =()=>{

    const [staffs , setStaffs] = useState([]);

    useEffect(()=>{
        fetch('https://serversrcnc-production-97a5.up.railway.app/gallary')
        .then(res=>res.json())
        .then(data=>setStaffs(data.reverse()))

    },[])
 

    
    return[staffs , setStaffs ]

 
}

export default useGallary;