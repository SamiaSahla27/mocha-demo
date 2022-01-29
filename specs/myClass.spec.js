var MyClass = require("../src/myClass"); 
var myObje = new MyClass(); 
var chai = require("chai");
var expect = chai.expect;


// test case 
describe("test suit",function(){
    it("test the add method", function(){
        expect(myObje.add(1,2)).to.be.equal(3);
    }); 
     
    
});
