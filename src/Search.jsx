// http://localhost:5173/
import React, { useEffect, useState } from 'react'
import './Search.css'
function Search() {
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setData(data);
                setfilterData(data);
            })

            .catch(err => console.log(err));
    }, [])
    const [data, setData] = useState([])
    const [filterData, setfilterData] = useState([])
    const handleFilter = (value) => {
        const res = filterData.filter(f => f.name.toLowerCase().includes(value))
        setData(res)
    }
    return (
        <div className='search-top'>
            <div className='search'>
                <input type='text' placeholder='Search Here...' onChange={e => handleFilter(e.target.value)} />
            </div>
            <div className='search-result'>
                {data.map((d, i) => (
                    <div key={i}>
                        {d.name}
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Search