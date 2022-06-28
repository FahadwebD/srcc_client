import { useEffect, useState } from "react"






const useCarousel =()=>{

    const [carousel , setCarousel] = useState([]);

    useEffect(()=>{
        fetch('https://peaceful-spire-22388.herokuapp.com/banner')
        .then(res=>res.json())
        .then(data=>setCarousel(data.reverse()))

    },[])

    return[carousel , setCarousel]


}

export default useCarousel;