import { useEffect, useState } from "react"






const useWelcome =()=>{

 
    const [welcome , setWelcome] = useState([]);



    
    useEffect(()=>{
        fetch('https://peaceful-spire-22388.herokuapp.com/welcome')
        .then(res=>res.json())
        .then(data=>setWelcome(data))

    },[])

    return[welcome , setWelcome]


}

export default useWelcome;