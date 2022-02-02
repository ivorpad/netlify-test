import { Handler } from "@netlify/functions";
// import context from "../../public/context.json"

// type Context = {
//   context?: string;
// };

// const currentContext = (context as Context)?.context;

const contextualEnvVar = (v) => {
  const formattedContext = process.env.CONTEXT.replace("-", "_").toUpperCase();
  return process.env[`${formattedContext}_${v}`];
};

const handler: Handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello World",
      access_token: contextualEnvVar("ACCESS_TOKEN"),
      contextFromBuildProcess: process.env.CONTEXT
    }),
  };
};

export { handler };
