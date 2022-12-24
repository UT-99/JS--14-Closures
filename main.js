// Ques. 1

// Ques 2.

// Ques 3.


// Ques 4 .



function OuterFunc() {
    let num1 = 39;
    function InnerFunc() {
        let num2=78;
        console,console.log(`The product of digits is:`,num1*num2);
    }
    return InnerFunc;
}
var innerFunc = OuterFunc();
innerFunc();



// Ques 5. 

function counter(){
    var count = 0;
    function IncreaseCounter() {
        return count += 1;
    };
    return IncreaseCounter;
}
var counter = counter();
alert(counter());
alert(counter());
alert(counter());
alert(counter());



// Ques 6:

var a = 12;
(function () {
              alert(a);
            })();



// ques 7. 


var a = 10;
            var x = (function () {
              var a = 12;
              return function () {
                alert(a);
              };
            })();
            x();


// Ques 8 .


var globalVar = "xyz";

            (function outerFunc(outerArg) {
                var outerVar = 'a';
                
                (function innerFunc(innerArg) {
                var innerVar = 'b';
                
                console.log(
                    "outerArg = " + outerArg + "\n" +
                    "innerArg = " + innerArg + "\n" +
                    "outerVar = " + outerVar + "\n" +
                    "innerVar = " + innerVar + "\n" +
                    "globalVar = " + globalVar);
                
                })(456);
            })(123);