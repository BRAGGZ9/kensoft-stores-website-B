import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProductsListing.css';
import axios from 'axios';

const ProductListing = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    '/images/products.jpg',
    '/images/rod.avif',
    '/images/rod_reel.jpg',
    'https://www.firi.go.ug/images/fishing.jpg',
    'https://www.fao.org/images/newsroomlibraries/stories-images/54c8b3fd5d8c5a53bee7d03521463b2b.jpg?sfvrsn=7252b97e_10',
    'https://www.afdb.org/sites/default/files/styles/1700x900/public/a1-fisheries.jpg?itok=oNJaPAG0',
     
];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(slideInterval);
  }, [slides.length]);

  const [products, setProducts] = useState([]);

      useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/products/')
            .then(response => setProducts(response.data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       const response = await fetch("/products.json");
//       const data = await response.json();
//       setProducts(data);
//     };
//     fetchProducts();
//   }, []);


  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div >
      <div className='cover-image'>
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide})` }}
        ></div>
      ))}
      <h1>Welcome To Kensoft Stores!!</h1>
      </div>
      <div className='hero-section'>
        <div className='Color'>
        <h1>Our Products</h1>
        <p>Your one-stop store for all fishing equipment</p>
        <p>At Kensoft Stores, we specialize in providing top-quality fishing gear to meet all your angling needs.</p> 
        <p>Established in 2017 and officially registered in 2019 under the Uganda Companies Act of 2012, our company is located in Kampala District and operates throughout Uganda. Whether you're a professional fisherman or a weekend enthusiast, our extensive range of fishing equipment includes rods, reels, tackle, bait, and accessories. Visit our store to explore our comprehensive selection and enhance your fishing experience.</p>
        </div>
        <h1>Products</h1>
        </div>
        
        <div>
      {selectedImage && (
        <div className="modal" onClick={handleClose}>
          <img
            src={selectedImage}
            alt="Selected Product"
            className="full-screen-image"
            onClick={(e) => e.stopPropagation()} // Prevent closing the modal when clicking the image
          />
        </div>
      )}
      <div className={`product-listing ${selectedImage ? 'blurred' : ''}`}>
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              onClick={() => handleImageClick(product.image)}
            />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <Link to={`/product/${product.id}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default ProductListing;