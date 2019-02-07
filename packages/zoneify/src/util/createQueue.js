module.exports = () => {
  let queue = []

  return {
    enqueue: (payload) => {
      queue.push(payload)
    },
    dequeue: () => queue.shift(),
    clear: () => {
      queue = []
    },
    get items() {
      return queue
    },
    get size() {
      return queue.length
    },
  }
}
