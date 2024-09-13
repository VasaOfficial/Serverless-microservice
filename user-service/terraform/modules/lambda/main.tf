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

// lambda functions
resource "aws_lambda_function" "signup_function" {
  function_name    = "signup"

  s3_bucket        = aws_s3_bucket.user_service_s3_bucket.id
  s3_key           = aws_s3_object.lambda_function_code.key

  role             = aws_iam_role.lambda_exec_role.arn
  handler          = "dist/handler.SignUp"
  runtime          = "nodejs18.x"

  vpc_config {
    security_group_ids = [aws_security_group.lambda_sg.id]
    subnet_ids         = [aws_subnet.private_subnet.id]
  }

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

  vpc_config {
    security_group_ids = [aws_security_group.lambda_sg.id]
    subnet_ids         = [aws_subnet.private_subnet.id]
  }

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

  vpc_config {
    security_group_ids = [aws_security_group.lambda_sg.id]
    subnet_ids         = [aws_subnet.private_subnet.id]
  }

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

  vpc_config {
    security_group_ids = [aws_security_group.lambda_sg.id]
    subnet_ids         = [aws_subnet.private_subnet.id]
  }

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

  vpc_config {
    security_group_ids = [aws_security_group.lambda_sg.id]
    subnet_ids         = [aws_subnet.private_subnet.id]
  }

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

  vpc_config {
    security_group_ids = [aws_security_group.lambda_sg.id]
    subnet_ids         = [aws_subnet.private_subnet.id]
  }

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

  vpc_config {
    security_group_ids = [aws_security_group.lambda_sg.id]
    subnet_ids         = [aws_subnet.private_subnet.id]
  }

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

  vpc_config {
    security_group_ids = [aws_security_group.lambda_sg.id]
    subnet_ids         = [aws_subnet.private_subnet.id]
  }

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

  vpc_config {
    security_group_ids = [aws_security_group.lambda_sg.id]
    subnet_ids         = [aws_subnet.private_subnet.id]
  }

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

  vpc_config {
    security_group_ids = [aws_security_group.lambda_sg.id]
    subnet_ids         = [aws_subnet.private_subnet.id]
  }

  environment {
    variables = local.firebase_env
  }
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