import { APIGatewayEvent, APIGatewayProxyResult, Context } from "aws-lambda";
import { CategoryRepository } from "./repository/category-repository";
import { CategoryService } from "./service/category-service";
import middy from "@middy/core";
import jsonBodyParser from "@middy/http-json-body-parser";

const service = new CategoryService(new CategoryRepository());

export const handler = middy(
  async (
    event: APIGatewayEvent,
    context: Context
  ): Promise<APIGatewayProxyResult> => {
    try {
      console.log('Received event:', event);
      const isRoot = event.pathParameters === null;
      switch (event.httpMethod.toLowerCase()) {
        case "post":
          if (isRoot) {
            return await service.createCategory(event);
          }
          break;
        case "get":
          return isRoot
            ? await service.getCategories(event)
            : await service.getCategory(event);
        case "put":
          if (!isRoot) {
            return await service.editCategory(event);
          }
          break;
        case "delete":
          if (!isRoot) {
            return await service.deleteCategory(event);
          }
          break;
      }
      return await service.ResponseWithError(event);
    } catch (err) {
      console.error('Error in handler:', err);
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Internal Server Error' }),
      };
    }
  }
).use(jsonBodyParser());