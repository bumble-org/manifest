export const combineArrays = (...arrays) => {
  const flat = arrays.flat(5).filter(a => a)
  const set = new Set(flat)
  const values = [...set]

  return values.sort()
}
