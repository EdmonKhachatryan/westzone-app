import React, { useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Product from '../elements/Product';
import LoadingBox from '../elements/LoadingBox';
import MessageBox from '../elements/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../actions/productActions';
import { listTopSellers } from '../actions/userActions';
import { Link, useParams } from 'react-router-dom';
import './HomeScreen.css';
import TypewriterEffect from '../elements/TypewriterEffect';

export default function HomeScreen() {
  const { category = 'sample category' } = useParams();

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const userTopSellersList = useSelector((state) => state.userTopSellersList);
  const {
    loading: loadingSellers,
    error: errorSellers,
    users: sellers,
  } = userTopSellersList;

  useEffect(() => {
    dispatch(
      listProducts({
        category: category !== 'all' ? category : '',
      })
    );
    dispatch(listTopSellers());
  }, [dispatch, category]);

  return (
    <div>
      <h4 className="topseller">
        <TypewriterEffect text={['Top Sellers']} />
      </h4>
      {loadingSellers ? (
        <LoadingBox></LoadingBox>
      ) : errorSellers ? (
        <MessageBox variant="danger">{errorSellers}</MessageBox>
      ) : (
        <>
          {sellers.length === 0 && <MessageBox>No Seller Found</MessageBox>}
          <Carousel showArrows autoPlay showThumbs={false}>
            {sellers.map((seller) => (
              <div key={seller._id}>
                <Link to={`/seller/${seller._id}`}>
                  <img src={seller.seller.logo} alt={seller.seller.name} />
                  <p className="legend">{seller.seller.name}</p>
                </Link>
              </div>
            ))}
          </Carousel>
        </>
      )}
      <h4 className="newarrival">
        <TypewriterEffect text={['New Arrivals']} />
      </h4>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
          <div className="app-main">
            <div className="product-container-root">
              <div
                className="tag-card main-item"
                style={{ padding: '0 15px 10px' }}
              >
                <div className="tag-card-head" style={{ padding: '0.5px' }}>
                  <div className="card-title-and-tags">
                    <svg
                      viewBox="0 0 32 32"
                      className="f-svg-icon-root f-svg-icon-color-inherit f-svg-icon-direction-up"
                      style={{ fontsize: '24px' }}
                    >
                      <g fill="none" fill-rule="evenodd">
                        <circle
                          cx="18.5"
                          cy="19.5"
                          r="9.5"
                          fill="#FEEF43"
                        ></circle>
                        <path
                          fill="#222"
                          fill-rule="nonzero"
                          d="M13.055 3.148c.338 2.262-.29 4.678-1.573 6.972l-.178.31c-.12.204-.243.403-.368.594l-.226.336-.049-.178c-.435-1.478-1.27-2.952-2.554-4.03-.675-.566-1.7-.045-1.64.835l.01.235a17.12 17.12 0 01-.062 1.98c-.14 1.574-.487 2.99-1.078 4.065C1.412 22.208 6.297 30 16.203 30c9.262 0 13.71-6.253 12.654-14.457-.345-2.682-1.283-5.021-2.63-7.013-1.047-1.548-2.103-2.584-2.841-3.122-.72-.526-1.714.08-1.578.96l.042.318c.102.958.008 1.961-.24 2.95l-.063.237-.127-.321c-.793-1.938-1.994-3.605-3.488-5.012-1.343-1.265-2.617-2.062-3.475-2.45a1 1 0 00-1.402 1.058zm-4.687 7.62l.11.251c.366.877.546 1.797.546 2.59 0 1.003.903 1.2 1.494.911.135-.066.248-.15.376-.263a6.67 6.67 0 00.644-.681 16.332 16.332 0 001.69-2.48l.189-.346c.984-1.853 1.6-3.791 1.712-5.727l.007-.197.043.03c.463.333.927.712 1.382 1.14l.26.252c1.715 1.7 2.935 3.803 3.428 6.35l.053.3v.039c.001.217.068.286.57.802l.403.05c.316.033.399.02.518-.058l.088-.063c.132-.088.214-.176.304-.294a4.03 4.03 0 00.304-.481c.242-.436.493-.996.71-1.607l.123-.364c.235-.732.405-1.481.495-2.233l.004-.043.05.06c.238.293.472.608.699.944 1.179 1.744 2 3.79 2.303 6.149C27.787 22.892 24.153 28 16.203 28 7.775 28 3.864 21.761 7.11 15.191c.614-1.116 1.001-2.48 1.205-3.98l.053-.443z"
                        ></path>
                      </g>
                    </svg>
                    <h2 className="card-title">Hot Sale</h2>
                    <div className="tag-list">
                      <Link to="/category/sample category">
                        <button
                          className="toggle-button f-button-root f-button-button f-button-round f-button-small f-button-primary f-toggle-button-root f-toggle-button-round f-toggle-button-contained f-toggle-button-selected"
                          size="small"
                        >
                          <div
                            className={
                              'sample category' === category ? 'active' : ''
                            }
                          >
                            Recommend
                          </div>
                        </button>
                      </Link>
                      <Link to="/category/women">
                        <button
                          className="toggle-button f-button-root f-button-button f-button-round f-button-small f-button-primary f-toggle-button-root f-toggle-button-round f-toggle-button-contained f-toggle-button-selected"
                          size="small"
                        >
                          <div className={'women' === category ? 'active' : ''}>
                            Women
                          </div>
                        </button>
                      </Link>
                      <Link to="/category/0~3years">
                        <button
                          className="toggle-button f-button-root f-button-button f-button-round f-button-small f-button-primary f-toggle-button-root f-toggle-button-round f-toggle-button-contained f-toggle-button-selected"
                          size="small"
                        >
                          <div
                            className={'0~3years' === category ? 'active' : ''}
                          >
                            Beauty
                          </div>
                        </button>
                      </Link>
                      <Link to="/category/jins">
                        <button
                          className="toggle-button f-button-root f-button-button f-button-round f-button-small f-button-primary f-toggle-button-root f-toggle-button-round f-toggle-button-contained f-toggle-button-selected"
                          size="small"
                        >
                          <div className={'jins' === category ? 'active' : ''}>
                            Shoes
                          </div>
                        </button>
                      </Link>
                      <Link to="/category/hot">
                        <button
                          className="toggle-button f-button-root f-button-button f-button-round f-button-small f-button-primary f-toggle-button-root f-toggle-button-round f-toggle-button-contained f-toggle-button-selected"
                          size="small"
                        >
                          <div className={'hot' === category ? 'active' : ''}>
                            Kids&Mom
                          </div>
                        </button>
                      </Link>
                      <Link to="/category/women">
                        <button
                          className="toggle-button f-button-root f-button-button f-button-round f-button-small f-button-primary f-toggle-button-root f-toggle-button-round f-toggle-button-contained f-toggle-button-selected"
                          size="small"
                        >
                          <div className={'women' === category ? 'active' : ''}>
                            Toys & Early education
                          </div>
                        </button>
                      </Link>
                      <Link to="/category/0~3years">
                        <button
                          className="toggle-button f-button-root f-button-button f-button-round f-button-small f-button-primary f-toggle-button-root f-toggle-button-round f-toggle-button-contained f-toggle-button-selected"
                          size="small"
                        >
                          <div
                            className={'0~3years' === category ? 'active' : ''}
                          >
                            Home
                          </div>
                        </button>
                      </Link>
                      <Link to="/category/jins">
                        <button
                          className="toggle-button f-button-root f-button-button f-button-round f-button-small f-button-primary f-toggle-button-root f-toggle-button-round f-toggle-button-contained f-toggle-button-selected"
                          size="small"
                        >
                          <div className={'jins' === category ? 'active' : ''}>
                            Watches & Jewelry
                          </div>
                        </button>
                      </Link>
                      <Link to="/category/hot">
                        <button
                          className="toggle-button f-button-root f-button-button f-button-round f-button-small f-button-primary f-toggle-button-root f-toggle-button-round f-toggle-button-contained f-toggle-button-selected"
                          size="small"
                        >
                          <div className={'hot' === category ? 'active' : ''}>
                            Bags
                          </div>
                        </button>
                      </Link>
                      <Link to="/category/women">
                        <button
                          className="toggle-button f-button-root f-button-button f-button-round f-button-small f-button-primary f-toggle-button-root f-toggle-button-round f-toggle-button-contained f-toggle-button-selected"
                          size="small"
                        >
                          <div className={'women' === category ? 'active' : ''}>
                            Electronics
                          </div>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="fd-wall">
                  <div className="fd-wall-container">
                    <div
                      className="fd-wall-column"
                      style={{ flexBasis: '1190px' }}
                    >
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
                    </div>
                  </div>
                </div>
                <div className="view-more">
                  <Link
                    to={
                      'sample category' === category
                        ? '/recommend/category/sample category'
                        : '' || 'women' === category
                        ? '/search/category/women'
                        : '' || 'jins' === category
                        ? '/search/category/jins'
                        : ''
                    }
                    className="fd-a"
                  >
                    <div className="f-button-root-view f-button-button f-button-round f-button-primary">
                      {' '}
                      View More{' '}
                      <svg
                        viewBox="0 0 32 32"
                        className="f-svg-icon-root f-svg-icon-color-inherit f-svg-icon-direction-right"
                        style={{ fontSize: 'small' }}
                      >
                        <path d="M25.849 19.151a1.2 1.2 0 01-1.6 1.785l-.098-.087L16 12.697l-8.151 8.152a1.2 1.2 0 01-1.6.087l-.098-.087a1.2 1.2 0 01-.087-1.6l.087-.098 9-9a1.2 1.2 0 011.6-.087l.098.087 9 9z"></path>
                      </svg>
                      <svg
                        viewBox="0 0 32 32"
                        className="f-svg-icon-root f-svg-icon-color-inherit f-svg-icon-direction-right"
                        style={{ fontSize: 'small' }}
                      >
                        <path d="M25.849 19.151a1.2 1.2 0 01-1.6 1.785l-.098-.087L16 12.697l-8.151 8.152a1.2 1.2 0 01-1.6.087l-.098-.087a1.2 1.2 0 01-.087-1.6l.087-.098 9-9a1.2 1.2 0 011.6-.087l.098.087 9 9z"></path>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
