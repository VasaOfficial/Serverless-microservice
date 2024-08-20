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
resource "aws_s3_bucket" "product_service_s3_bucket" {
  bucket = "product_service_s3_bucket"
  force_destroy = true
}

resource "aws_s3_bucket_public_access_block" "lambda_bucket" {
  bucket = aws_s3_bucket.product_service_s3_bucket.id

  block_public_acls   = true
  block_public_policy = true
  ignore_public_acls  = true
  restrict_public_buckets = true
}

# Declare the S3 object for the Lambda function code
resource "aws_s3_object" "lambda_function_code" {
  bucket = aws_s3_bucket.product_service_s3_bucket.bucket
  key    = "lambda-build.zip"
  source = "${path.root}/../lambda-build.zip"
}

// lambda functions
resource "aws_lambda_function" "getProducts_function" {
  function_name    = "getProducts"

  s3_bucket        = aws_s3_bucket.product_service_s3_bucket.id
  s3_key           = aws_s3_object.lambda_function_code.key

  role             = aws_iam_role.lambda_exec_role.arn
  handler          = "dist/handler.GetProducts"
  runtime          = "nodejs18.x"
}

resource "aws_lambda_function" "getProduct_function" {
  function_name    = "getProduct"

  s3_bucket        = aws_s3_bucket.product_service_s3_bucket.id
  s3_key           = aws_s3_object.lambda_function_code.key

  role             = aws_iam_role.lambda_exec_role.arn
  handler          = "dist/handler.GetProduct"
  runtime          = "nodejs18.x"
}

resource "aws_lambda_function" "getTopOffers_function" {
  function_name    = "getTopOffers"

  s3_bucket        = aws_s3_bucket.product_service_s3_bucket.id
  s3_key           = aws_s3_object.lambda_function_code.key

  role             = aws_iam_role.lambda_exec_role.arn
  handler          = "dist/handler.GetTopOffers"
  runtime          = "nodejs18.x"
}

resource "aws_lambda_function" "searchedProducts_function" {
  function_name    = "searchedProducts"

  s3_bucket        = aws_s3_bucket.product_service_s3_bucket.id
  s3_key           = aws_s3_object.lambda_function_code.key

  role             = aws_iam_role.lambda_exec_role.arn
  handler          = "dist/handler.SearchProducts"
  runtime          = "nodejs18.x"
}

// api gateway
resource "aws_apigatewayv2_api" "http_api" {
  name          = "product_service_api"
  protocol_type = "HTTP"
}

resource "aws_apigatewayv2_stage" "default_stage" {
  api_id      = aws_apigatewayv2_api.http_api.id
  name        = "dev"
  auto_deploy = true
}

resource "aws_apigatewayv2_integration" "getProducts_integration" {
  api_id           = aws_apigatewayv2_api.http_api.id

  integration_type = "AWS_PROXY"
  integration_uri  = aws_lambda_function.getProducts_function.arn
}

resource "aws_apigatewayv2_route" "getProducts_route" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "GET /shop/products"
  target    = "integrations/${aws_apigatewayv2_integration.getProducts_integration.id}"
}

resource "aws_lambda_permission" "getProducts_permission" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.getProducts_function.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.http_api.execution_arn}/*/*"
}

resource "aws_apigatewayv2_integration" "getProduct_integration" {
  api_id           = aws_apigatewayv2_api.http_api.id
  integration_type = "AWS_PROXY"
  integration_uri  = aws_lambda_function.getProduct_function.arn
}

resource "aws_apigatewayv2_route" "getProduct_route" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "GET /shop/products/{id}"
  target    = "integrations/${aws_apigatewayv2_integration.getProduct_integration.id}"
}

resource "aws_lambda_permission" "getProduct_permission" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.getProduct_function.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.http_api.execution_arn}/*/*"
}

resource "aws_apigatewayv2_integration" "getTopOffers_integration" {
  api_id           = aws_apigatewayv2_api.http_api.id
  integration_type = "AWS_PROXY"
  integration_uri  = aws_lambda_function.getTopOffers_function.arn
}

resource "aws_apigatewayv2_route" "getTopOffers_route" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "GET /shop/top-offers"
  target    = "integrations/${aws_apigatewayv2_integration.getTopOffers_integration.id}"
}

resource "aws_lambda_permission" "getTopOffers_permission" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.getTopOffers_function.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.http_api.execution_arn}/*/*"
}

resource "aws_apigatewayv2_integration" "searchedProducts_integration" {
  api_id           = aws_apigatewayv2_api.http_api.id
  integration_type = "AWS_PROXY"
  integration_uri  = aws_lambda_function.searchedProducts_function.arn

  request_parameters = {
    "method.request.querystring.continents" = "optional"
    "method.request.querystring.date"       = "optional"
    "method.request.querystring.price"       = "optional"
  }
}

resource "aws_apigatewayv2_route" "searchedProducts_route" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "GET /shop/products/search"
  target    = "integrations/${aws_apigatewayv2_integration.searchedProducts_integration.id}"
}

resource "aws_lambda_permission" "searchedProducts_permission" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.searchedProducts_function.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.http_api.execution_arn}/*/*"
}