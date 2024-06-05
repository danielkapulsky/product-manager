import Product from "../models/product.js";

export const getProducts = async (req,res) => {
    
    try {
        const productList =  await Product.find();
        res.status(200).json({data:productList});
        
    } catch (error) {
        res.status(400).json({message:error.message});
    }
}

export const deleteProducts = async (req,res) => {
    try{
        const productList = await Product.deleteMany({});
        res.status(200).json({message:"products deleted successfully",data:productList})
    }catch{
        res.status(400).json({message:error.message})
    }
}

export const createProduct = async (req,res) => {
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
    });

    try {
        const newProduct = await product.save();
        res.status(201).json({message:"product added successfully", data:newProduct})
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

export const deleteProductById = async (req,res) => {
    const {id} = req.params;
    
    try {
        const deletedProduct = await Product.findByIdAndDelete(id);
        if(!deletedProduct) return res.status(404).json({message:"product not found"});
        const updatedProducts = await Product.find();

        res.status(200).json({message: `product with id ${id} deleted successfully`, data: {deletedProduct, products: updatedProducts}});
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

export const editProductById = async (req,res) => {
    const {id} = req.params;
    const {name, price} = req.body;
    
    try{
        const editedProduct = await Product.findByIdAndUpdate(id,{name,price}, {returnOriginal: false});
        if(!editedProduct) return res.status(404).json({message:"id not found"});
        const updatedProducts = await Product.find();

        res.status(200).json({message: `product with id ${id} edited successfully`, data: {editedProduct, products: updatedProducts}});
    } catch(error){
        res.status(400).json({message:error.message})
    }
}