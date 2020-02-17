module.exports = (obj, map) => {
  return Object.fromEntries(Object.entries(obj).map(map))
}
