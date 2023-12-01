import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './index.scss'


const Detail = () => {
  let { id } = useParams();

  const [detail, setDetail] = useState(null);

  useEffect(() => {
    getDetail();
  }, []);

  async function getDetail() {
    const data = await fetch(`https://fakestoreapi.com/products/` + id);
    const res = await data.json();
    setDetail(res);
  }

  return (
    <div className='detail'>
      {detail &&
      <ul className="cardList" key={detail.id}>
          <img src={detail.image} alt="" />
          <i className="fa-regular fa-heart"></i>
          <li className="title">Title: {detail.title}</li>
          <li className="price">Price: {detail.price}</li>
          <li className="desc">
            Description: {detail.description.slice(0,40)}
          </li>
          <li className="category">{detail.category}</li>
        </ul>
    }
    </div>
  )
}

export default Detail