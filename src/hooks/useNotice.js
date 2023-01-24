import { useEffect, useState } from "react"






const useNotice =()=>{

    const [notices , setNotices] = useState([]);

    useEffect(()=>{
        fetch('https://serversrcnc-production-97a5.up.railway.app/notice')
        .then(res=>res.json())
        .then(data=>setNotices(data.reverse()))

    },[])
 

    
    return[notices , setNotices ]

 
}

export default useNotice;