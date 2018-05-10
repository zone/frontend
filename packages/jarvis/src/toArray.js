module.exports = (obj) => {
  if (!obj || obj === null) {
    return []
  }

  return Array.isArray(obj) ? obj : [obj]
}
