import { useEffect, useState } from "react"






const useWelcome =()=>{

 
    const [welcome , setWelcome] = useState([]);



    
    useEffect(()=>{
        fetch('https://serversrcnc.vercel.app/welcome')
        .then(res=>res.json())
        .then(data=>setWelcome(data))

    },[])

    return[welcome , setWelcome]


}

export default useWelcome;