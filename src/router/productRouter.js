const express= require("express");
const router = express.Router();

const productController = require('../controller/productController')

router.get('/getAllProductType',productController.getAllProductType)
router.get('/',productController.getAllProducts)

module.exports = router;