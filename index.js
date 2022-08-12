
function receivesAFunction(callback) {
    console.log(callback());
}
receivesAFunction(function(){ return "hello"});


function returnsANamedFunction() {
    const newFunc = () => console.log("named function");
    return newFunc;
}

function returnsAnAnonymousFunction() {
    return () => console.log("anonymous function");
}
