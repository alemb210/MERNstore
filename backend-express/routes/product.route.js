import express from 'express';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../controller/product.controller.js';

const router = express.Router(); //create a router object to define routes

router.post('/', createProduct); //async because we will interact with database

router.get('/', getProducts); 

router.put("/:id", updateProduct);

router.delete('/:id', deleteProduct);

export default router;
