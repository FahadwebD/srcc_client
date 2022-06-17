import { useEffect, useState } from "react"






const useStaff =()=>{

    const [saffs , setStaffs] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/staff')
        .then(res=>res.json())
        .then(data=>setStaffs(data))

    },[])

    return[saffs , setStaffs]


}

export default useStaff;