import { useEffect, useState } from "react"






const useCourses =()=>{

    const [courses , setCourses] = useState([]);

    useEffect(()=>{
        fetch('https://peaceful-spire-22388.herokuapp.com/courses')
        .then(res=>res.json())
        .then(data=>setCourses(data))

    },[])

    return[courses , setCourses]


}

export default useCourses;