import { useEffect, useState } from "react"






const useNumbers =()=>{

    const [numbers , setNumbers] = useState([]);
    const [welcome , setWelcome] = useState([]);


    useEffect(()=>{
        fetch('https://serversrcnc.vercel.app/numbers')
        .then(res=>res.json())
        .then(data=>setNumbers(data))

    },[])

    
    useEffect(()=>{
        fetch('https://serversrcnc.vercel.app/welcome')
        .then(res=>res.json())
        .then(data=>setWelcome(data))

    },[])

    return[numbers , setNumbers ,welcome , setWelcome]


}

export default useNumbers;