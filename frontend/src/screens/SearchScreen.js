import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { listProducts } from '../actions/productActions';
import './SearchScreen.css';
import Product from '../elements/Product';
import LoadingBox from '../elements/LoadingBox';
import MessageBox from '../elements/MessageBox';
import { prices, ratings } from '../utils';
import Rating from '../elements/Rating';

export default function SearchScreen() {
  const navigate = useNavigate();
  const {
    name = 'all',
    category = 'all',
    min = 0,
    max = 0,
    rating = 0,
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
        name: name !== 'all' ? name : '',
        category: category !== 'all' ? category : '',
        min,
        max,
        rating,
        order,
      })
    );
  }, [category, dispatch, max, min, name, order, rating, pageNumber]);

  const getFilterUrl = (filter) => {
    const filterPage = filter.page || pageNumber;
    const filterCategory = filter.category || category;
    const filterName = filter.name || name;
    const filterRating = filter.rating || rating;
    const sortOrder = filter.order || order;
    const filterMin = filter.min ? filter.min : filter.min === 0 ? 0 : min;
    const filterMax = filter.max ? filter.max : filter.max === 0 ? 0 : max;
    return `/search/category/${filterCategory}/name/${filterName}/min/${filterMin}/max/${filterMax}/rating/${filterRating}/order/${sortOrder}/pageNumber/${filterPage}`;
  };

  return (
    <div>
      <div id="app" className="root ltr">
        <div className="row f-container-root">
          <div className="container">
            <aside className="sidebar">
              <div>
                <p className="sidebar-title f-typography-root f-typography-body f-color-text-primary f-typography-weight-normal f-typography-margin-none">
                  Hot Categories
                </p>
                {'jins' === category ? (
                  <Link
                    to="/search/category/jins"
                    className="fd-a sidebar-category"
                  >
                    <img
                      data-cfg="{w:100,fit:1}"
                      src="../../images/w.jpg"
                      alt="w"
                    />
                    <p className="f-typography-root f-typography-body2 f-color-text-primary f-typography-weight-normal f-typography-margin-none">
                      Women Recommend
                    </p>
                  </Link>
                ) : '' || 'hot' === category ? (
                  <>
                    <Link
                      to="/search/category/hot"
                      className="fd-a sidebar-category"
                    >
                      <img
                        data-cfg="{w:100,fit:1}"
                        src="../../images/w1.jpg"
                        alt="w1"
                      />
                      <p className="f-typography-root f-typography-body2 f-color-text-primary f-typography-weight-normal f-typography-margin-none">
                        Underwear
                      </p>
                    </Link>
                    <Link
                      to="/search/category/0~3years"
                      className="fd-a sidebar-category"
                    >
                      <img
                        data-cfg="{w:100,fit:1}"
                        src="../../images/w2.jpg"
                        alt="w1"
                      />
                      <p className="f-typography-root f-typography-body2 f-color-text-primary f-typography-weight-normal f-typography-margin-none">
                        Swimming Clothing
                      </p>
                    </Link>
                  </>
                ) : (
                  ''
                )}
              </div>
              <div className="top">
                <h3>Price</h3>
                <ul>
                  {prices.map((p) => (
                    <li key={p.name}>
                      <Link
                        to={getFilterUrl({ min: p.min, max: p.max })}
                        className={
                          `${p.min}-${p.max}` === `${min}-${max}`
                            ? 'active'
                            : ''
                        }
                      >
                        {p.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Avg. Customer Review</h3>
                <ul>
                  <li>
                    <Link
                      className={'all' === rating ? 'active' : ''}
                      to={getFilterUrl({ rating: 'all' })}
                    >
                      Any
                    </Link>
                  </li>
                  {ratings.map((r) => (
                    <li key={r.name}>
                      <Link
                        to={getFilterUrl({ rating: r.rating })}
                        className={
                          `${r.rating}` === `${rating}` ? 'active' : ''
                        }
                      >
                        <Rating caption={' & up'} rating={r.rating}></Rating>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
            <main className="mainn">
              <div className="row ">
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
              <div className="fd-wall">
                <div className="fd-wall-container">
                  <div
                    className="fd-wall-column"
                    style={{ flexBasis: '1190px' }}
                  >
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
                            <Product
                              key={product._id}
                              product={product}
                            ></Product>
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
              </div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}
