import { Request, Response } from 'express'
import { MongoRepository } from 'typeorm'

import { connection } from '../../initDbConnection'

import { Product } from '../../entities'

import httpCodes from '../../httpCodes'

const getProducts = async ({ params }: Request, res: Response) => {
  const { productId } = params;

  const productRepository: MongoRepository<Product> = connection.getMongoRepository(Product);

  try {
    if (productId) {
      const product = await productRepository.findOne({ id: productId });

      if (!product) return res.status(httpCodes.NOT_FOUND).send({});

      return res.status(httpCodes.OK).send(product)
    }

    const products = await productRepository.find({});

    return res.status(httpCodes.OK).send(products)
  } catch (error) {
    console.log('error', error);
    return res.status(httpCodes.INTERNAL_SERVER_ERROR).send(error)
  }
};

export default getProducts
