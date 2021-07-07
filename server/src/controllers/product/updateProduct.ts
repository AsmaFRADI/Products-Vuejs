import { Response } from 'express'
import { MongoRepository } from 'typeorm'

import { connection } from '../../initDbConnection'

import { Product } from '../../entities'

import { updateProductSchema } from './schema'

import httpCodes from '../../httpCodes'

const updateProduct = async ({ body, params }: any, res: Response) => {
  const { productId } = params;

  const { value, error } = updateProductSchema.validate(body, { abortEarly: false });

  if (error) return res.status(httpCodes.BAD_REQUEST).send({ error });

  const productRepository: MongoRepository<Product> = connection.getMongoRepository(Product);

  try {
    await productRepository.updateOne({ id: productId }, value);

    const updatedProduct = await productRepository.findOne({ id: productId });

    return res.status(httpCodes.OK).send(updatedProduct)
  } catch (error) {
    return res.status(httpCodes.INTERNAL_SERVER_ERROR).send(error)
  }
};

export default updateProduct
