import { Handler } from "@netlify/functions";



const handler: Handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello World",
      context: typeof process.env.CONTEXT === "undefined" ? "undefined" : process.env.CONTEXT,
    }),
  };
};

export { handler };
