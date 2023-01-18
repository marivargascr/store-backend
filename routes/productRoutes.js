import express from 'express'
const router = express.Router()
import Product from '../models/productModel.js'

import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
} from '../controllers/productController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

import asyncHandler from 'express-async-handler'

console.log('productRoutes.js');

/*

router.get('/'), asyncHandler (async (req, res) => {
  console.log('routes mari')
  const products = await Product.find({})
  console.log('mariana: ',products)
  res.json(products)
})

router.get('/about', function(req, res) {
  res.send('About birds');
});

*/


router.route('/').get(getProducts).post(protect, admin, createProduct)
router.route('/:id/reviews').post(protect, createProductReview)
router.get('/top', getTopProducts)
router
  .route('/:id')
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct)



export default router
