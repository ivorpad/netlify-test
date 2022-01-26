import { Handler } from "@netlify/functions";



const handler: Handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello World",
      access_token: process.env.ACCESS_TOKEN,
    }),
  };
};

export { handler };
