import { useEffect, useState } from "react";



const useFooter = () =>{

    const [footerInfo , setFooterInfo] = useState('')



    useEffect(() =>{
  
      fetch('hthttps://peaceful-spire-22388.herokuapp.com/footerinfo')
      .then(res=>res.json())
      .then(data=>setFooterInfo(data))
    }, []);
 
return[footerInfo , setFooterInfo]

}

export default useFooter;