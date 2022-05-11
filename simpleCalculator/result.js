exports.result = function (req, res) {

    let q = req.query;
    let num1 = parseInt(q.firstNumber);
    let num2 = parseInt(q.secondNumber);
    let operations = q.operation;

    let result;

    if (operations == 'plus') {
        result = num1 + num2;
    } else if (operations == 'minus') {
        result = num1 - num2;
    } else if (operations == 'multiply') {
        result = num1 * num2;
    } else {
        result = num1 / num2;
    }
   
    res.write(`<!DOCTYPE html>
        <html>
        <head><meta charset=\"utf-8\"/>
        <title>Simple Calculator</title>
        </head>
        <body>
        <h1>The Simple Calculator</h1>
        <h2>The result is : ${String(result)}</h2>
        <a href="/" alt="homepage">Another Calculation ?</a>
        </body>
        </html> ` );
    return res.end();
}
