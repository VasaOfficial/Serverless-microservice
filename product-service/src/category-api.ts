import { APIGatewayEvent, APIGatewayProxyResult, Context } from "aws-lambda";

export const handler = async (
  event: APIGatewayEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  console.log("EVENT:", JSON.stringify(event));
  console.log("CONTEXT:", JSON.stringify(context));
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "hello from category service",
      path: `${event.path}, ${event.pathParameters}`
    }),
  };
}