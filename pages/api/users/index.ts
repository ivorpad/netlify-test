import { NextApiRequest, NextApiResponse } from 'next'
import { sampleUserData } from '../../../utils/sample-data'
import dotenv from 'dotenv';
import context from '../../../public/context.json'

dotenv.config();

type Context = {
  context?: string
}

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(sampleUserData)) {
      throw new Error('Cannot find user data')
    }

    res.status(200).json({
      ...sampleUserData,
      context: (context as Context)?.context,
    });
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
