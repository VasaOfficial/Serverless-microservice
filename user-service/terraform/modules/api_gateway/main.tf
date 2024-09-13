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