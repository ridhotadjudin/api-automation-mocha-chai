const request = require('supertest');
const { expect } = require('chai');
const data = require('../data/userData.js')

const baseUrl = 'https://petstore.swagger.io/v2';
const testData = data.CREATE_USER_DATA_2;

describe('CREATE User', function () {
    const response = request(baseUrl)
        .post('/user')
        .send(testData);
    it('response status is 200', async () => {
        expect((await response).status).to.equal(200);
    });
    it('message is equal to ID', async () => {
        expect((await response).body.message).to.equal(`${testData.id}`);
    });
});
