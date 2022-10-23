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
    }, 500);
    return () => {
      clearTimeout(t);
    };
  }, []);

  return (
    <>
      {loading ? (
        <ContentLoader className="loader" speed={2} width={300} height={450}>
          <rect x="30" y="0" rx="5" ry="5" width="230" height="200" />
          <rect x="0" y="207" rx="4" ry="4" width="200" height="13" />
          <rect x="220" y="207" rx="4" ry="4" width="20" height="13" />
          <rect x="0" y="230" rx="4" ry="4" width="200" height="13" />
          <rect x="220" y="250" rx="50" ry="50" width="20" height="13" />
        </ContentLoader>
      ) : (
        <div
          key={product._id}
          className="fd-a item-root fd-wall-item"
          target="_blank"
        >
          <div className="item-image-wrap">
            <Link to={`/product/${product._id}`}>
              <img
                data-cfg="{w:450, fit:1, format: 'jpg'}"
                className="item-image"
                src={product.image}
                alt={product.name}
              />
              <p
                aria-hidden="true"
                dir="auto"
                className="item-discount-tag f-typography-root f-typography-helper f-color-text-prim"
              >
                -45%
              </p>
            </Link>
          </div>
          <div className="item-body">
            <Link to={`/product/${product._id}`}>
              <p
                title="five-claw button installation tool set nail-free and seam-free universal female buckle installation pliers button pliers dark"
                className="f-typography-root f-typography-body2 f-color-text-primary item-title"
              >
                {product.name}
              </p>
            </Link>
            <Rating
              rating={product.rating}
              numReviews={product.numReviews}
            ></Rating>
            <div className="row">
              <div
                className="item-price"
                aria-label="23.81 AED instead of 35.45 AED, -33%"
              >
                <p
                  aria-hidden="true"
                  className="item-price-discount f-typography-root f-typography-title f-color-red"
                >
                  {product.price}$
                </p>
                <del
                  aria-hidden="true"
                  className="item-price-original f-typography-root f-typography-body2 f-color-text-helper"
                >
                  18.70
                </del>
              </div>
              <div>
                <Link to={`/seller/${product.seller._id}`}>
                  {product.seller.seller.name}
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
