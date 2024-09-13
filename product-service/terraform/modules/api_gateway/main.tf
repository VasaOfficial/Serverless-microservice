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

resource "aws_apigatewayv2_integration" "getProducts_integration" {
  api_id           = aws_apigatewayv2_api.http_api.id
  integration_type = "AWS_PROXY"
  integration_uri  = aws_lambda_function.getProducts_function.arn
}

resource "aws_apigatewayv2_route" "getProducts_route" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "POST /user/products"
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
  route_key = "POST /user/product"
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
  route_key = "POST /user/offers"
  target    = "integrations/${aws_apigatewayv2_integration.getTopOffers_integration.id}"
}

resource "aws_lambda_permission" "getTopOffers_permission" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.getTopOffers_function.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.http_api.execution_arn}/*/*"
}

resource "aws_apigatewayv2_integration" "searchProducts_integration" {
  api_id           = aws_apigatewayv2_api.http_api.id
  integration_type = "AWS_PROXY"
  integration_uri  = aws_lambda_function.searchProducts_function.arn
}

resource "aws_apigatewayv2_route" "searchProducts_route" {
  api_id    = aws_apigatewayv2_api.http_api.id
  route_key = "POST /user/searched"
  target    = "integrations/${aws_apigatewayv2_integration.searchProducts_integration.id}"
}

resource "aws_lambda_permission" "searchProducts_permission" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.searchProducts_function.function_name
  principal     = "apigateway.amazonaws.com"
  source_arn    = "${aws_apigatewayv2_api.http_api.execution_arn}/*/*"
}