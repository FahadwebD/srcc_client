import { useEffect, useState } from "react"






const useWelcome =()=>{

 
    const [welcome , setWelcome] = useState([]);



    
    useEffect(()=>{
        fetch('http://localhost:5000/welcome')
        .then(res=>res.json())
        .then(data=>setWelcome(data))

    },[])

    return[welcome , setWelcome]


}

export default useWelcome;