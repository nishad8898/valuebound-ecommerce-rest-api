const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'product name required'],
    lowercase: true,
    trim: true,
    unique: true,
  },
  thumbnail: {
    type: String,
    required: [true, 'product thumbnail required'],
    trim: true,
  },
  productGallery: {
    type: String,
    required: [true, 'product gallery required'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'product description required'],
    lowercase: true,
    trim: true,
  },
  basePrice: {
    type: Number,
    required: [true, 'product base price required'],
  },
  sellPrice: {
    type: Number,
    required: [true, 'product selling price required'],
  },
  category: {
    type: String,
    required: [true, 'product category required'],
    lowercase: true,
    enum: {
      values: ['phone', 'tv', 'laptop'],
      message: 'product category can be phone, tv and laptop only!',
    },
  },
  additionalInfo: {
    type: String,
    default: 'nothing',
    lowercase: true,
    trim: true,
  },
});

//model
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
