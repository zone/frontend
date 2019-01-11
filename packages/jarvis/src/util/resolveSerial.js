module.exports = promises => promises.reduce(
  (promise, func) => promise.then(result => func().then(Array.prototype.concat.bind(result))),
  Promise.resolve([]),
)
