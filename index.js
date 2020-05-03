
function FibonacciSequence(n) {

    if (n <= 1)
        return 1;

    return FibonacciSequence(n - 1) + FibonacciSequence(n - 2);
};

FibonacciSequence(8);