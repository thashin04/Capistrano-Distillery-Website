import React from 'react';
import ProductBanner from '../components/ProductBanner';
import ProductPage from '../components/ProductPage.jsx'
import Footer from '../components/Footer'

function Products() {
  return (
    <div>
      <ProductBanner />
      <ProductPage />
      <Footer />
    </div>
  );
}

export default Products;