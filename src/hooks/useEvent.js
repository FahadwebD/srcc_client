import { useEffect, useState } from "react"






const useEvent=()=>{

    const [staffs , setStaffs] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/event')
        .then(res=>res.json())
        .then(data=>setStaffs(data.reverse()))

    },[])

    return[staffs , setStaffs]


}

export default useEvent;