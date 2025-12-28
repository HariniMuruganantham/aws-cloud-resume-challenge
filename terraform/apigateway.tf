resource "aws_apigatewayv2_api" "api" {
  name          = "visitor-api"
  protocol_type = "HTTP"

  cors_configuration {
    allow_origins = ["*"]
    allow_methods = ["GET"]
    allow_headers = ["content-type"]
  }
}

resource "aws_apigatewayv2_integration" "lambda" {
  api_id                = aws_apigatewayv2_api.api.id
  integration_type      = "AWS_PROXY"
  integration_uri       = aws_lambda_function.counter.invoke_arn
  integration_method    = "POST"
  payload_format_version = "2.0"
  timeout_milliseconds = 30000
}

resource "aws_apigatewayv2_route" "route" {
  api_id    = aws_apigatewayv2_api.api.id
  route_key = "GET /visit"
  target    = "integrations/${aws_apigatewayv2_integration.lambda.id}"
}
