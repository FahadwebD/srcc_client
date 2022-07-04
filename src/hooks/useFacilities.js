import { useEffect, useState } from "react"






const useFacilities =()=>{

    const [facilities , setFacilities] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/facilities')
        .then(res=>res.json())
        .then(data=>setFacilities(data.reverse()))

    },[])
 

    
    return[facilities , setFacilities]

 
}

export default useFacilities;