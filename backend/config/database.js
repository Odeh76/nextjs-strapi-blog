const path = require('path');

module.exports = ({ env }) => {
  if (env('NODE_ENV') === 'production') {
    return {
      connection: {
        client: 'postgres',
        connection: {
          host: env('DATABASE_HOST', 'db-postgresql-sfo3-02783-do-user-10854830-0.b.db.ondigitalocean.com'),
          port: env.int('DATABASE_PORT', 25060),
          database: env('DATABASE_NAME', 'defaultdb'),
          user: env('DATABASE_USERNAME', 'doadmin'),
          password: env('DATABASE_PASSWORD', 'AVNS_FocYjOuDHyFtB_FHsT4'),
          ssl: {
            rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false),
          },
        },
        debug: false,
      },
    };
  }

  return {
    connection: {
      client: 'sqlite',
      connection: {
        filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
      },
      useNullAsDefault: true,
    }
  }  
};