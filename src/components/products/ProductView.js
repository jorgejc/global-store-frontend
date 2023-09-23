import React, { useState, useEffect } from 'react'
import { getProducts } from '../../services/productService';
import { ProductCard } from './ProductCard';
import { ProductNew } from './ProductNew';

export const ProductView = () => {

  const [products, setProducts] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const listProducts = async () => {
    try {
      const { data } = await getProducts();
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    listProducts();
  }, []);

  const handleOpenModal = () => {
    setOpenModal(!openModal)
  }

  return (
    <div className="container">
      <div className="mt-2 mb-2 row row-cols-1 row-cols-md-5 g-4">
        {
          products.map((product) => {
            return <ProductCard key={product._id} product={product} />
          })
        }
      </div>
      
    </div>
  )
}
