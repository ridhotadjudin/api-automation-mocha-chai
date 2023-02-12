const request = require('supertest');

const baseUrl = 'http://restapi.adequateshop.com';
const appendUrl = '/api/AuthAccount/Login';

module.exports = function () {
    const response = request(baseUrl)
        .post(appendUrl)
        .send({
            "email": "testramdan@email.com",
            "password": "123456"
        });
    let token = response.body.data.token;

    return token;
};