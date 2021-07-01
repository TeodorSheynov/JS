const testNumbers = {
    sumNumbers: function (num1, num2) {
        let sum = 0;

        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        } else {
            sum = (num1 + num2).toFixed(2);
            return sum
        }
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input % 2 === 0) {
            return 'The number is even!';
        } else {
            return 'The number is odd!';
        }

    },
    averageSumArray: function (arr) {

        let arraySum = 0;

        for (let i = 0; i < arr.length; i++) {
            arraySum += arr[i]
        }

        return arraySum / arr.length
    }
};







const { assert } = require('chai');

describe("Tests …", function() {
    describe("sumNumbers function", function() {
        it("should return undefined if any input is not a number", function() {
            assert.equal(testNumbers.sumNumbers('string',5),undefined);
            assert.equal(testNumbers.sumNumbers(5,'string'),undefined);
            assert.equal(testNumbers.sumNumbers(5,'string'),undefined);
            assert.equal(testNumbers.sumNumbers(),undefined);
        });
        it("should return the sum of the two number with fixed 2",()=>{
            assert.equal(testNumbers.sumNumbers(5,5),10);
            assert.equal(testNumbers.sumNumbers(-5,5),0);
            assert.equal(testNumbers.sumNumbers(2.55,5),7.55);
            assert.equal(testNumbers.sumNumbers(2.54346224,5),7.54);
            assert.equal(testNumbers.sumNumbers(-2.323,5),2.68);
        })
     });
    
     describe("numberChecker function",()=>{
         it("should throw error when input is NaN",()=>{
            assert.throw(()=>testNumbers.numberChecker(NaN),Error);
            assert.throw(()=>testNumbers.numberChecker('string'),Error);
            assert.throw(()=>testNumbers.numberChecker(),Error);
         })
         it("should return even when number is even",()=>{
             assert.equal(testNumbers.numberChecker(4),'The number is even!');
             assert.equal(testNumbers.numberChecker(-2),'The number is even!');
             assert.equal(testNumbers.numberChecker(-2424242424),'The number is even!');
         })
         it("should return even when number is odd",()=>{
            assert.equal(testNumbers.numberChecker(5),'The number is odd!');
            assert.equal(testNumbers.numberChecker(-3),'The number is odd!');
            assert.equal(testNumbers.numberChecker(-35.6356),'The number is odd!');
        })
        
     });
     describe("avarageSumArray function",()=>{
         it("should return the average sum of array",()=>{
             let array1=[1,2,3,4];
             assert.equal(testNumbers.averageSumArray(array1),2.5);
         })
         it("should return the average sum of array",()=>{
            let array1=[-1,-2,-3,-4];
            assert.equal(testNumbers.averageSumArray(array1),-2.5);
        })
     })
     // TODO: …
});