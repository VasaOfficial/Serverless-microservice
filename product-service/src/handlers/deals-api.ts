import { APIGatewayEvent, APIGatewayProxyResult, Context } from "aws-lambda";

export const dealsHandler = async (event: APIGatewayEvent, context: Context): Promise<APIGatewayProxyResult> => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "hello from deals service",
      path: `${event.path}, ${event.pathParameters}`,
    }),
  };
};