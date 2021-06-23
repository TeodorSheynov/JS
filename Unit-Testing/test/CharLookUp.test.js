const lookupChar=require("../03-CharLookUp");
let {assert}=require('chai');

describe('testing with incorect inputs',()=>{
    it('should return undefined when first arg is not a string',()=>{
        let actualResult=lookupChar(6,6);
        assert.equal(actualResult,undefined);
    });

    it('should return undefined when first arg undefined',()=>{
        let actualResult=lookupChar(undefined,6);
        assert.equal(actualResult,undefined);
    });
    it('should return undefined when second arg is floating point',()=>{
        let actualResult=lookupChar('teo',2.2);
        assert.equal(actualResult,undefined);
    });
    it('should return undefined when second arg undefined',()=>{
        let actualResult=lookupChar('teo');
        assert.equal(actualResult,undefined);
    });
    it('should return undefined when second arg undefined',()=>{
        let actualResult=lookupChar(6);
        assert.equal(actualResult,undefined);
    });
    it('should return undefined when first arg empty',()=>{
        let actualResult=lookupChar('',0);
        assert.equal(actualResult,'Incorrect index');
    });

    it('should return undefined when second arg is not a number',()=>{
        let actualResult=lookupChar('teo','t');
        assert.equal(actualResult,undefined);
    });
    it('should return Incorrect index when second arg is bigger than the 1st arg lenght',()=>{
        let actualResult=lookupChar('teo',3);
        assert.equal(actualResult,'Incorrect index');
    })
    it('should return Incorrect index when second arg is bigger than the 1st arg lenght',()=>{
        let actualResult=lookupChar('teo',-3);
        assert.equal(actualResult,'Incorrect index');
    })
    
    
});
describe('testing with valid inputs',()=>{


    it('should return the value of the given index',()=>{
        let actualResult=lookupChar('teo',1);
        let expectedResult='e';
        assert.equal(actualResult,expectedResult);
    });
});