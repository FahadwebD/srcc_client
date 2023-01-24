import { useEffect, useState } from "react"






const useCourses =()=>{

    const [courses , setCourses] = useState([]);

    useEffect(()=>{
        fetch('https://serversrcnc-production-97a5.up.railway.app/courses')
        .then(res=>res.json())
        .then(data=>setCourses(data))

    },[])

    return[courses , setCourses]


}

export default useCourses;