import express from "express";
import { createProduct, getProducts, deleteProducts, deleteProductById,editProductById } from "../controllers/product.js";

const router = express.Router();

router.get("/",getProducts);
router.post("/",createProduct);
router.delete("/",deleteProducts);
router.delete("/:id",deleteProductById);
router.put("/:id",editProductById);

export default router;