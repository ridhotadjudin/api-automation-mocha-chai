const request = require('supertest');
const {expect} = require('chai');
const baseUrl = 'https://restful-booker.herokuapp.com';

describe('Get Booking All', function(){
    it('response status is 200', async () => {
        const response = request(baseUrl)
        .get('/booking');
        //console.log((await response).status)
        //console.log((await response).body)
        expect((await response).status).to.equal(200);
    });
});
