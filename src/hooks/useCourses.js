import { useEffect, useState } from "react"






const useCourses =()=>{

    const [courses , setCurses] = useState([]);

    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/FahadwebD/datasrc/main/data.json')
        .then(res=>res.json())
        .then(data=>setCurses(data))

    },[])

    return[courses , setCurses]


}

export default useCourses;