

function fibonacci(n) {
    let numberList = [0,1];

    for( let i=2; i<=n; i++) {
        let newNumber = numberList[i-2] + numberList [i-1];
        numberList.push(newNumber);
    }

    return numberList[n];

} 

let n = 10;

console.log(fibonacci(n));