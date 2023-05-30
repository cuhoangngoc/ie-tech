module.exports = {
  apps: [
    {
      script: 'npm start',
    },
  ],

  deploy: {
    production: {
      key: 'key.pem',
      user: 'ubuntu',
      host: '13.250.104.75',
      ref: 'origin/main',
      repo: 'git@github.com:buckpotter/ie-tech.git',
      path: '/home/ubuntu',
      'pre-deploy-local': '',
      'post-deploy':
        'source ~/.nvm/nvm.sh && npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': '',
      ssh_options: 'ForwardAgent=yes',
    },
  },
};
