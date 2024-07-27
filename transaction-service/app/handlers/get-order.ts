import { APIGatewayEvent, Context } from "aws-lambda";
import middy from "@middy/core";
import jsonBodyParser from "@middy/http-json-body-parser";
import prisma from "../util/prismaClient";

export const getOrdersHandler = middy(
  async (event: APIGatewayEvent, context: Context) => {
    try {
      const orders = await prisma.order.findMany({
        take: 500
      });

      if (orders.length > 0) {
        return {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
          statusCode: 200,
          body: JSON.stringify({ orders }),
        };
      }

      return {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        statusCode: 404,
        body: JSON.stringify({ message: "Orders not found" }),
      };
    } catch (error) {
      return {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        statusCode: 500,
        body: JSON.stringify({ message: "Internal server error" }),
      };
    }
  }
).use(jsonBodyParser());

export const getOrderHandler = middy(
  async (event: APIGatewayEvent, context: Context) => {
    try {
      const { id } = event.pathParameters as { id: string };
      
      const order = await prisma.order.findFirst({
        where: {
          user_id: parseInt(id, 10)
        },
        include: {
          orderItems: true
        }
      });

      if (order) {
        return {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
          statusCode: 200,
          body: JSON.stringify({ order }),
        };
      }

      return {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        statusCode: 404,
        body: JSON.stringify({ message: "Order not found" }),
      };
    } catch (error) {
      return {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        statusCode: 500,
        body: JSON.stringify({ message: "Internal server error" }),
      };
    }
  }
).use(jsonBodyParser());