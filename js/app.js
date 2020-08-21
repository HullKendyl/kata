

function fibonacci(n) {
    let numberList = [0,1];

    for( let i=2; i<=n; i++) {
        let newNumber = numberList[i-2] + numberList [i-1];
        numberList = [...numberList, newNumber];
    }

    return numberList[n];

} 

function privateVariable() {
    const secretNumber = 1;

    return function() {
        return secretNumber;
    }
}

const getSecretNumber = privateVariable();

// console.log(privateVariable());
// console.log(getSecretNumber());

let n = 10;

// console.log(fibonacci(n));

let num = 4;

function outer() {
    let num = 2;
    
    function inner() {
        num++;
        let num = 3;
        console.log(num);
    }
    inner();
}

outer();