const Product = require('./../models/productModel');
const catchAsync = require('./../utils/catchAsync');
const appError = require('./../utils/appError');
const AppError = require('./../utils/appError');

exports.getAllProducts = catchAsync(async (req, res, next) => {
  const queryObj = { ...req.query };
  let products = {};
  if (queryObj.hasOwnProperty('category')) {
    products = await Product.find(req.query);
    res.status(200).json({
      status: 'success',
      results: products.length,
      data: {
        products,
      },
    });
  } else {
    products = await Product.find(req.query);
    res.status(200).json({
      status: 'success',
      results: products.length,
      data: {
        products,
      },
    });
  }
});

exports.getProduct = catchAsync(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new AppError('No product found with that ID', 404));
  }
  res.status(200).json({
    status: 'success',
    data: {
      product,
    },
  });
});

exports.createProduct = catchAsync(async (req, res, next) => {
  const newProduct = await Product.create(req.body);
  res.status(201).json({
    status: 'success',
    data: {
      product: newProduct,
    },
  });
});

exports.updateProduct = catchAsync(async (req, res, next) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!product) {
    return next(new AppError('No product found with that ID', 404));
  }
  res.status(200).json({
    status: 'success',
    data: {
      product,
    },
  });
});

exports.deleteProduct = catchAsync(async (req, res, next) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (!product) {
    return next(new AppError('No product found with that ID', 404));
  }
  res.status(200).json({
    status: 'success',
    data: null,
  });
});
