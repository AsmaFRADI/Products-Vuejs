import express, { Router, Request, Response } from 'express'

import getProducts from './controllers/product/getProducts'
import createProduct from './controllers/product/createProduct'
import updateProduct from './controllers/product/updateProduct'
import deleteProduct from './controllers/product/deleteProduct'


import httpCodes from './httpCodes'

const router: Router = express.Router();

router.get('/info', (_: Request, res: Response) => {
  return res.status(httpCodes.OK).send({
    hello: 'Welcome to API'
  })
});

router.get('/product/:productId?', getProducts);
router.post('/product', createProduct);
router.patch('/product/:productId', updateProduct);
router.delete('/product/:productId', deleteProduct);

export default router
