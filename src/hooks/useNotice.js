import { useEffect, useState } from "react"






const useNotice =()=>{

    const [staffs , setStaffs] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/notice')
        .then(res=>res.json())
        .then(data=>setStaffs(data.reverse()))

    },[])
 

    
    return[staffs , setStaffs ]

 
}

export default useNotice;