const dotenv = require('dotenv').config();

module.exports = {
    PORT: process.env.PORT || 8080,
    DIR: __dirname,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    EMAIL_FROM: process.env.EMAIL_FROM
}