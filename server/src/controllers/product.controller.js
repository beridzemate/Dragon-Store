const Product = require('../models/Product');
const { catchAsync } = require('../utils/errorHandler');
const cloudinary = require('../config/cloudinary');

exports.createProduct = catchAsync(async (req, res) => {
  const { name, description, price, category, stock } = req.body;
  
  let imageUrl = '';
  if (req.file) {
    const result = await cloudinary.uploader.upload(req.file.path);
    imageUrl = result.secure_url;
  }

  const product = await Product.create({
    name,
    description,
    price,
    category,
    stock,
    imageUrl
  });

  res.status(201).json(product);
});

exports.getProducts = catchAsync(async (req, res) => {
  const products = await Product.find().sort({ createdAt: -1 });
  res.json(products);
});

exports.updateProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  if (req.file) {
    const result = await cloudinary.uploader.upload(req.file.path);
    updates.imageUrl = result.secure_url;
  }

  const product = await Product.findByIdAndUpdate(
    id,
    updates,
    { new: true, runValidators: true }
  );

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.json(product);
});

exports.deleteProduct = catchAsync(async (req, res) => {
  const { id } = req.params;
  const product = await Product.findByIdAndDelete(id);

  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.json({ message: 'Product deleted successfully' });
});
