module.exports = (condition, message = 'Invariant') => {
  if (!condition) {
    throw new Error(message)
  }
}
