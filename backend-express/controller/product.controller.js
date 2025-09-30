import Product from '../models/product.model.js';

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find(); //fetch all products from MongoDB
        res.status(200).json({ success: true, data: products }); //return JSON data instead of message
    }
    catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({ success: false, message: 'Error fetching products' });
    }
}

export const createProduct = async (req, res) => {
    const product = req.body;
    if (!product || !product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: 'All fields are required: name, price, image' });
    }

    const newProduct = new Product(product); //we can use the model once we have verified all fields are present

    try {
        await newProduct.save(); //save to database
        res.status(201).json({ success: true, data: newProduct }); //201: resource created
    }
    catch (error) {
        console.error('Error saving product:', error);
        res.status(500).json({ success: false, message: 'Error saving product' });
    }
}

export const updateProduct = async (req, res) => {
    const productId = req.params.id; //get id from URL
    const product = req.body;
    try {
        const updatedProduct = await Product.findByIdAndUpdate(productId, product, { new: true }); //new:true returns the updated document
        if (!updatedProduct) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }
        res.status(200).json({ success: true, data: updatedProduct });
    }
    catch (error) {
        console.error('Error updating product:', error);
        res.status(500).json({ success: false, message: 'Error updating product' });
    }
}

export const deleteProduct = async (req, res) => {
    const productId = req.params.id;
    console.log('Deleting product with id:', productId);
    try {
        const toDelete = await Product.findById(productId);
        if (!toDelete) {
            return res.status(404).json({ success: false, message: 'Product not found' });
        }
        await Product.deleteOne({ _id: productId });
        res.status(200).json({ success: true, message: 'Product deleted' });

    }
    catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({ success: false, message: 'Error deleting product' });
    }
}