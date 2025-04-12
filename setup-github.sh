#!/bin/bash

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "Node.js is not installed. Please install Node.js and try again."
    exit 1
fi

# Check environment variables
echo "Checking environment variables..."
node check-env.js
if [ $? -ne 0 ]; then
    echo "Environment check failed. Please fix the issues and try again."
    exit 1
fi

# Install dependencies
echo "Installing dependencies..."
npm install

# Initialize Git repository
echo "Initializing Git repository..."
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit"

# Instructions for pushing to GitHub
echo "To push to GitHub, follow these steps:"
echo "1. Create a new repository on GitHub (https://github.com/new)"
echo "2. Run the following commands (replace with your repository URL):"
echo "   git remote add origin https://github.com/yourusername/your-repo-name.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo ""
echo "After pushing to GitHub, you can deploy to Render using the instructions in the README.md file." 