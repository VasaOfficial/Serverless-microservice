# Declare the S3 object for the Lambda function code
resource "aws_s3_object" "lambda_function_code" {
  bucket = aws_s3_bucket.product_service_s3_bucket.bucket
  key    = "lambda-build.zip"
  source = "${path.root}/../lambda-build.zip"
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