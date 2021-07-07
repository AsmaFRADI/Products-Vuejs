import { Response } from 'express'
import { MongoRepository } from 'typeorm'
import { v4 as uuidv4 } from 'uuid'
import crypto from 'crypto'


import { connection } from '../../initDbConnection'

import { Product } from '../../entities'

import { createProductSchema } from './schema'

import httpCodes from '../../httpCodes'

const createProduct = async ({body }: any, res: Response) => {

  const { value, error } = createProductSchema.validate(body, { abortEarly: false });

  if (error) return res.status(httpCodes.BAD_REQUEST).send({ error });

  const productRepository: MongoRepository<Product> = connection.getMongoRepository(Product);

  try {
    const newProductId = uuidv4();

    const newProductPayload = {
      id: newProductId,
      ...value
    };

    await productRepository.insertOne(newProductPayload);

    return res.status(httpCodes.OK).send(newProductPayload)
  } catch (error) {
    return res.status(httpCodes.INTERNAL_SERVER_ERROR).send(error)
  }
};

export default createProduct
