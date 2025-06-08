variable "region" {
  type    = string
  default = "us-east-1"
}

variable "remote-backend" {
  type    = string
  default = "terraform-remote-state-projects"
}

variable "resource_name" {
  description = "Enter the name of EKS and VPC resource"
}

variable "cidr" {
  description = "Enter cidr block"
}

variable "private_subnets" {
  description = "Enter the private subnets"
}

variable "public_subnets" {
  description = "Enter the public subnets"
}

variable "enable_nat_gateway" {
  description = "Enter the value of enable nat gateway"
}

variable "single_nat_gateway" {
  description = "Enter the value of single nat gateway"
}

variable "enable_dns_hostnames" {
  description = "Enter the value of enable dns hostnames"
}

variable "cluster_version" {
  description = "Enter the cluster version"
}

variable "cluster_endpoint_public_access" {
  description = "Enter the cluster_endpoint_public_access"
}

variable "ami_type" {
  description = "Enter the ami type"
}

variable "node_name" {
  description = "Enter the name of node"
}

variable "instance_types" {
  description = "Enter the instance types"
}