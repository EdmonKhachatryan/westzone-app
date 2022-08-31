import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ProductEditScreen.css';
import { detailsProduct, updateProduct } from '../actions/productActions';
import LoadingBox from '../elements/LoadingBox';
import MessageBox from '../elements/MessageBox';
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants';
import { useNavigate, useParams } from 'react-router-dom';
import Resizer from 'react-image-file-resizer';

export default function ProductEditScreen() {
  const navigate = useNavigate();
  const params = useParams();
  const { id: productId } = params;
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState('');
  const [countInStock, setCountInStock] = useState('');
  const [brand, setBrand] = useState('');
  const [description, setDescription] = useState('');

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  const dispatch = useDispatch();
  useEffect(() => {
    if (successUpdate) {
      navigate('/productlist');
    }
    if (!product || product._id !== productId || successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      dispatch(detailsProduct(productId));
    } else {
      setName(product.name);
      setPrice(product.price);
      setImage(product.image);
      setImages(product.images);
      setCategory(product.category);
      setCountInStock(product.countInStock);
      setBrand(product.brand);
      setDescription(product.description);
    }
  }, [product, dispatch, productId, successUpdate, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        _id: productId,
        name,
        price,
        image,
        images,
        category,
        brand,
        countInStock,
        description,
      })
    );
  };

  //Upload`
  const [loadingUpload, setLoadingUpload] = useState(false);
  const [errorUpload, setErrorUpload] = useState('');

  //const userSignin = useSelector((state) => state.userSignin);
  //const { userInfo } = userSignin;

  const uploadFileHandler = async (e, forImages) => {
    const file = e.target.files[0];
    if (file) {
      for (let i = 0; i < file.length; i++) {
        Resizer.imageFileResizer(
          file[i],
          720,
          720,
          'JPEG',
          100,
          0,
          (url) => {
            console.log(url);
          },
          'base64'
        );
      }
    }
    const bodyFormData = new FormData();
    bodyFormData.append('image', file);
    setLoadingUpload(true);
    try {
      const { url } = await fetch('/s3Url').then((res) => res.json());
      console.log(url);
      await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: file,
      });

      const imageUrl = url.split('?')[0];
      console.log(imageUrl);

      if (forImages) {
        setImages([...images, imageUrl]);
      } else {
        setImage(imageUrl);
      }
      setLoadingUpload(false);
    } catch (error) {
      setErrorUpload(error.message);
      setLoadingUpload(false);
    }
  };

  const deleteFileHandler = async (fileName, f) => {
    console.log(fileName, f);
    console.log(images);
    console.log(images.filter((x) => x !== fileName));
    setImages(images.filter((x) => x !== fileName));
    alert('Image removed successfully. click Update to apply it');
  };

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Edit Product {productId}</h1>
        </div>
        {loadingUpdate && <LoadingBox></LoadingBox>}
        {errorUpdate && <MessageBox variant="danger">{errorUpdate}</MessageBox>}
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <>
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <input
                id="price"
                type="text"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></input>
            </div>
            <div className="row">
              <label>Avatar</label>
              {image.length === 0 && <MessageBox>No Image</MessageBox>}
              <div key={image} className="circl">
                {' '}
                <img src={image} alt="d" className="img"></img>
              </div>
            </div>
            <div htmlFor="image" className="mb-3">
              <label>Image File</label>
              <input
                value={image}
                onChange={(e) => setImage(e.target.value)}
                required
              />
            </div>
            <div htmlFor="imageFile" className="mb-3">
              <label>Upload Image</label>
              <input
                type="file"
                accept="images/*"
                onChange={uploadFileHandler}
              />
              {loadingUpload && <LoadingBox></LoadingBox>}
            </div>

            <div className="row">
              <label>Avatar</label>
              {images.length === 0 && <MessageBox>No Image</MessageBox>}
              {images.map((image) => (
                <div key={image} className="circl">
                  {' '}
                  <img src={image} alt="d" className="img"></img>
                </div>
              ))}
              <button variant="light" onClick={() => deleteFileHandler(image)}>
                <i className="fa fa-times-circle"></i>
              </button>
            </div>

            <div htmlFor="additionalImage" className="mb-3">
              <label>Additional Images</label>
              {images.length === 0 && <MessageBox>{errorUpload}</MessageBox>}
              <ul variant="flush">
                {images.map((x) => (
                  <li key={x}>
                    {x}
                    <button
                      variant="light"
                      onClick={() => deleteFileHandler(x)}
                    >
                      <i className="fa fa-times-circle"></i>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div htmlFor="additionalImageFile" className="mb-3">
              <label>
                Upload Aditional Image      |O^-^O^-^O|
                <input
                  type="file"
                  multiple
                  hidden
                  accept="images/*"
                  onChange={(e) => uploadFileHandler(e, true)}
                />{' '}
              </label>
              {loadingUpload && <LoadingBox></LoadingBox>}
            </div>

            <div>
              <label htmlFor="category">Category</label>
              <input
                id="category"
                type="text"
                placeholder="Enter category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="brand">Brand</label>
              <input
                id="brand"
                type="text"
                placeholder="Enter brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="countInStock">Count In Stock</label>
              <input
                id="countInStock"
                type="text"
                placeholder="Enter countInStock"
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <textarea
                id="description"
                rows="3"
                type="text"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div>
              <label></label>
              <button className="primary" type="submit">
                Update
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
