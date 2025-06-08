#resource "aws_instance" "jenkins" {
#  ami                         = "ami-0230bd60aa48260c6" # Reemplaza con la AMI apropiada para tu región.
#  instance_type               = "t3.medium"
#  subnet_id                   = module.vpc.public_subnets[1]
#  associate_public_ip_address = true
#
#  tags = {
#    Name = "JenkinsInstance"
#  }
#
#  user_data = file("${path.module}/user_data.sh") # Script para instalar Docker y Jenkins.
#
#  key_name               = "DevopsKey" # Asegúrate de tener una llave SSH en tu cuenta de AWS y reemplaza aquí.
#  vpc_security_group_ids = [aws_security_group.jenkins_sg_eks.id]
#
#}
#
#resource "aws_security_group" "jenkins_sg_eks" {
#  name        = "jenkins_sg_eks"
#  description = "Allow SSH, HTTP, and Jenkins"
#  vpc_id      = module.vpc.vpc_id
#
#  tags = {
#    Name = "jenkins_sg_eks"
#  }
#
#
#  ingress {
#    from_port   = 22
#    to_port     = 22
#    protocol    = "tcp"
#    cidr_blocks = ["0.0.0.0/0"]
#  }
#
#  ingress {
#    from_port   = 80
#    to_port     = 80
#    protocol    = "tcp"
#    cidr_blocks = ["0.0.0.0/0"]
#  }
#
#  ingress {
#    from_port   = 8080
#    to_port     = 8080
#    protocol    = "tcp"
#    cidr_blocks = ["0.0.0.0/0"]
#  }
#
#  egress {
#    from_port   = 0
#    to_port     = 0
#    protocol    = "-1"
#    cidr_blocks = ["0.0.0.0/0"]
#  }
#}
#
#output "instance_ip_addr" {
#  value = aws_instance.jenkins.public_ip
#}