import { NextApiRequest, NextApiResponse } from 'next'
import { sampleUserData } from '../../../utils/sample-data'
import dotenv from 'dotenv'

dotenv.config();

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(sampleUserData)) {
      throw new Error('Cannot find user data')
    }

    const data = [process.env]
    res.status(200).json({ ...sampleUserData, data});
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
