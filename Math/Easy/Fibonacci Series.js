/**
 * Write a program to print first n Fibonacci Numbers
 * Return a string or an array
 */

/**
 * Iterative approach 
 */
const printFibo = (n)=>{
    let f1 = 0,
        f2 = 1,
        result = [f1];//result = f1+'';
    if(n < 1){
        return null;
    }
    for(let i=1; i<n; i++){
        result.push(f2);//result+= f2;
        let next = f1 + f2;
        f1 = f2;
        f2 = next;
    }
    return result;
};

console.log(printFibo(3));