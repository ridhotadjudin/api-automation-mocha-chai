const request = require('supertest');
const {expect} = require('chai');
const baseUrl = 'https://petstore.swagger.io/v2';

describe('Chai Assert - PET STORE', function(){
    it('response status is 200', async () => {
        const response = request(baseUrl)
        .get('/store/inventory');
        expect((await response).status).to.equal(200);
    });
});
