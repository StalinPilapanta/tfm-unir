environment = "dev"

resource_name = "dev"

# VPC
cidr            = "10.0.0.0/16"
private_subnets = ["10.0.1.0/24", "10.0.2.0/24", "10.0.3.0/24"]
public_subnets  = ["10.0.4.0/24", "10.0.5.0/24", "10.0.6.0/24"]


# EKS
cluster_version                = 1.29
node_name                      = "node-group-1"
ami_type                       = "AL2_x86_64"
instance_types                 = ["t3.small"]
cluster_endpoint_public_access = "true"
enable_nat_gateway             = "true"
enable_dns_hostnames           = "true"
single_nat_gateway             = "true"
