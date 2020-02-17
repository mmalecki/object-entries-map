const objectEntriesMap = require('../')
const obj = { foo: 'bar' }
console.log(
  objectEntriesMap(obj, ([key, value]) => [value, key])
) // => { bar: 'foo' }
