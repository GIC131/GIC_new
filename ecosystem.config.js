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
      cwd: './client', // Change working directory to the 'client' folder
      script: 'npm',
      args: 'start',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'production',
        PORT: 3000, // Ensure Next.js starts on port 3000
      },
    },
  ],
};