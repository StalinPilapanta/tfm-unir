# Copyright (c) HashiCorp, Inc.
# SPDX-License-Identifier: MPL-2.0
terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
    }
  }

  backend "s3" {
    bucket = "terraform-remote-state-projects-cspilapa"
    key    = "project/eks-aws"
    region = "us-east-1"
  }

}

provider "aws" {
  region = var.region
}
