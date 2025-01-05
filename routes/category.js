const express = require('express');
var router = express.Router();
const categoryController = require('../controllers/category'); // Import category controller

router.route('/')
    .get(categoryController.getCategories) // Get all categories
    .post(categoryController.createCategory); // Create a new category

router.route('/:id')
    .get(categoryController.getCategory) // Get a single category by ID
    .patch(categoryController.updateCategory) // Update a category by ID
    .delete(categoryController.deleteCategory); // Delete a category by ID

module.exports = router;
