import { Response } from 'express'
import { MongoRepository } from 'typeorm'

import { connection } from '../../initDbConnection'

import { Product } from '../../entities'

import httpCodes from '../../httpCodes'

const deleteProduct = async ({ params }: any, res: Response) => {
  const { productId } = params;


  const productRepository: MongoRepository<Product> = connection.getMongoRepository(Product);

  try {
    await productRepository.deleteOne({ id: productId });

    return res.status(httpCodes.OK).send(`The product with id ${productId} deleted successfully.`)
  } catch (error) {
    return res.status(httpCodes.INTERNAL_SERVER_ERROR).send(error)
  }
};

export default deleteProduct
