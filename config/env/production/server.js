module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  url: 'https://infographic.dev/api',
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: "${process.env.ADMIN_JWT_SECRET}"
    },
  },
});
