# Microservices Project - Node.js, AWS Lambda, RDS, Terraform

This project consists of three microservices: user-service, transaction-service, and product-service. Each microservice is built using Node.js, deployed as AWS Lambda functions, and uses RDS as the backend database. The infrastructure is provisioned using Terraform, and CI/CD is managed with GitHub Actions.
<br />

## Architecture diagram
![Screenshot_1](https://github.com/user-attachments/assets/07ec8d47-0342-4585-addc-69320439176b)

<br />

## API Architecture diagram

![Screenshot_2](https://github.com/user-attachments/assets/51e990ed-5339-4655-ba57-32b4bc190aa7)

<br />

## CI/CD Pipeline diagram

![Screenshot_4](https://github.com/user-attachments/assets/f3e30a3a-6b14-4dc4-8464-2a44a293da62)



This project was made mostly with node.js lambda functions using clean architecture, this means that the code is very modular and can be edited easly.

Technologies Used
Node.js
AWS Lambda
Amazon RDS (PostgreSQL)
Terraform
GitHub Actions
API Gateway

Microservices Overview
1. User Service
Handles user management operations like authentication using firebase, cart and favorites functionalities.

2. Transaction Service
Handles operations related to user transactions such as payments and orders.

3. Product Service
Manages product data, including product listing and updates.
