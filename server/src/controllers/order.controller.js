const Order = require('../models/Order');
const Product = require('../models/Product');
const { catchAsync } = require('../utils/errorHandler');

exports.createOrder = catchAsync(async (req, res) => {
  const { items, shippingAddress } = req.body;
  const userId = req.user.id;

  let totalAmount = 0;
  const orderItems = [];

  for (const item of items) {
    const product = await Product.findById(item.product);
    if (!product) {
      return res.status(404).json({ message: `Product ${item.product} not found` });
    }

    if (product.stock < item.quantity) {
      return res.status(400).json({ message: `Insufficient stock for ${product.name}` });
    }

    const itemPrice = product.price * (1 - product.discount / 100);
    totalAmount += itemPrice * item.quantity;

    orderItems.push({
      product: item.product,
      quantity: item.quantity,
      price: itemPrice
    });

    // Update stock
    await Product.findByIdAndUpdate(item.product, {
      $inc: { stock: -item.quantity }
    });
  }

  const order = await Order.create({
    user: userId,
    items: orderItems,
    totalAmount,
    shippingAddress
  });

  res.status(201).json(order);
});

exports.getOrders = catchAsync(async (req, res) => {
  const orders = await Order.find({ user: req.user.id })
    .populate('items.product')
    .sort({ createdAt: -1 });
  res.json(orders);
});

exports.updateOrderStatus = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const order = await Order.findByIdAndUpdate(
    id,
    { status },
    { new: true, runValidators: true }
  );

  if (!order) {
    return res.status(404).json({ message: 'Order not found' });
}});

  res.json(order);