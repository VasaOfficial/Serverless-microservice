#!/bin/bash

# Navigate to the lambda directory
cd app

# Install dependencies
npm install

# Transpile TypeScript to JavaScript
npx tsc

# Create a deployment directory (adjust as needed)
mkdir -p lambda-deployment

# Copy compiled code and other necessary files to the deployment directory
cp dist/* lambda-deployment

# Copy non-dev dependencies to the deployment directory
mkdir -p lambda-deployment/node_modules
cp -r node_modules/* lambda-deployment/node_modules/

cd lambda-deployment
zip -r ../lambda.zip *
cd ..