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

resource "aws_apigatewayv2_integration" "createOrder_integration" {
  api_id           = aws_apigatewayv2_api.http_api.id
  integration_type = "AWS_PROXY"
  integration_uri  = aws_lambda_function.createOrder_function.arn
}

resource "aws_apigatewayv2_route" "createOrder_route" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "POST /user/order"
  target    = "integrations/${aws_apigatewayv2_integration.createOrder_integration.id}"
}

resource "aws_lambda_permission" "createOrder_permission" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.createOrder_function.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.http_api.execution_arn}/*/*"
}

resource "aws_apigatewayv2_integration" "processPayment_integration" {
  api_id           = aws_apigatewayv2_api.http_api.id
  integration_type = "AWS_PROXY"
  integration_uri  = aws_lambda_function.processPayment_function.arn
}

resource "aws_apigatewayv2_route" "processPayment_route" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "POST /user/payment"
  target    = "integrations/${aws_apigatewayv2_integration.processPayment_integration.id}"
}

resource "aws_lambda_permission" "processPayment_permission" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.processPayment_function.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.http_api.execution_arn}/*/*"
}