module.exports = {
  async up(db, client) {
    const appsCollection = db.collection('apps');

    const jsonData = [
      {
        appName: 'Github',
        appId: 'com.github',
        version: '1.0.0',
        description: 'Monitor your Github account statistics and display key details on the link tile.',
        appIcon: 'https://cdn.jsdelivr.net/gh/selfhst/icons/svg/github.svg'
      },
      {
        appName: 'Heimdall',
        appId: 'com.heimdall',
        version: '1.0.0',
        description: 'Display Heimdall dashboard statistics and key insights directly on the link tile.',
        appIcon: 'https://cdn.jsdelivr.net/gh/selfhst/icons/svg/heimdall.svg'
      },
      {
        appName: 'HTML Code',
        appId: 'com.html',
        version: '1.0.0',
        description: 'Use HTML code to customize and display static content on the link tile.',
        appIcon: 'https://cdn.jsdelivr.net/gh/selfhst/icons/svg/chromium.svg'
      },
      {
        appName: 'Portainer',
        appId: 'com.portainer',
        version: '1.0.0',
        description: 'Show statistics from your Portainer dashboard directly on the link tile.',
        appIcon: 'https://cdn.jsdelivr.net/gh/selfhst/icons/svg/portainer.svg'
      },
      {
        appName: 'Proxmox',
        appId: 'com.proxmox',
        version: '1.0.0',
        description: 'Display Proxmox server statistics and basic metrics on the link tile.',
        appIcon: 'https://cdn.jsdelivr.net/gh/selfhst/icons/svg/proxmox.svg'
      },
      {
        appName: 'NGINX Proxy Manager',
        appId: 'com.proxyman',
        version: '1.0.0',
        description: 'Monitor basic statistics from your NGINX Proxy Manager and display them on the link tile.',
        appIcon: 'https://cdn.jsdelivr.net/gh/selfhst/icons/svg/nginx-proxy-manager.svg'
      },
      {
        appName: 'TrueNAS',
        appId: 'com.truenas.scale',
        version: '1.0.0',
        description: 'Show statistics and key metrics from your TrueNAS server on the link tile.',
        appIcon: 'https://cdn.jsdelivr.net/gh/selfhst/icons/svg/truenas-scale.svg'
      },
      {
        appName: 'YouTube',
        appId: 'com.youtube',
        version: '1.0.0',
        description: 'Display YouTube statistics, including view counts and thumbnails, on the link tile.',
        appIcon: 'https://cdn.jsdelivr.net/gh/selfhst/icons/svg/youtube.svg'
      }
    ];

    await appsCollection.insertMany(jsonData);

  },

  async down(db, client) {
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
  }
};
