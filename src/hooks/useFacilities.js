import { useEffect, useState } from "react"






const useFacilities =()=>{

    const [facilities , setFacilities] = useState([]);

    useEffect(()=>{
        fetch('https://peaceful-spire-22388.herokuapp.com/facilities')
        .then(res=>res.json())
        .then(data=>setFacilities(data.reverse()))

    },[])
 

    
    return[facilities , setFacilities]

 
}

export default useFacilities;