# Agency Website

A modern, responsive website built with Next.js and Tailwind CSS.

## Features

- Responsive design
- Modern UI components
- Contact form with email integration
- Blog section
- Services showcase
- Team member profiles

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd agency-website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
   - Copy `.env.example` to `.env.local`
   - Fill in your environment variables, especially `RESEND_API_KEY`

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Environment Variables

Before deploying, make sure to set up the following environment variables in your hosting platform:

- `NEXT_PUBLIC_SUPABASE_URL`: Your Supabase URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Your Supabase anonymous key
- `SMTP_HOST`: Your SMTP host (e.g., smtp.gmail.com)
- `SMTP_PORT`: Your SMTP port (e.g., 587)
- `SMTP_USER`: Your email address
- `SMTP_PASSWORD`: Your email password or app password
- `RESEND_API_KEY`: Your Resend API key

### Deploying to Render

#### Option 1: Using render.yaml (Recommended)

1. Push your code to a GitHub repository
2. Log in to your Render account
3. Click "New" and select "Blueprint"
4. Connect your GitHub repository
5. Render will automatically detect the `render.yaml` file and configure your service
6. Add your environment variables in the Render dashboard
7. Click "Apply" to deploy

#### Option 2: Manual Deployment

1. Push your code to a GitHub repository
2. Log in to your Render account
3. Click "New" and select "Web Service"
4. Connect your GitHub repository
5. Configure the service:
   - Name: `agency-website`
   - Environment: `Node`
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`
6. Add your environment variables in the Render dashboard
7. Click "Create Web Service" to deploy

### Other Deployment Platforms

For other platforms, ensure you:

1. Set all required environment variables
2. Use the correct build and start commands
3. Configure the platform to use Node.js 18.x or later

## Project Structure

```
agency-website/
├── app/                 # Next.js app directory
├── components/          # React components
├── public/             # Static assets
├── styles/             # Global styles
├── lib/                # Utility functions
└── content/            # Content files
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 