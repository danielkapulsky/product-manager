export interface IProductInput {
    name: string
    price:number
}

export interface IProduct extends IProductInput {
    _id:string
}

export interface ProductContextType {
    products: IProduct[]
    createProduct: (product: IProductInput) => Promise<void>
    getAllProducts: () => Promise<void>
    deleteById: (id: string) => Promise<void>
}