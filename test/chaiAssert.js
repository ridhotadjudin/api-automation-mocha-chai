const { expect } = require('chai');
const { describe, it } = require('mocha');
const app = require('../app.js');

describe('App', function(){
    it('app should return welcome message', function(){
        let response = app();
        expect(response).to.equal("Welcome to API Automation using Mocha Chai");
    });
});