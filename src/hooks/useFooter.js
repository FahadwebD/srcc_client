import { useEffect, useState } from "react";



const useFooter = () =>{

    const [footerInfo , setFooterInfo] = useState('')



    useEffect(() =>{
  
      fetch('hthttp://localhost:5000/footerinfo')
      .then(res=>res.json())
      .then(data=>setFooterInfo(data))
    }, []);
 
return[footerInfo , setFooterInfo]

}

export default useFooter;