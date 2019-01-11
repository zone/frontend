// Task utility
// Wraps a promise to provide a constant output to handle errors
module.exports = promise => promise.then(data => [data, null]).catch(err => [null, err])
