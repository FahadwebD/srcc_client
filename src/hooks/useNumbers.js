import { useEffect, useState } from "react"






const useNumbers =()=>{

    const [numbers , setNumbers] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/numbers')
        .then(res=>res.json())
        .then(data=>setNumbers(data))

    },[])

    return[numbers , setNumbers]


}

export default useNumbers;