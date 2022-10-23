import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { listProducts } from '../actions/productActions';
import './SearchScreen.css';
import Product from '../elements/Product';
import LoadingBox from '../elements/LoadingBox';
import MessageBox from '../elements/MessageBox';


export default function RecommendScreen() {
  const navigate = useNavigate();
  const {
    category = 'all',
    order = 'newest',
    pageNumber = 1,
  } = useParams();
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;


  useEffect(() => {
    dispatch(
      listProducts({
        pageNumber,
        category: category !== 'all' ? category : '',
        order,
      })
    );
  }, [category, dispatch, order, pageNumber]);

  const getFilterUrl = (filter) => {
    const filterPage = filter.page || pageNumber;
    const filterCategory = filter.category || category;
    const sortOrder = filter.order || order;
    return `/recommend/category/${filterCategory}/order/${sortOrder}/pageNumber/${filterPage}`;
  };

  return (
    <div>
      <div className="row">
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div>{products.length} Results</div>
        )}
        <div>
          Sort by{' '}
          <select
            value={order}
            onChange={(e) => {
              navigate(getFilterUrl({ order: e.target.value }));
            }}
          >
            <option value="newest">Newest Arrivals</option>
            <option value="lowest">Price: Low to High</option>
            <option value="highest">Price: High to Low</option>
            <option value="toprated">Avg. Customer Review</option>
          </select>
        </div>
      </div>   
        <div className="col-3">
          {loading ? (
            <LoadingBox></LoadingBox>
          ) : error ? (
            <MessageBox variant="danger">{error}</MessageBox>
          ) : (
            <>
              {products.length === 0 && (
                <MessageBox>No Product Found</MessageBox>
              )}
              <div className="row center">
                {products.map((product) => (
                  <Product key={product._id} product={product}></Product>
                ))}
              </div>
              <div className="row center pagination">
                <svg
                  viewBox="0 0 32 32"
                  className="f-svg-icon-root f-svg-icon-color-inherit f-svg-icon-direction-left"
                  style={{ fontSize: '30px' }}
                >
                  <path d="M25.849 19.151a1.2 1.2 0 01-1.6 1.785l-.098-.087L16 12.697l-8.151 8.152a1.2 1.2 0 01-1.6.087l-.098-.087a1.2 1.2 0 01-.087-1.6l.087-.098 9-9a1.2 1.2 0 011.6-.087l.098.087 9 9z"></path>
                </svg>
                {[...Array(pages).keys()].map((x) => (
                  <Link
                    className={x + 1 === page ? 'active' : ''}
                    key={x + 1}
                    to={getFilterUrl({ page: x + 1 })}
                  >
                    {x + 1}
                  </Link>
                ))}
                . . .{' '}
                <svg
                  viewBox="0 0 32 32"
                  className="f-svg-icon-root f-svg-icon-color-inherit f-svg-icon-direction-rightt"
                  style={{ fontSize: '30px' }}
                >
                  <path d="M25.849 19.151a1.2 1.2 0 01-1.6 1.785l-.098-.087L16 12.697l-8.151 8.152a1.2 1.2 0 01-1.6.087l-.098-.087a1.2 1.2 0 01-.087-1.6l.087-.098 9-9a1.2 1.2 0 011.6-.087l.098.087 9 9z"></path>
                </svg>
              </div>
            </>
          )}
        </div>
      
    </div>
  );
}
