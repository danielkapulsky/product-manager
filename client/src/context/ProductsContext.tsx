import * as React from 'react';
import { IProductInput,IProduct, ProductContextType } from '../interfaces/interfaces';
import axios from 'axios';

export const ProductContext = React.createContext<ProductContextType | null>(null);

const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [products,setProducts] = React.useState<IProduct[]>([])
    
    const createProduct = async (product: IProductInput) => {
        try{
            const res = await axios.post('http://localhost:4001/api/products', product)
            setProducts(res.data.products)
        }catch(error){
            console.log(error)
        }
    }
    const getAllProducts = async () => {
        try{
            const res = await axios.get('http://localhost:4001/api/products')
            setProducts(res.data.products)
        }catch(error){
            console.log(error)
        }
    }
    
    const deleteById = async (id: string) => {
        try{
            const res = await axios.delete(`http://localhost:4001/api/products/${id}`)
            setProducts(res.data.products)
            
        }catch(error){
            console.log(error)
        }
    }
    const value = {products, createProduct,getAllProducts, deleteById};

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
}

export default ProductProvider;