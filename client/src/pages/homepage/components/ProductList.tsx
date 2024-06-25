import React from 'react'
import { IProduct } from '../../../interfaces/interfaces'
import ProductItem from './ProductItem'

interface ProductListProps {
    products: IProduct[]
    deleteById: (id: string) => Promise<void>
}

const ProductList = ({products, deleteById}:ProductListProps) => {
  return (
    <div className='products-div'>
        {products.length !== 0 && products.map((item) => (
            <ProductItem product={item} key={item._id} deleteById={deleteById}/>
        ))}
    </div>
  )
}

export default ProductList