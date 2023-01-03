import { useEffect, useState } from "react";



const useFooter = () =>{

    const [footerInfo , setFooterInfo] = useState('')



    useEffect(() =>{
  
      fetch('hthttps://serversrcnc-production.up.railway.app/footerinfo')
      .then(res=>res.json())
      .then(data=>setFooterInfo(data))
    }, []);
 
return[footerInfo , setFooterInfo]

}

export default useFooter;