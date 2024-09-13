resource "aws_db_subnet_group" "main" {
  name       = "my-db-subnet-group"
  subnet_ids = [aws_subnet.private_subnet.id]
}

resource "aws_db_instance" "mydb" {
  allocated_storage    = 20
  storage_type         = "gp2"
  engine               = "postgres"
  engine_version       = "8.0"
  instance_class       = "db.t3.micro"
  username             = "admin"
  password             = "password"
  parameter_group_name = "default.postgres8"
  publicly_accessible  = false
  vpc_security_group_ids = [aws_security_group.lambda_sg.id]
  db_subnet_group_name = aws_db_subnet_group.main.name
}
