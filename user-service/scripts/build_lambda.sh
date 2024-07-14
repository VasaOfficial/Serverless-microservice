#!/bin/bash

PROJECT_ROOT="/mnt/c/Users/Admin/Desktop/Foot_Order_Backend/user-service"

# Navigate to the lambda directory
cd $PROJECT_ROOT

# Exit immediately if a command exits with a non-zero status
set -e

# Install dependencies
npm install

# Transpile TypeScript to JavaScript
npx tsc

# Create a deployment directory (adjust as needed)
mkdir -p lambda-deployment

# Copy compiled code and other necessary files to the deployment directory
cp -r dist/* lambda-deployment

# Copy non-dev dependencies to the deployment directory
mkdir -p lambda-deployment/node_modules
cp -r node_modules/* lambda-deployment/node_modules/

cd lambda-deployment
zip -r ../lambda.zip *
cd ..