import { useEffect, useState } from "react"






const useNumbers =()=>{

    const [numbers , setNumbers] = useState([]);
    const [welcome , setWelcome] = useState([]);


    useEffect(()=>{
        fetch('https://peaceful-spire-22388.herokuapp.com/numbers')
        .then(res=>res.json())
        .then(data=>setNumbers(data))

    },[])

    
    useEffect(()=>{
        fetch('https://peaceful-spire-22388.herokuapp.com/welcome')
        .then(res=>res.json())
        .then(data=>setWelcome(data))

    },[])

    return[numbers , setNumbers ,welcome , setWelcome]


}

export default useNumbers;