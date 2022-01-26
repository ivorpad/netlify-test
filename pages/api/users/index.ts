import { NextApiRequest, NextApiResponse } from 'next'
import { sampleUserData } from '../../../utils/sample-data'
import dotenv from 'dotenv'

dotenv.config();

const contextualEnvVar = (v) => {
  const currentContext = process.env.CONTEXT;
  const formattedContext = currentContext.replace("-", "_").toUpperCase();
  return process.env[`${formattedContext}_${v}`];
};

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(sampleUserData)) {
      throw new Error('Cannot find user data')
    }

    res
      .status(200)
      .json({
        ...sampleUserData,
        data: process.env,
        var: contextualEnvVar("ACCESS_TOKEN"),
      });
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
