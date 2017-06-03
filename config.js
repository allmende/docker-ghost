// # Ghost Configuration
// Setup your Ghost install for various environments
// Documentation can be found at http://docs.ghost.org/usage/configuration/

var path = require('path'),
    config;

config = {
    // ### Development **(default)**
    development: {
        // The url to use when providing links to the site, E.g. in RSS and email.
        url: process.env.GHOST_URL,
        mail: {
            transport: 'SMTP',
            options: {
                host: process.env.MAIL_HOST,
                secureConnection: false,
		requireTLS: true,
                port: process.env.MAIL_PORT,
                auth: {
                    user: process.env.MAIL_USERNAME,
                    pass: process.env.MAIL_PASSWORD,
                },
            },
            from: process.env.MAIL_FROM
        },
        database: {
            client: 'mysql',
            connection: {
                host     : process.env.MYSQL_HOST,
                user     : process.env.MYSQL_USER,
                password : process.env.MYSQL_PASSWORD,
                database : process.env.MYSQL_DATABASE,
                charset  : 'utf8'
            },
            debug: false
        },

        server: {
            // Host to be passed to node's `net.Server#listen()`
            host: '0.0.0.0',
            // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
            port: '2368'
        },
        paths: {
            contentPath: path.join(process.env.GHOST_CONTENT, '/')
        }
    },

    // ### Production
    // When running Ghost in the wild, use the production environment
    // Configure your URL and mail settings here
    production: {
        url: process.env.GHOST_URL,
        forceAdminSSL: process.env.PROD_FORCE_ADMIN_SSL,
        mail: {
            transport: 'SMTP',
            options: {
                host: process.env.MAIL_HOST,
                secureConnection: true,
                port: process.env.MAIL_PORT,
                auth: {
                    user: process.env.MAIL_USERNAME,
                    pass: process.env.MAIL_PASSWORD,
                },
            },
            from: process.env.MAIL_FROM
        },
        database: {
            client: 'mysql',
            connection: {
                host     : process.env.MYSQL_HOST,
                user     : process.env.MYSQL_USER,
                password : process.env.MYSQL_PASSWORD,
                database : process.env.MYSQL_DATABASE,
                charset  : 'utf8'
            },
            debug: false
        },
        server: {
            // Host to be passed to node's `net.Server#listen()`
            host: '0.0.0.0',
            // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
            port: '2368'
        },
        paths: {
            contentPath: path.join(process.env.GHOST_CONTENT, '/')
        },
        logging: false
    }

};

// Export config
module.exports = config;
