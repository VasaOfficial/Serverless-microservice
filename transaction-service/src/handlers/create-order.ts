import { SQSEvent } from "aws-lambda";
import { plainToClass } from "class-transformer";
import { ValidateError } from "../util/errors";
import { RawOrderInput } from "../dto/input";
import prisma from "../util/prismaClient";

export const createOrderHandler = async (event: SQSEvent) => {
  const orderResponse: Record<string, unknown>[] = [];

  const promises = event.Records.map(async (record) => {
    const input = plainToClass(RawOrderInput, JSON.parse(record.body));
    const errors = await ValidateError(input);

    console.log("ERRORS:", errors);

    if (!errors) {
      try {
        const transaction = await prisma.transaction.create({
          data: {
            amount: input.transaction.amount,
            amount_received: input.transaction.amount_received,
            capture_method: input.transaction.capture_method,
            created: input.transaction.created,
            currency: input.transaction.currency,
            customer: input.transaction.customer,
            payment_id: input.transaction.id,
            payment_method: input.transaction.payment_method,
            payment_method_types: input.transaction.payment_method_types.toString(),
            status: input.transaction.status,
          },
        });

        const order_ref_number = Math.floor(10000 + Math.random() * 900000);
        const status = "received";

        const order = await prisma.order.create({
          data: {
            user_id: Number(input.userId),
            status,
            amount: input.transaction.amount,
            transaction_id: transaction.id,
            order_ref_id: order_ref_number,
            orderItems: {
              createMany: {
                data: input.items.map(item => ({
                  product_id: item.product_id,
                  name: item.name,
                  image_url: item.image_url,
                  price: item.price,
                  item_qty: item.item_qty,
                })),
              },
            },
          },
          include: {
            orderItems: true,
          },
        });

        orderResponse.push({ order });
      } catch (error) {
        orderResponse.push({ error });
      }
    } else {
      orderResponse.push({ error: errors });
    }
  });

  await Promise.all(promises);
  console.log("RESPONSE:", orderResponse);
  return { orderResponse };
};