function fibonacci(num){
    var i;
    var fib = [];

    fib[0] = 0;
    fib[1] = 1;
    for (i = 2; i <= num; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
    }
    return fib;
}
document.getElementById("q1").innerHTML += "1)<br><br>" + fibonacci(5);