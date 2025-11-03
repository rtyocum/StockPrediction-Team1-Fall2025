variable "bucket_name" {
  type        = string
  description = "Name of the S3 bucket for the static frontend"
}

variable "build_dir" {
  type        = string
  description = "Path to local directory containing the frontend source (with package.json)"
}

variable "api_url" {
  type        = string
  description = "Backend API URL to inject into frontend config"
}

variable "region" {
  type        = string
  description = "AWS region"
  default     = "us-east-1"
}
