#!/bin/bash

# Navigate to the app directory
cd app

# Install dependencies
npm install

# Create a layer directory structure
mkdir -p lambda-layer/nodejs

# Copy node_modules to the layer directory
cp -r node_modules lambda-layer/nodejs/

# Create a ZIP file of the layer directory
cd lambda-layer
zip -r ../layer.zip *
cd ..

# Navigate back to the root directory
cd ..