const isOddOrEven=require('../02-EvenOdd');
const {assert}=require('chai');

describe('Test is even or odd functionality',()=>{

    it('should return even when the string is even => pass',()=>{
        
        let actualResult=isOddOrEven('tedo');
        assert.equal(actualResult,'even');
    });
    it('Should return odd when the string is odd => pass',()=>{

        let actualResult=isOddOrEven('ted');
        assert.equal(actualResult,'odd');
    });
    it('Should retrn undefined when the passed argument is not a string',()=>{
        let actualResult=isOddOrEven(9);
        assert.equal(actualResult,undefined);
    });
});