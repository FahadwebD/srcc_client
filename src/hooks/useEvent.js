import { useEffect, useState } from "react"






const useEvent=()=>{

    const [staffs , setStaffs] = useState([]);

    useEffect(()=>{
        fetch('https://peaceful-spire-22388.herokuapp.com/event')
        .then(res=>res.json())
        .then(data=>setStaffs(data.reverse()))

    },[])

    return[staffs , setStaffs]


}

export default useEvent;