import React, { useContext, useEffect } from 'react'
import ProductList from './components/ProductList';
import "./components/HomePage.scss"
import { Form } from './components/Form';
import { ProductContext } from '../../context/ProductsContext';
import { ProductContextType } from '../../interfaces/interfaces';

const HomePage = () => {
  const {products, getAllProducts,deleteById} = useContext(ProductContext) as ProductContextType

  useEffect(() => {
    getAllProducts()
  },[])
  return (
    <div className='home-container'>
      <Form/>
      <ProductList products={products} deleteById={deleteById}/>
    </div>
  )
}

export default HomePage