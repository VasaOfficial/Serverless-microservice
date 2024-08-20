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

locals {
  firebase_env = {
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
    variables = local.firebase_env
  }
}

resource "aws_lambda_function" "validateToken_function" {
  function_name    = "validateToken"

  s3_bucket        = aws_s3_bucket.user_service_s3_bucket.id
  s3_key           = aws_s3_object.lambda_function_code.key

  role             = aws_iam_role.lambda_exec_role.arn
  handler          = "dist/handler.ValidateToken"
  runtime          = "nodejs18.x"

  environment {
    variables = local.firebase_env
  }
}

resource "aws_lambda_function" "oAuth_function" {
  function_name    = "oAuth"

  s3_bucket        = aws_s3_bucket.user_service_s3_bucket.id
  s3_key           = aws_s3_object.lambda_function_code.key

  role             = aws_iam_role.lambda_exec_role.arn
  handler          = "dist/handler.OAuthentication"
  runtime          = "nodejs18.x"

  environment {
    variables = local.firebase_env
  }
}

resource "aws_lambda_function" "addFavorite_function" {
  function_name    = "addFavorite"

  s3_bucket        = aws_s3_bucket.user_service_s3_bucket.id
  s3_key           = aws_s3_object.lambda_function_code.key

  role             = aws_iam_role.lambda_exec_role.arn
  handler          = "dist/handler.AddFavorites"
  runtime          = "nodejs18.x"

  environment {
    variables = local.firebase_env
  }
}

resource "aws_lambda_function" "getFavorites_function" {
  function_name    = "getFavorites"

  s3_bucket        = aws_s3_bucket.user_service_s3_bucket.id
  s3_key           = aws_s3_object.lambda_function_code.key

  role             = aws_iam_role.lambda_exec_role.arn
  handler          = "dist/handler.GetFavorites"
  runtime          = "nodejs18.x"

  environment {
    variables = local.firebase_env
  }
}

resource "aws_lambda_function" "deleteFavorites_function" {
  function_name    = "deleteFavorites"

  s3_bucket        = aws_s3_bucket.user_service_s3_bucket.id
  s3_key           = aws_s3_object.lambda_function_code.key

  role             = aws_iam_role.lambda_exec_role.arn
  handler          = "dist/handler.DeleteFavorites"
  runtime          = "nodejs18.x"

  environment {
    variables = local.firebase_env
  }
}

resource "aws_lambda_function" "getCart_function" {
  function_name    = "getCart"

  s3_bucket        = aws_s3_bucket.user_service_s3_bucket.id
  s3_key           = aws_s3_object.lambda_function_code.key

  role             = aws_iam_role.lambda_exec_role.arn
  handler          = "dist/handler.GetCartItem"
  runtime          = "nodejs18.x"

  environment {
    variables = local.firebase_env
  }
}

resource "aws_lambda_function" "addToCart_function" {
  function_name    = "addToCart"

  s3_bucket        = aws_s3_bucket.user_service_s3_bucket.id
  s3_key           = aws_s3_object.lambda_function_code.key

  role             = aws_iam_role.lambda_exec_role.arn
  handler          = "dist/handler.AddCartItem"
  runtime          = "nodejs18.x"

  environment {
    variables = local.firebase_env
  }
}

resource "aws_lambda_function" "removeFromCart_function" {
  function_name    = "removeFromCart"

  s3_bucket        = aws_s3_bucket.user_service_s3_bucket.id
  s3_key           = aws_s3_object.lambda_function_code.key

  role             = aws_iam_role.lambda_exec_role.arn
  handler          = "dist/handler.RemoveCartItem"
  runtime          = "nodejs18.x"

  environment {
    variables = local.firebase_env
  }
}

resource "aws_lambda_function" "updateCart_function" {
  function_name    = "updateCart"

  s3_bucket        = aws_s3_bucket.user_service_s3_bucket.id
  s3_key           = aws_s3_object.lambda_function_code.key

  role             = aws_iam_role.lambda_exec_role.arn
  handler          = "dist/handler.UpdateCartItem"
  runtime          = "nodejs18.x"

  environment {
    variables = local.firebase_env
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
  route_key = "POST /user/signup"
  target    = "integrations/${aws_apigatewayv2_integration.signup_integration.id}"
}

resource "aws_lambda_permission" "signup_permission" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.signup_function.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.http_api.execution_arn}/*/*"
}

resource "aws_apigatewayv2_integration" "validateToken_integration" {
  api_id           = aws_apigatewayv2_api.http_api.id
  integration_type = "AWS_PROXY"
  integration_uri  = aws_lambda_function.validateToken_function.arn
}

resource "aws_apigatewayv2_route" "validateToken_route" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "POST /user/validate"
  target    = "integrations/${aws_apigatewayv2_integration.validateToken_integration.id}"
}

resource "aws_lambda_permission" "validateToken_permission" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.validateToken_function.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.http_api.execution_arn}/*/*"
}

resource "aws_apigatewayv2_integration" "oAuth_integration" {
  api_id           = aws_apigatewayv2_api.http_api.id
  integration_type = "AWS_PROXY"
  integration_uri  = aws_lambda_function.oAuth_function.arn
}

resource "aws_apigatewayv2_route" "oAuth_route" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "POST /user/oauth"
  target    = "integrations/${aws_apigatewayv2_integration.oAuth_integration.id}"
}

resource "aws_lambda_permission" "oAuth_permission" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.oAuth_function.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.http_api.execution_arn}/*/*"
}

resource "aws_apigatewayv2_integration" "addFavorite_integration" {
  api_id           = aws_apigatewayv2_api.http_api.id
  integration_type = "AWS_PROXY"
  integration_uri  = aws_lambda_function.addFavorite_function.arn
}

resource "aws_apigatewayv2_route" "addFavorite_route" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "POST /user/favorite"
  target    = "integrations/${aws_apigatewayv2_integration.addFavorite_integration.id}"
}

resource "aws_lambda_permission" "addFavorite_permission" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.addFavorite_function.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.http_api.execution_arn}/*/*"
}

resource "aws_apigatewayv2_integration" "getFavorites_integration" {
  api_id           = aws_apigatewayv2_api.http_api.id
  integration_type = "AWS_PROXY"
  integration_uri  = aws_lambda_function.getFavorites_function.arn
}

resource "aws_apigatewayv2_route" "getFavorites_route" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "POST /user/favorites"
  target    = "integrations/${aws_apigatewayv2_integration.getFavorites_integration.id}"
}

resource "aws_lambda_permission" "getFavorites_permission" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.getFavorites_function.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.http_api.execution_arn}/*/*"
}

resource "aws_apigatewayv2_integration" "deleteFavorites_integration" {
  api_id           = aws_apigatewayv2_api.http_api.id
  integration_type = "AWS_PROXY"
  integration_uri  = aws_lambda_function.deleteFavorites_function.arn
}

resource "aws_apigatewayv2_route" "deleteFavorites_route" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "DELETE /user/favorites"
  target    = "integrations/${aws_apigatewayv2_integration.deleteFavorites_integration.id}"
}

resource "aws_lambda_permission" "deleteFavorites_permission" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.deleteFavorites_function.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.http_api.execution_arn}/*/*"
}

resource "aws_apigatewayv2_integration" "addToCart_integration" {
  api_id           = aws_apigatewayv2_api.http_api.id
  integration_type = "AWS_PROXY"
  integration_uri  = aws_lambda_function.addToCart_function.arn
}

resource "aws_apigatewayv2_route" "addToCart_route" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "POST /user/cart"
  target    = "integrations/${aws_apigatewayv2_integration.addToCart_integration.id}"
}

resource "aws_lambda_permission" "addToCart_permission" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.addToCart_function.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.http_api.execution_arn}/*/*"
}

resource "aws_apigatewayv2_integration" "getCart_integration" {
  api_id           = aws_apigatewayv2_api.http_api.id
  integration_type = "AWS_PROXY"
  integration_uri  = aws_lambda_function.getCart_function.arn
}

resource "aws_apigatewayv2_route" "getCart_route" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "POST /user/cart/items"
  target    = "integrations/${aws_apigatewayv2_integration.getCart_integration.id}"
}

resource "aws_lambda_permission" "getCart_permission" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.getCart_function.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.http_api.execution_arn}/*/*"
}

resource "aws_apigatewayv2_integration" "removeFromCart_integration" {
  api_id           = aws_apigatewayv2_api.http_api.id
  integration_type = "AWS_PROXY"
  integration_uri  = aws_lambda_function.removeFromCart_function.arn
}

resource "aws_apigatewayv2_route" "removeFromCart_route" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "DELETE /user/cart"
  target    = "integrations/${aws_apigatewayv2_integration.removeFromCart_integration.id}"
}

resource "aws_lambda_permission" "removeFromCart_permission" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.removeFromCart_function.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.http_api.execution_arn}/*/*"
}

resource "aws_apigatewayv2_integration" "updateCart_integration" {
  api_id           = aws_apigatewayv2_api.http_api.id
  integration_type = "AWS_PROXY"
  integration_uri  = aws_lambda_function.updateCart_function.arn
}

resource "aws_apigatewayv2_route" "updateCart_route" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "PATCH /user/cart"
  target    = "integrations/${aws_apigatewayv2_integration.updateCart_integration.id}"
}

resource "aws_lambda_permission" "updateCart_permission" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.updateCart_function.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.http_api.execution_arn}/*/*"
}