import express from "express";
import { createProduct, getProducts, deleteProducts, deleteProductById,editProductById , getProductById } from "../controllers/product.js";

const router = express.Router();

router.get("/",getProducts);
router.post("/",createProduct);
router.delete("/",deleteProducts);
router.delete("/:id",deleteProductById);
router.put("/:id",editProductById);
router.get("/:id",getProductById)

export default router;