module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 4000),
  admin: {
    url: '/admin',
    auth: {
      secret: env('ADMIN_JWT_SECRET', '36bafbed4fcb12724bec6d18a94c70cxb'),
    },
  },
});
