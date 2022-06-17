import { useEffect, useState } from "react"






const useCourses =()=>{

    const [courses , setCourses] = useState([]);

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/FahadwebD/datasrc/main/data.json')
        .then(res=>res.json())
        .then(data=>setCourses(data))

    },[])

    return[courses , setCourses]


}

export default useCourses;