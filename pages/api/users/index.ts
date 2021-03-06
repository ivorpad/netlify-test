import { NextApiRequest, NextApiResponse } from 'next'
import { sampleUserData } from '../../../utils/sample-data'
import dotenv from 'dotenv';
// import context from '../../../public/context.json'

dotenv.config();

// type Context = {
//   context?: string
// }

// const currentContext = (context as Context)?.context;


// const contextualEnvVar = (v) => {
//   const formattedContext = currentContext.replace("-", "_").toUpperCase();
//   return process.env[`${formattedContext}_${v}`];
// };

// console.log(contextualEnvVar('ACCESS_TOKEN'));

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(sampleUserData)) {
      throw new Error('Cannot find user data')
    }

    res.status(200).json({
      envs: process.env,
    });
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
