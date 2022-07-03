

import { useEffect, useState } from "react"






const useStudent =()=>{

    const [student , setStudent] = useState([]);

useEffect(()=>{
    fetch('https://peaceful-spire-22388.herokuapp.com/student')
    .then(res=>res.json())
    .then(data=>setStudent(data))

},[])

    return[student , setStudent]


}

export default useStudent;