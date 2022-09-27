import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Rating from './Rating';
import './Product.css';
import ContentLoader from 'react-content-loader';

export default function Product(props) {
  const { product } = props;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => {
      clearTimeout(t);
    };
  }, []);

  return (
    <>
      {loading ? (
          <ContentLoader className='loader' speed={2} width={300} height={450}>
            <rect x="30" y="0" rx="5" ry="5" width="230" height="200" />
            <rect x="0" y="207" rx="4" ry="4" width="200" height="13" />
            <rect x="220" y="207" rx="4" ry="4" width="20" height="13" />
            <rect x="0" y="230" rx="4" ry="4" width="200" height="13" />
            <rect x="220" y="250" rx="50" ry="50" width="20" height="13" />
          </ContentLoader>
      ) : (
        <div key={product._id} className="card">
          <Link to={`/product/${product._id}`}>
            <img className="medium" src={product.image} alt={product.name} />
          </Link>
          <div className="cardBody">
            <Link to={`/product/${product._id}`}>
              <h2>{product.name}</h2>
            </Link>
            <Rating
              rating={product.rating}
              numReviews={product.numReviews}
            ></Rating>
            <div className="row">
              <div className="price">${product.price}</div>
              <div>
                {!product.seller.isAdmin && (
                  <Link to={`/seller/${product.seller._id}`}>
                    {product.seller.seller.name}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
