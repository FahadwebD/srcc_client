import { useEffect, useState } from "react"






const useNotice =()=>{

    const [notices , setNotices] = useState([]);

    useEffect(()=>{
        fetch('https://peaceful-spire-22388.herokuapp.com/notice')
        .then(res=>res.json())
        .then(data=>setNotices(data.reverse()))

    },[])
 

    
    return[notices , setNotices ]

 
}

export default useNotice;