import { useEffect, useState } from "react"






const useNumbers =()=>{

    const [numbers , setNumbers] = useState([]);
    const [welcome , setWelcome] = useState([]);


    useEffect(()=>{
        fetch('https://serversrcnc-production-97a5.up.railway.app/numbers')
        .then(res=>res.json())
        .then(data=>setNumbers(data))

    },[])

    
    useEffect(()=>{
        fetch('https://serversrcnc-production-97a5.up.railway.app/welcome')
        .then(res=>res.json())
        .then(data=>setWelcome(data))

    },[])

    return[numbers , setNumbers ,welcome , setWelcome]


}

export default useNumbers;