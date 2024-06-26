import { APIGatewayEvent, APIGatewayProxyResult, Context } from "aws-lambda";
import { ProductService } from "../service/product-service";
import { ProductRepository } from "../repository/product-repository";
import "../utility";
import middy from "@middy/core";
import jsonBodyParser from "@middy/http-json-body-parser";

const service = new ProductService(new ProductRepository());

export const messageQueueHandler = middy(
  (
    event: APIGatewayEvent,
    context: Context
  ): Promise<APIGatewayProxyResult> => {
    return service.handleQueueOperation(event);
  }
).use(jsonBodyParser());