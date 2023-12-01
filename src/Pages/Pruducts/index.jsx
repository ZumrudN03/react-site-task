import React, { useEffect, useState } from 'react'
import './index.scss'
import { Link } from 'react-router-dom';

const Products = () => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        getItem();
    }, [])

    async function getItem() {
        const data = await fetch("https://jsonplaceholder.typicode.com/users")
        const res = await data.json();
        setItem(res)
    }

    return (
        <div className='products'>
            <div className="productsCard">
                {item.map((item) => (
                    <Link to={"/productdetail/" + item.id}>
                    <ul className='productsCardList' key={item.id}>
                        <li className='cardId'>ID: {item.id}</li>
                        <li className='cardName'>Name: {item.name}</li>
                        <li className='cardUserName'>Username: {item.username}</li>
                        <li className='cardEmail'>Email: {item.email}</li>
                        <li className='cardPhone'>Phone: {item.phone}</li>
                    </ul>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Products