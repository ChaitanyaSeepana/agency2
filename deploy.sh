#!/bin/bash

# Step 1: Push to GitHub
git add .
git commit -m "Deploy to Render"
git push origin main

# Step 2: Deploy to Render using Render CLI
curl -s https://api.render.com/v1/services \
  -H "Authorization: Bearer $RENDER_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "agency2",
    "type": "web",
    "env": "node",
    "buildCommand": "npm install && npm run build",
    "startCommand": "npm start",
    "envVars": [
      {
        "key": "RESEND_API_KEY",
        "value": "re_PteJpSck_PwuUX7jgQSqe5Ga7JUmc5zhr"
      },
      {
        "key": "ADMIN_EMAIL",
        "value": "sahi0045@hotmail.com"
      },
      {
        "key": "NEXT_PUBLIC_SUPABASE_URL",
        "value": "https://wzdavxccbzxnxhdtcjlu.supabase.co"
      },
      {
        "key": "NEXT_PUBLIC_SUPABASE_ANON_KEY",
        "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind6ZGF2eGNjYnp4bnhoZHRjamx1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ0MTExNjQsImV4cCI6MjA1OTk4NzE2NH0.jN8zWrSEP_0SS32scSg_MwDOLjMNcJPKyw2bkUUJBqE"
      }
    ]
  }' 