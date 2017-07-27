// dependencies
var express = require('express');
var router = express.Router();

// Models
var Product = require('../models/product');
var User = require('../models/user');

// routes
Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/products');

User.methods(['get', 'put', 'post', 'delete']);
User.register(router, '/users');

// Return Router
module.exports = router;
