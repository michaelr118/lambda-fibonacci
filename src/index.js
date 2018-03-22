'use strict';

/**
 * Demonstration of Fibonacci as a Service. Input is a POST request
 * with any valid Fibonacci number as the body of the request and output
 * will be the next Fibonacci number in sequence.
 * 
 * Input must be an integer
 * 
 * Input must be in the range [1, ...]. This is because there are multiple
 * instances of '1' at the beginning of the Fibonacci sequence.
 * 
 * Input must be an existing, valid, Fibonacci number.
 */
exports.handler = (event, context, callback) => {

    // Our response callback. Used to send a response to the POST request
    const respond = (error, response) => callback(null, {
        // HTTP response code 200 = success, otherwise failure
        statusCode: error ? '400' : '200',
        body: error ? error.message + "\n" : JSON.stringify(response) + "\n",
        headers: {
            'Content-Type': 'application/json',
        },
    });

    /* We only want to process POST requests. All other requests will be
    rejected with 'Unsupported Method' */
    switch (event.httpMethod) {
        case 'POST':
            // Check if input is a valid, real number
            if (isNaN(event.body)) {
                respond(new Error(`Unsupported input. ` +
                `"${event.body}" is not a number`));
            }
            
            // Convert input to integer and verify not in range (0, 1)
            var input = parseInt(event.body);
            if (input <= 1) {
                respond(new Error(`Unsupported input "${event.body}". ` +
                `Number must be in the range [1, ...]`));
            }
            
            /* Verify that input is actually part of the Fibonacci sequence,
            else provide an error message */ 
            if (IsFibonacci(input)) {
                // Respond with next number in the Fibonacci sequence
                respond(null, nextFibonacci(input));
            }
            else {
                respond(new Error(`Unsupported input "${event.body}". ` +
                `Number must be an existing Fibonacci number`));
            }
            break;
        default:
            respond(new Error(`Unsupported method "${event.httpMethod}"`));
    }
};

/* Return true if input has a perfect square, with no floating point remainder
else false */
function IsSquare(input) {
    return (input > 0) && (Math.sqrt(input) % 1 === 0);
}

/* A number is considered Fibonacci if (5n^2 +- 4) has a perfect square root.
Return true if number is Fibonacci, else false */
function IsFibonacci(input) {
    return IsSquare(5 * input * input + 4) || IsSquare(5 * input * input - 4);
}

/* Returns the next Fibonacci number in sequence after the existing Fibonacci
number 'input'. Achieved by rounding the product of input and Phi (the Golden
Ratio, 1.618) */
function nextFibonacci(input) {
    return Math.round(input * 1.618);
}