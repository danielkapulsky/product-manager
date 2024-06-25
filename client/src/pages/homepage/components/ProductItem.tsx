import React from 'react'
import { IProduct } from '../../../interfaces/interfaces'


interface ProductItemProps {
    product: IProduct
    deleteById: (id: string) => Promise<void>
}

const ProductItem = ({ product, deleteById }: ProductItemProps) => {
    console.log(product)
    return (
        <div className='product-container'>
            <div className='content'>
                <h3 className='product-name'>{`Product:${product.name}`}</h3>
                <h4 className='product-price'>{`Price:${product.price}`}</h4>
            </div>
            <div className='buttons'>
                <button onClick={() => deleteById(product._id)}>Delete</button>
                <button>Info</button>
            </div>
        </div>
    )
}

export default ProductItem;