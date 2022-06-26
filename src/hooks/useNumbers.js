import { useEffect, useState } from "react"






const useNumbers =()=>{

    const [numbers , setNumbers] = useState([]);
    const [welcome , setWelcome] = useState([]);


    useEffect(()=>{
        fetch('http://localhost:5000/numbers')
        .then(res=>res.json())
        .then(data=>setNumbers(data))

    },[])

    
    useEffect(()=>{
        fetch('http://localhost:5000/welcome')
        .then(res=>res.json())
        .then(data=>setWelcome(data))

    },[])

    return[numbers , setNumbers ,welcome , setWelcome]


}

export default useNumbers;