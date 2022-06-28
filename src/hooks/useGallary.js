import { useEffect, useState } from "react"






const useGallary =()=>{

    const [staffs , setStaffs] = useState([]);

    useEffect(()=>{
        fetch('https://peaceful-spire-22388.herokuapp.com/gallary')
        .then(res=>res.json())
        .then(data=>setStaffs(data.reverse()))

    },[])
 

    
    return[staffs , setStaffs ]

 
}

export default useGallary;