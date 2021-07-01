const numberOperations = {
    powNumber: function (num) {
        return num * num;
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input < 100) {
            return 'The number is lower than 100!';
        } else {
            return 'The number is greater or equal to 100!';
        }
    },
    sumArrays: function (array1, array2) {

        const longerArr = array1.length > array2.length ? array1 : array2;
        const rounds = array1.length < array2.length ? array1.length : array2.length;

        const resultArr = [];

        for (let i = 0; i < rounds; i++) {
            resultArr.push(array1[i] + array2[i]);
        }

        resultArr.push(...longerArr.slice(rounds));

        return resultArr
    }
};


const assert=require('chai');
describe("Tests …", ()=> {
    describe("powNumber function", ()=> {
        it("check if the given number is powered", ()=> {
            
            assert.equal(numberOperations.powNumber(2),4);
        });

     });
     describe("numberChecker function",()=>{
         it("should throw an error when input is NaN",()=>{
             assert.throw(()=>numberOperations.numberChecker(),Error);
             assert.throw(()=>numberOperations.numberChecker(NaN),Error);
             assert.throw(()=>numberOperations.numberChecker('string'),Error);
         })
         it("should return error when is less than 100",()=>{
             assert.equal(numberOperations.numberChecker(99.9),'The number is lower than 100!');
             assert.equal(numberOperations.numberChecker(Number.MIN_VALUE),'The number is lower than 100!')
             assert.equal(numberOperations.numberChecker(-23.4),'The number is lower than 100!');
         })
         it("should pass when input is equal or greater than 100",()=>{
             assert.equal(numberOperations.numberChecker(100),'The number is greater or equal to 100!')
             assert.equal(numberOperations.numberChecker(Number.MAX_VALUE),'The number is greater or equal to 100!')
             assert.equal(numberOperations.numberChecker(150),'The number is greater or equal to 100!')
         });
         
     })
     describe("sumArrays function",()=>{
         it("should return the sum of the 2 arrays when first i longer",()=>{
            const firstArr=[1,2,3,4,5,6];
            const secondArr=[4,3,2,1];
            assert.deepEqual(numberOperations.sumArrays(firstArr,secondArr),[5,5,5,5,5,6]);
         });
         it("should retun the sum of the two arrays when they are equal",()=>{
            const firstArr=[1,2,3,4];
            const secondArr=[4,3,2,1];
            assert.deepEqual(numberOperations.sumArrays(firstArr,secondArr),[5,5,5,5]);
         })
            
     })
});
