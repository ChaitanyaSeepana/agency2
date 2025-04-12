// Simple script to check if all required environment variables are set
const fs = require('fs');
const path = require('path');

// Read the .env.local file
const envPath = path.resolve(process.cwd(), '.env.local');
let envContent = '';

try {
  envContent = fs.readFileSync(envPath, 'utf8');
} catch (error) {
  console.error('Error reading .env.local file:', error.message);
  process.exit(1);
}

// Parse the .env.local file
const envVars = {};
envContent.split('\n').forEach(line => {
  const match = line.match(/^([^#=]+)=(.*)$/);
  if (match) {
    const [, key, value] = match;
    envVars[key.trim()] = value.trim();
  }
});

// Check for required environment variables
const requiredVars = [
  'NEXT_PUBLIC_SUPABASE_URL',
  'NEXT_PUBLIC_SUPABASE_ANON_KEY',
  'SMTP_HOST',
  'SMTP_PORT',
  'SMTP_USER',
  'SMTP_PASSWORD',
  'RESEND_API_KEY'
];

const missingVars = requiredVars.filter(key => !envVars[key]);

if (missingVars.length > 0) {
  console.error('Missing required environment variables:');
  missingVars.forEach(key => console.error(`- ${key}`));
  process.exit(1);
} else {
  console.log('All required environment variables are set!');
  console.log('Environment variables found:');
  Object.keys(envVars).forEach(key => {
    // Mask sensitive values
    const value = key.includes('KEY') || key.includes('PASSWORD') 
      ? '********' 
      : envVars[key];
    console.log(`- ${key}: ${value}`);
  });
} 