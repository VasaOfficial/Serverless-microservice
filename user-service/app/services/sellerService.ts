import { SellerRepository } from "app/repository/sellerRepository";
import { APIGatewayProxyEventV2 } from "aws-lambda";

export class SellerService {
  repository: SellerRepository;

  constructor(repository: SellerRepository) {
    this.repository = repository;
  }

  async JoinSellerProgram(event: APIGatewayProxyEventV2) {}

  async GetPaymentMethods(event: APIGatewayProxyEventV2) {}

  async EditPaymentMethod(event: APIGatewayProxyEventV2) {}
}