import middy from "@middy/core";
import jsonBodyParser from "@middy/http-json-body-parser";
import { APIGatewayEvent, Context } from "aws-lambda";
import prisma from "../util/prismaClient";

export const getTransactionHandler = middy(
  async (event: APIGatewayEvent, context: Context) => {
    try {
      const transactions = await prisma.transaction.findMany({
        take: 500
      });

      if (transactions.length > 0) {
        return {
          statusCode: 201,
          body: JSON.stringify({ transactions }),
        };
      }

      return {
        statusCode: 404,
        body: JSON.stringify({ message: "Transactions not found!" }),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Internal server error' }),
      };
    }
  }
).use(jsonBodyParser());