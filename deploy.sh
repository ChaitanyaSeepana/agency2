#!/bin/bash

# Push to GitHub
git add .
git commit -m "Simplify email route for deployment"
git push origin main

echo "Code pushed to GitHub. Now go to Render dashboard and deploy!" 