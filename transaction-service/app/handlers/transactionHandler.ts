import { APIGatewayProxyEventV2 } from 'aws-lambda'
import { TransactionRepository } from 'app/repository/transactionRepository'
import { TransactionService } from 'app/services/transactionService'

const service = new TransactionService(new TransactionRepository())

export const CreateOrder = async (event: APIGatewayProxyEventV2) => {
  return service.CreateOrder(event)
}

export const ProcessPayment = async (event: APIGatewayProxyEventV2) => {
  return service.ProcessPayment(event)
}
