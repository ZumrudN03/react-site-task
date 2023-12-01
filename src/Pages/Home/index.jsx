import React, { useEffect, useState } from 'react'
import './index.scss'
import { Link } from 'react-router-dom';


const Home = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        getPruduct();
    }, []);

    async function getPruduct() {
        const data = await fetch("https://fakestoreapi.com/products");
        const res = await data.json();
        setProduct(res);
    }
    return (
        <div className="store">
            <div className="storeCard">
                {product.map((x) => (
                    // <Link to={"/detail/" + x.id}>
                        <ul  className="cardList" key={x.id}>
                            <Link to={"/detail/" + x.id}>
                            <img src={x.image} alt="" />
                          
                        
                            <li className="title">Title: {x.title}</li>
                            <li className="price">Price: {x.price}</li>
                            </Link>
                            <i className="fa-regular fa-heart"></i>
                            <li className="desc">
                                Description: {x.description.slice(0, 40)}
                            </li>
                            <li className="category">{x.category}</li>

                        </ul>
                    // </Link>
                ))}
            </div>
        </div>)
}

export default Home