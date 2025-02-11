// server/routes/productRoutes.js
import express from 'express';
const router = express.Router();
import Product from '../models/Product.js';
import { protect, admin } from '../middleware/authMiddleware.js';
import multer from 'multer';
import cloudinary from 'cloudinary';

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET
});

const upload = multer({ dest: 'uploads/' });

// Get all sauces
router.get('/', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
});

// Create new sauce (Admin only)
router.post('/', protect, admin, upload.single('image'), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    
    const product = new Product({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      discount: req.body.discount,
      image: result.secure_url,
      category: req.body.category
    });

    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (error) {
    res.status(400).json({ message: 'Invalid product data' });
  }
});

// Update sauce (Admin only)
router.put('/:id', protect, admin, async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    
    if (product) {
      product.name = req.body.name || product.name;
      product.description = req.body.description || product.description;
      product.price = req.body.price || product.price;
      product.discount = req.body.discount || product.discount;
      product.image = req.body.image || product.image;
      
      const updatedProduct = await product.save();
      res.json(updatedProduct);
    }
  } catch (error) {
    res.status(404).json({ message: 'Product not found' });
  }
});

export default router;