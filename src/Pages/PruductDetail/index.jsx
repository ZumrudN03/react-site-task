import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './index.scss'

const ProductDetail = () => {
    let { id } = useParams();
    const [productDetail, setProductDetails] = useState([]);

    useEffect(() => {
        getProductDetails();
    }, [])

    async function getProductDetails() {
        const data = await fetch(`https://jsonplaceholder.typicode.com/users/` + id);
        const res = await data.json();
        setProductDetails(res);
    }

    return (
        <div className='productDetail'>
            <ul className="cardList" key={productDetail.id}>
                <li className='cardId'>ID: {productDetail.id}</li>
                <li className='cardName'>Name: {productDetail.name}</li>
                <li className='cardUserName'>Username: {productDetail.username}</li>
                <li className='cardEmail'>Email: {productDetail.email}</li>
                <li className='cardPhone'>Phone: {productDetail.phone}</li>
            </ul>
        </div>
    )
}

export default ProductDetail