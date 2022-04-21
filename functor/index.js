const functions = require('@google-cloud/functions-framework');

// local hello world npm start
exports.helloWorld = (req, res) => {
	res.send('Hello, World');
};

// Register an HTTP function with the Functions Framework that will be executed
// when you make an HTTP request to the deployed function's endpoint.
functions.http('helloGET', (req, res) => {
	res.send('Hello World!');
});

functions.http('IAMGET2', (req, res) => {
	res.send('IAMGET2!');
});
