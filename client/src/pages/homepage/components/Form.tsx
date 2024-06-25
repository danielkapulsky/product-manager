import React,{useContext, useState} from 'react'
import { IProduct, IProductInput, ProductContextType } from '../../../interfaces/interfaces';
import { ProductContext } from '../../../context/ProductsContext';

export const Form = () => {
    const [item, setItem] = useState<IProductInput>({name:"",price:0});

    const {createProduct} = useContext(ProductContext) as ProductContextType;

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setItem({...item, [name]: value})
    }

    const onAcceptHandler = () => {
      createProduct(item);
    }

  return (
    <div>
        <input type="text" name='name' placeholder='Enter name...' value={item.name} onChange={onInputChange}/>
        <input type="text" name='price' placeholder='Enter price...' value={item.price} onChange={onInputChange}/>
        <button className='accept-button' onClick={onAcceptHandler} >accept</button>
    </div>
  )
}
