import { useEffect, useState } from "react"






const useCourses =()=>{

    const [courses , setCourses] = useState([]);

    useEffect(()=>{
        fetch('https://serversrcnc.vercel.app/courses')
        .then(res=>res.json())
        .then(data=>setCourses(data))

    },[])

    return[courses , setCourses]


}

export default useCourses;