module "vpc" {
  source = "./modules/vpc"
}

module "s3" {
  source = "./modules/s3"
}

module "rds" {
  source = "./modules/rds"
}

module "lambda" {
  source = "./modules/lambda"
}

module "api-gateway" {
  source = "./modules/api_gateway"
}