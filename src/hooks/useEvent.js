import { useEffect, useState } from "react"






const useEvent=()=>{

    const [staffs , setStaffs] = useState([]);

    useEffect(()=>{
        fetch('https://serversrcnc-production-97a5.up.railway.app/event')
        .then(res=>res.json())
        .then(data=>setStaffs(data.reverse()))

    },[])

    return[staffs , setStaffs]


}

export default useEvent;