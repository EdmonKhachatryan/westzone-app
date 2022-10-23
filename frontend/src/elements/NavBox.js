import React from 'react';
import { Link } from 'react-router-dom';
import './NavBox.css';

export default function NavBox() {
  return (
    <div className="category-nav-root">
      <div className="nav">
        <div className="dropdown-nav">
          <Link to="/search/category/jins" className="fd-a nav-item">
            Recommend
          </Link>
          <ul className="dropdown-content-nav">
            <li>
              <Link to="/search/category/hot" className="title">
                Hot
              </Link>
            </li>
            <li className="nav-item-1">
              <Link to="/search/category/0~3years">0 ~ 3 Years</Link>
            </li>
            <li className="nav-item-2">
              <Link to="/search/category/jins">Jins</Link>
            </li>
            <li className="nav-item-3">
              <Link to="/search/category/sample category">Shose</Link>
            </li>
          </ul>
        </div>
        <div className="dropdown-nav">
          <Link to="/search/category/sample category" className="fd-a nav-item">
            Women
          </Link>
          <ul className="dropdown-content-nav">
            <li>
              <Link to="/search/category/hot" className="title">
                Hot
              </Link>
            </li>
            <li className="nav-item-1">
              <Link to="/search/category/0~3years">0 ~ 3 Years</Link>
            </li>
          </ul>
        </div>
        <div className="dropdown-nav">
          <Link to="/search/category/sample category" className="fd-a nav-item">
            Beauty
          </Link>
          <ul className="dropdown-content-nav">
            <li>
              <Link to="/search/category/hot" className="title">
                Hot
              </Link>
            </li>
            <li className="nav-item-1">
              <Link to="/search/category/0~3years">0 ~ 3 Years</Link>
            </li>
          </ul>
        </div>
        <div className="dropdown-nav">
          <Link to="/search/category/sample category" className="fd-a nav-item">
            Shoes
          </Link>
          <ul className="dropdown-content-nav">
            <li>
              <Link to="/search/category/hot" className="title">
                Hot
              </Link>
            </li>
            <li className="nav-item-1">
              <Link to="/search/category/0~3years">0 ~ 3 Years</Link>
            </li>
          </ul>
        </div>
        <div className="dropdown-nav">
          <Link to="/search/category/sample category" className="fd-a nav-item">
            Kids&Mom
          </Link>
          <ul className="dropdown-content-nav">
            <li>
              <Link to="/search/category/hot" className="title">
                Hot
              </Link>
            </li>
            <li className="nav-item-1">
              <Link to="/search/category/0~3years">0 ~ 3 Years</Link>
            </li>
          </ul>
        </div>
        <div className="dropdown-nav">
          <Link to="/search/category/sample category" className="fd-a nav-item">
            Toys & Early Education
          </Link>
          <ul className="dropdown-content-nav">
            <li>
              <Link to="/search/category/hot" className="title">
                Hot
              </Link>
            </li>
            <li className="nav-item-1">
              <Link to="/search/category/0~3years">0 ~ 3 Years</Link>
            </li>
          </ul>
        </div>
        <div className="dropdown-nav">
          <Link to="/search/category/sample category" className="fd-a nav-item">
            Home
          </Link>
          <ul className="dropdown-content-nav">
            <li>
              <Link to="/search/category/hot" className="title">
                Hot
              </Link>
            </li>
            <li className="nav-item-1">
              <Link to="/search/category/0~3years">0 ~ 3 Years</Link>
            </li>
          </ul>
        </div>
        <div className="dropdown-nav">
          <Link to="/search/category/sample category" className="fd-a nav-item">
            Watches & Jewelry
          </Link>
          <ul className="dropdown-content-nav">
            <li>
              <Link to="/search/category/hot" className="title">
                Hot
              </Link>
            </li>
            <li className="nav-item-1">
              <Link to="/search/category/0~3years">0 ~ 3 Years</Link>
            </li>
          </ul>
        </div>
        <div className="dropdown-nav">
          <Link to="/search/category/sample category" className="fd-a nav-item">
            Bags
          </Link>
          <ul className="dropdown-content-nav">
            <li>
              <Link to="/search/category/hot" className="title">
                Hot
              </Link>
            </li>
            <li className="nav-item-1">
              <Link to="/search/category/0~3years">0 ~ 3 Years</Link>
            </li>{' '}
          </ul>
        </div>
        <div className="dropdown-nav">
          <Link to="/search/category/sample category" className="fd-a nav-item">
            Electronics
          </Link>
          <ul className="dropdown-content-nav">
            <li>
              <Link to="/search/category/hot" className="title">
                Hot
              </Link>
            </li>
            <li className="nav-item-1">
              <Link to="/search/category/0~3years">0 ~ 3 Years</Link>
            </li>
          </ul>
        </div>
        <div className="dropdown-nav">
          <Link to="/search/category/sample category" className="fd-a nav-item">
            Appliances
          </Link>
          <ul className="dropdown-content-nav">
            <li>
              <Link to="/search/category/hot" className="title">
                Hot
              </Link>
            </li>
            <li className="nav-item-1">
              <Link to="/search/category/0~3years">0 ~ 3 Years</Link>
            </li>
          </ul>
        </div>
        <div className="dropdown-nav">
          <Link to="/search/category/sample category" className="fd-a nav-item">
            Men's Clothing
          </Link>
          <ul className="dropdown-content-nav">
            <li>
              <Link to="/search/category/hot" className="title">
                Hot
              </Link>
            </li>
            <li className="nav-item-1">
              <Link to="/search/category/0~3years">0 ~ 3 Years</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
