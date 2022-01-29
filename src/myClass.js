
class MyClass{

    constructor(){
        console.log("initiate"); 
    }

    sayhello(str){
        console.log(str);
    }

    add(arg1, arg2){
        var result;
        result = arg1 + arg2;
        return result; 
    }

    callAnotherFn(arg1, arg2){
        this.sayhello("hello");
        var res = this.add(arg1, arg2); 
        return res;
    }

}

module.exports = MyClass; 