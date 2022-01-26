import { Handler } from "@netlify/functions";



const handler: Handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello World",
      context: process.env.CONTEXT,
      a: process.env,
    }),
  };
};

export { handler };
