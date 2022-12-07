const route = require('express').Router()
const { AddNewProduct , DeleteProduct , UpdateProduct,  } = require('../controllers/ProductController')
const upload = require('../utils/imageUploader')



route.post('/addproduct', upload.single('image'), AddNewProduct)

route.delete('/deleteproduct/:id' , DeleteProduct)
route.put('/updateproduct', UpdateProduct)
// route.get('/getproducts',findAllProduct)

module.exports = route