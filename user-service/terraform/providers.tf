terraform {
// providers
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  random = {
    source  = "hashicorp/random"
    version = "~> 3.5.1"
  }
  archive = {
    source  = "hashicorp/archive"
    version = "~> 2.3.0"
  }
 }

 required_version = "~> 1.9"

  backend "s3" {
    bucket = "user-service-tf-backend"
    key    = "user-service/terraform/terraform.tfstate"
    region = "eu-central-1"
  }
}

provider "aws" {
  region = "eu-central-1"
}
