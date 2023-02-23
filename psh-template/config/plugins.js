module.exports = ({ env }) => ({
    // ...
    email: {
      config: {
        provider: 'nodemailer',
        providerOptions: {
          host: env('SMTP_HOST', 'smtp.example.com'),
          port: env('SMTP_PORT', 587),
          auth: {
            user: env('SMTP_USERNAME'),
            pass: env('SMTP_PASSWORD'),
          },
          // ... any custom nodemailer options
        },
        settings: {
          defaultFrom: env('EMAIL_DEFAULT_FROM', 'hello@example.com'),
          defaultReplyTo: env('EMAIL_DEFAULT_REPLY_TO', 'hello@example.com'),
        },
      },
    },
    // ...
    graphql: {
        config: {
            endpoint: '/graphql',
            shadowCRUD: true,
            playgroundAlways: false,
            depthLimit: 7,
            amountLimit: 100,
            apolloServer: {
            tracing: false,
            },
        },
        },
  });
