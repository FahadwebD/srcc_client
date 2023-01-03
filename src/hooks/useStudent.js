

import { useEffect, useState } from "react"






const useStudent =()=>{

    const [student , setStudent] = useState([]);

useEffect(()=>{
    fetch('https://serversrcnc.vercel.app/student')
    .then(res=>res.json())
    .then(data=>setStudent(data))

},[])

    return[student , setStudent]


}

export default useStudent;