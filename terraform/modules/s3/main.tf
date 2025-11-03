# --- S3 bucket for static website ---
resource "aws_s3_bucket" "frontend" {
  bucket = var.bucket_name

}

resource "aws_s3_bucket_website_configuration" "frontend_website" {
  bucket = aws_s3_bucket.frontend.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}

# --- Public read policy (read-only objects) ---
resource "aws_s3_bucket_policy" "public_read" {
  bucket = aws_s3_bucket.frontend.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "PublicReadGetObject"
        Effect    = "Allow"
        Principal = "*"
        Action    = ["s3:GetObject"]
        Resource  = "${aws_s3_bucket.frontend.arn}/*"
      }
    ]
  })
}

# --- Build frontend ---
resource "null_resource" "build_frontend" {
  triggers = {
    api_url = var.api_url
  }

  provisioner "local-exec" {
    working_dir = var.build_dir
    command     = "npm ci && VITE_API_URL=${var.api_url} npm run build"
  }

  depends_on = [local_file.vite_env]
}

# --- Upload build artifacts ---
resource "aws_s3_object" "site_files" {
  for_each = fileset("${var.build_dir}/dist", "**/*")
  bucket   = aws_s3_bucket.frontend.id
  key      = each.value
  source   = "${var.build_dir}/dist/${each.value}"
  etag     = filemd5("${var.build_dir}/dist/${each.value}")

  depends_on = [null_resource.build_frontend]
}
