module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  url: 'https://infographic.dev/api',
  proxy: true,
  port: env.int('PORT', 1337),
  admin: {
    url: 'https://infographic.dev/dashboard',
    /*auth: {
      secret: env('ADMIN_JWT_SECRET')
    }*/
  },
});
