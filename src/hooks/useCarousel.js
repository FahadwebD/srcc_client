import { useEffect, useState } from "react"






const useCarousel =()=>{

    const [carousel , setCarousel] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/banner')
        .then(res=>res.json())
        .then(data=>setCarousel(data))

    },[])

    return[carousel , setCarousel]


}

export default useCarousel;