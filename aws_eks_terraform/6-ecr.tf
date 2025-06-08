resource "aws_ecr_repository" "mi_repositorio_ecr" {
  name                 = "${var.resource_name}-ecr" # El nombre que deseas para el repositorio de ECR
  image_tag_mutability = "MUTABLE"                  # O "IMMUTABLE" si prefieres que las etiquetas de imagen no se puedan sobrescribir

  image_scanning_configuration {
    scan_on_push = true # Habilita el escaneo de imágenes en push para vulnerabilidades
  }

}

resource "aws_ecr_repository_policy" "mi_repositorio_ecr_policy" {
  repository = aws_ecr_repository.mi_repositorio_ecr.name

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Sid       = "NewPolicy",
        Effect    = "Allow",
        Principal = "*",
        Action = [
          "ecr:GetDownloadUrlForLayer",
          "ecr:BatchGetImage",
          "ecr:BatchCheckLayerAvailability"
        ],
      },
    ],
  })
}