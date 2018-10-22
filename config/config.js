module.exports = {
    //MongoDB configuration
    development: {
        db: process.env.DB,
        app: {
            name: 'graphql'
        }
    },
    production: {
        db: process.env.DB,
        app: {
            name: 'graphql'
        }
    }
};