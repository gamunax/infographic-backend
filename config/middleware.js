module.exports = {
  settings: {
    cors: {
      origin: [
        'http://localhost:5811',
        'http://localhost:4200',
        'http://localhost:4000',
        'http://localhost:3000',
        'https://infographic.dev',
        'https://www.infographic.dev',
        'http://159.65.237.96',
      ]
    },
    gzip: {
      enabled: true,
      options: {
        br: false
      }
    }

  }
}