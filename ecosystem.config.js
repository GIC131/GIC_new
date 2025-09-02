// ecosystem.config.js
module.exports = {
  apps: [
    {
      name: 'backend-api',
      script: './server/server.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
      },
    },
    {
      name: 'frontend-app',
      cwd: './client', // Sets the correct directory for the frontend
      script: 'npm',
      args: 'start', // Runs the "start" script from package.json
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000, // Ensures Next.js starts on the correct port
      },
    },
  ],
};