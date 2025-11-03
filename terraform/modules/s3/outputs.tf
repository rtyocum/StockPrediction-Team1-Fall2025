# --- Outputs ---
output "website_url" {
  value = aws_s3_bucket.frontend.website_endpoint
}

output "bucket_name" {
  value = aws_s3_bucket.frontend.bucket
}
