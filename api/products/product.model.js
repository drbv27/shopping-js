const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, uppercase: true, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  stock: { type: Number, required: true },
  image: String,
});

ProductSchema
  .path('stock')
  .validate((stockValue) => stockValue > 0, 'stock must be greater 0');

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
