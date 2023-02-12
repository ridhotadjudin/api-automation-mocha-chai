const request = require('supertest');
const { expect } = require('chai');
// const auth = require('./auth.js');

const baseUrl = 'http://restapi.adequateshop.com';

const response = request(baseUrl)
    .post('/api/AuthAccount/Login')
    .send({
        "email": "testramdan@email.com",
        "password": "123456"
    });

//const token = response.body.data.token;

describe('Get User', async () => {
    const response = request(baseUrl)
        .get('/api/Users?page=1')
        .set({ 'Authorization': token});
    console.log((await response).body);
    it('response status is 200', async () => {
        expect((await response).status).to.equal(200);
    });
});