const mathEnforcer=require('../04-MathEnforcer');
let {assert}=require('chai');
describe('testing MathEnforcer Functionality',()=>{


    describe('Testing with correct values',()=>{
        it('should return the number with increased value +5',()=>{
            let result=mathEnforcer.addFive(5);
            assert.equal(result,10);
        });
        it('should return the number subtracted by 10',()=>{
            let result=mathEnforcer.subtractTen(5);
            assert.equal(result,-5);
        });
        it('should return the sum of two numbers',()=>{
            let result=mathEnforcer.sum(5,5);
            assert.equal(result,10);
        })
    })

    describe('Testing with incorrect values',()=>{
        it('shoul return undefined if input is not a number',()=>{
            let result=mathEnforcer.addFive('g');
            let result2=mathEnforcer.subtractTen('g');
            let result3=mathEnforcer.sum('g','g');
            assert.equal(result,undefined);
            assert.equal(result2,undefined);
            assert.equal(result3,undefined);
        })
        it('shoul return undefined if input is not a number',()=>{
            let result=mathEnforcer.sum('g',2);
            assert.equal(result,undefined);
        })
        it('shoul return undefined if input is not a number',()=>{
            let result=mathEnforcer.sum();
            assert.equal(result,undefined);
        })
        it('shoul return undefined if input is not a number',()=>{
            let result=mathEnforcer.addFive();
            assert.equal(result,undefined);
        })
        it('shoul return undefined if input is not a number',()=>{
            let result=mathEnforcer.subtractTen();
            assert.equal(result,undefined);
        })
        it('shoul return undefined if input is not a number',()=>{
            let result=mathEnforcer.subtractTen(-5.5);
            assert.closeTo(result,-15.5,0.1);
        })
        it('shoul return undefined if input is not a number',()=>{
            let result=mathEnforcer.sum(2);
            assert.equal(result,undefined);
        })
        it('shoul return undefined if input is not a number',()=>{
            let result=mathEnforcer.sum('g');
            assert.equal(result,undefined);
        })
        
        it('shoul return undefined if input is not a number',()=>{
            let result=mathEnforcer.addFive(2,2);
            assert.equal(result,7);
        })
        it('shoul return undefined if input is not a number',()=>{
            let result=mathEnforcer.addFive(2.2);
            assert.closeTo(result,7.2,0.1);
        })
        it('shoul return the sum of two floating point numbers',()=>{
            let result=mathEnforcer.sum(2.2,0.3);
            assert.closeTo(result,2.5,0.1);
        })
        it('shoul return number when subtracting negative values',()=>{
            let result=mathEnforcer.subtractTen(-10);
            assert.equal(result,-20);
        })
        it('shoul return correct number after sum of two negative values',()=>{
            let result=mathEnforcer.sum(-10,-5);
            assert.equal(result,-15);
        })
        it('shoul return correct number after sum of two negative values',()=>{
            let result=mathEnforcer.sum(-10,5);
            assert.equal(result,-5);
        })
        it('shoul return correct number after sum of two negative values',()=>{
            let result=mathEnforcer.sum('5',5);
            assert.equal(result,undefined);
        })
    })
})