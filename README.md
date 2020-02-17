# object-entries-map
Deconstructs an object into entries (using `Object.entries`), runs a user-supplied
map function over it, and reconstructs the object (using `Object.fromEntries`).

## Installation
```sh
npm i object-entries-map
```

## Usage
```
const objectEntriesMap = require('object-entries-map')
const obj = { foo: 'bar' }
objectEntriesMap(obj, ([key, value]) => [value, key]) // => { bar: 'foo' }
```
