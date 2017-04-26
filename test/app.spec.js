'use strict';

var expect = require('chai').expect;
var app = require('../app/app');

describe('reverseNumber', function ()
{
    it('return reversed numbers ', function () {
        expect(app.reverseNumber(881436389)).to.eql(983634188);
    });


    /*it('is not number', function()
     {
     expect(app.reverseNumber('ddd3')).to.eql(false);
     });*/
});

describe('returnOnlyLetter', function ()
{
    it('return  letters', function()
    {
        expect(app.returnOnlyLetter(881436389)).to.eql(false);
    });
    /*
     it('return  letters', function()
     {
     expect(app.returnOnlyLetter('zxcv')).to.eql('zxcv');
     });
     it('return  letters', function()
     {
     expect(app.returnOnlyLetter('zxc222')).to.eql('zxc');
     });*/
});

describe('isEmail', function ()
{
    it('return checked email true', function(){
        expect(app.isEmail("smithhero1994@o2.pl")).to.eql(true);
    });
    /*it('return checked email false', function(){
     expect(app.isEmail("smithhero1994.pl")).to.eql(false);
     });
     it('return checked email false', function(){
     expect(app.isEmail("smithhero1994@pl")).to.eql(false);
     });*/
});
