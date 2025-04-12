#!/bin/bash

# Exit on error
set -e

echo "🚀 Starting build process..."

# Check environment variables
echo "🔍 Checking environment variables..."
node check-env.js
if [ $? -ne 0 ]; then
    echo "❌ Environment check failed. Please fix the issues and try again."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the application
echo "🏗️ Building the application..."
npm run build

echo "✅ Build completed successfully!"
echo "🚀 You can now deploy your application to Render or any other platform." 