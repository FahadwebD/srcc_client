import { useEffect, useState } from "react"






const useNotice =()=>{

    const [staffs , setStaffs] = useState([]);

    useEffect(()=>{
        fetch('https://peaceful-spire-22388.herokuapp.com/notice')
        .then(res=>res.json())
        .then(data=>setStaffs(data.reverse()))

    },[])
 

    
    return[staffs , setStaffs ]

 
}

export default useNotice;