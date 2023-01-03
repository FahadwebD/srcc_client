import React, { useEffect, useState } from 'react';
import StudentProfile from './StudentProfile';
import './Students.css'
const AllStudents = () => {

    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const [students, setStudents] = useState([]);
    const [displayProducts, setDisplayProducts] = useState([]);
    useEffect( () =>{
        fetch(`https://serversrcnc-production.up.railway.app/student/home?page=${page}&size=${size}`)
        .then(res => res.json())
        .then(data => {
        setStudents(data)
        setDisplayProducts(data)});
    }, [page, size]);

    useEffect( () =>{
        fetch('https://serversrcnc-production.up.railway.app/studentCount')
        .then(res => res.json())
        .then(data =>{
            const count = data.count;
            const pages = Math.ceil(count/10);
            setPageCount(pages);
        })
    }, [])

    const handleSearch = event => {
        const searchText = event.target.value;

        const matchedProducts = students.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));

        setDisplayProducts(matchedProducts);
    }
    return (
        <div>
            <div className="search-container">
                <input
                    type="text"
                    onChange={handleSearch}
                    placeholder="Search Student By Name" />
            </div>
            <div className="products-container">
                {
                    displayProducts.map(product=><StudentProfile 
                        key={product._id}
                        product={product}
                       
                        ></StudentProfile>)
                }
                 </div>
                <div className='pagination'>
                    {
                        [...Array(pageCount).keys()]
                        .map(number => <button
                            className={page=== number ? 'selected': ''}
                            onClick={() => setPage(number)}
                        >{number + 1}</button>)
                    }
                    
                    <select onChange={e => setSize(e.target.value)}>
                        <option value="5">5</option>
                        <option value="10" selected>10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>
           
        </div>
    );
};

export default AllStudents;