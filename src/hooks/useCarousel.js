import { useEffect, useState } from "react"






const useCarousel =()=>{

    const [carousel , setCarousel] = useState([]);

    useEffect(()=>{
        fetch('https://serversrcnc-production-97a5.up.railway.app/banner')
        .then(res=>res.json())
        .then(data=>setCarousel(data.reverse()))

    },[])

    return[carousel , setCarousel]


}

export default useCarousel;