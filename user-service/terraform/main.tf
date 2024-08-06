terraform {
// providers
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  random = {
    source  = "hashicorp/random"
    version = "~> 3.5.1"
  }
  archive = {
    source  = "hashicorp/archive"
    version = "~> 2.3.0"
  }
 }

 required_version = "~> 1.9"

  backend "s3" {
    bucket = "user-service-tf-backend"
    key    = "user-service/terraform/terraform.tfstate"
    region = "eu-central-1"
  }
}

provider "aws" {
  region = "eu-central-1"
}

// IAM role for Lambda execution
resource "aws_iam_role" "lambda_exec_role" {
  name = "lambda_exec_role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17",
    Statement = [{
      Action    = "sts:AssumeRole",
      Effect    = "Allow",
      Principal = {
        Service = "lambda.amazonaws.com",
      },
    },],
  })
}

resource "aws_iam_role_policy_attachment" "lambda_policy" {
  role       = aws_iam_role.lambda_exec_role.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

// S3 bucket for Lambda code
resource "aws_s3_bucket" "user_service_s3_bucket" {
  bucket = "user_service_s3_bucket"
  force_destroy = true
}

resource "aws_s3_bucket_public_access_block" "lambda_bucket" {
  bucket = aws_s3_bucket.user_service_s3_bucket.id

  block_public_acls   = true
  block_public_policy = true
  ignore_public_acls  = true
  restrict_public_buckets = true
}

# Declare the S3 object for the Lambda function code
resource "aws_s3_object" "lambda_function_code" {
  bucket = aws_s3_bucket.user_service_s3_bucket.bucket
  key    = "lambda-build.zip"
  source = "${path.root}/../lambda-build.zip"
}

// lambda functions
resource "aws_lambda_function" "signup_function" {
  function_name    = "signup"

  s3_bucket        = aws_s3_bucket.user_service_s3_bucket.id
  s3_key           = aws_s3_object.lambda_function_code.key

  role             = aws_iam_role.lambda_exec_role.arn
  handler          = "dist/handler.SignUp"
  runtime          = "nodejs18.x"

  environment {
    variables = {
      FIREBASE_API_KEY = var.firebase_api_key
      FIREBASE_AUTH_DOMAIN = var.firebase_auth_domain
      FIREBASE_PROJECT_ID = var.firebase_project_id
      FIREBASE_STORAGE_BUCKET = var.firebase_storage_bucket
      FIREBASE_MESSAGING_SENDER_ID = var.firebase_messaging_sender_id
      FIREBASE_APP_ID = var.firebase_app_id
      FIREBASE_TYPE = var.firebase_type
      FIREBASE_PRIVATE_KEY_ID = var.firebase_private_key_id
      FIREBASE_PRIVATE_KEY = var.firebase_private_key
      FIREBASE_CLIENT_EMAIL = var.firebase_client_email
      FIREBASE_CLIENT_ID = var.firebase_client_id
      FIREBASE_AUTH_URI = var.firebase_auth_uri
      FIREBASE_TOKEN_URI = var.firebase_token_uri
      FIREBASE_AUTH_PROVIDER_X509_CERT_URL = var.firebase_auth_provider_x509_cert_url
      FIREBASE_CLIENT_X509_CERT_URL = var.firebase_client_x509_cert_url
    }
  }
}

resource "aws_lambda_function" "login_function" {
  function_name    = "login"

  s3_bucket        = aws_s3_bucket.user_service_s3_bucket.id
  s3_key           = aws_s3_object.lambda_function_code.key

  role             = aws_iam_role.lambda_exec_role.arn
  handler          = "dist/handler.Login"
  runtime          = "nodejs18.x"

  environment {
    variables = {
      FIREBASE_API_KEY = var.firebase_api_key
      FIREBASE_AUTH_DOMAIN = var.firebase_auth_domain
      FIREBASE_PROJECT_ID = var.firebase_project_id
      FIREBASE_STORAGE_BUCKET = var.firebase_storage_bucket
      FIREBASE_MESSAGING_SENDER_ID = var.firebase_messaging_sender_id
      FIREBASE_APP_ID = var.firebase_app_id
      FIREBASE_TYPE = var.firebase_type
      FIREBASE_PRIVATE_KEY_ID = var.firebase_private_key_id
      FIREBASE_PRIVATE_KEY = var.firebase_private_key
      FIREBASE_CLIENT_EMAIL = var.firebase_client_email
      FIREBASE_CLIENT_ID = var.firebase_client_id
      FIREBASE_AUTH_URI = var.firebase_auth_uri
      FIREBASE_TOKEN_URI = var.firebase_token_uri
      FIREBASE_AUTH_PROVIDER_X509_CERT_URL = var.firebase_auth_provider_x509_cert_url
      FIREBASE_CLIENT_X509_CERT_URL = var.firebase_client_x509_cert_url
    }
  }
}

resource "aws_lambda_function" "resetpass_function" {
  function_name    = "resetpass"

  s3_bucket        = aws_s3_bucket.user_service_s3_bucket.id
  s3_key           = aws_s3_object.lambda_function_code.key

  role             = aws_iam_role.lambda_exec_role.arn
  handler          = "dist/handler.ResetPassword"
  runtime          = "nodejs18.x"

  environment {
    variables = {
      FIREBASE_API_KEY = var.firebase_api_key
      FIREBASE_AUTH_DOMAIN = var.firebase_auth_domain
      FIREBASE_PROJECT_ID = var.firebase_project_id
      FIREBASE_STORAGE_BUCKET = var.firebase_storage_bucket
      FIREBASE_MESSAGING_SENDER_ID = var.firebase_messaging_sender_id
      FIREBASE_APP_ID = var.firebase_app_id
      FIREBASE_TYPE = var.firebase_type
      FIREBASE_PRIVATE_KEY_ID = var.firebase_private_key_id
      FIREBASE_PRIVATE_KEY = var.firebase_private_key
      FIREBASE_CLIENT_EMAIL = var.firebase_client_email
      FIREBASE_CLIENT_ID = var.firebase_client_id
      FIREBASE_AUTH_URI = var.firebase_auth_uri
      FIREBASE_TOKEN_URI = var.firebase_token_uri
      FIREBASE_AUTH_PROVIDER_X509_CERT_URL = var.firebase_auth_provider_x509_cert_url
      FIREBASE_CLIENT_X509_CERT_URL = var.firebase_client_x509_cert_url
    }
  }
}

// api gateway
resource "aws_apigatewayv2_api" "http_api" {
  name          = "user_service_api"
  protocol_type = "HTTP"
}

resource "aws_apigatewayv2_stage" "default_stage" {
  api_id      = aws_apigatewayv2_api.http_api.id
  name        = "dev"
  auto_deploy = true
}

resource "aws_apigatewayv2_integration" "signup_integration" {
  api_id           = aws_apigatewayv2_api.http_api.id

  integration_type = "AWS_PROXY"
  integration_uri  = aws_lambda_function.signup_function.arn
}

resource "aws_apigatewayv2_route" "signup_route" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "POST /signup"
  target    = "integrations/${aws_apigatewayv2_integration.signup_integration.id}"
}

resource "aws_apigatewayv2_integration" "login_integration" {
  api_id           = aws_apigatewayv2_api.http_api.id
  integration_type = "AWS_PROXY"
  integration_uri  = aws_lambda_function.login_function.arn
}

resource "aws_apigatewayv2_route" "login_route" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "POST /login"
  target    = "integrations/${aws_apigatewayv2_integration.login_integration.id}"
}

resource "aws_lambda_permission" "signup_permission" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.signup_function.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.http_api.execution_arn}/*/*"
}

resource "aws_lambda_permission" "login_permission" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.login_function.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.http_api.execution_arn}/*/*"
}

resource "aws_apigatewayv2_integration" "resetpass_integration" {
  api_id           = aws_apigatewayv2_api.http_api.id
  integration_type = "AWS_PROXY"
  integration_uri  = aws_lambda_function.resetpass_function.arn
}

resource "aws_apigatewayv2_route" "resetpass_route" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "POST /resetpass"
  target    = "integrations/${aws_apigatewayv2_integration.resetpass_integration.id}"
}

resource "aws_lambda_permission" "resetpass_permission" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.resetpass_function.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.http_api.execution_arn}/*/*"
}