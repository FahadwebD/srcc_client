import { useEffect, useState } from "react"






const useStaff =()=>{

    const [staffs , setStaffs] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/staff')
        .then(res=>res.json())
        .then(data=>setStaffs(data))

    },[])

    return[staffs , setStaffs]


}

export default useStaff;