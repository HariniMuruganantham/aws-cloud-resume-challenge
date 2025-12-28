output "resume_url" {
  value = aws_cloudfront_distribution.cdn.domain_name
}

output "api_url" {
  value = "${aws_apigatewayv2_stage.prod.invoke_url}/visit"
}
