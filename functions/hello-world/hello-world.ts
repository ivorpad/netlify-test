import { Handler } from "@netlify/functions";

const contextualEnvVar = (v) => {
  const currentContext = process.env.CONTEXT;
  const formattedContext = currentContext.replace("-", "_").toUpperCase();
  return process.env[`${formattedContext}_${v}`];
};

const handler: Handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World", data: process.env, another: contextualEnvVar("ACCESS_TOKEN") }),
  };
};

export { handler };
