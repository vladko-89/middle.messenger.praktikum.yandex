export const getString = (obj: Record<string, any>): string => {
  let str = ''
  for (const [k, v] of Object.entries(obj)) {
    if ((typeof v) === 'boolean') {
      str += `${k} `
    } else {
      str += `${k}=${v} `
    }
  }

  return str
}

export const getQuery = (obj: Record<string, any>): string => {
  let str = '?'
  Object.entries(obj).forEach(([key, value], index, array) => {
    const isLast = index === array.length - 1

    str += `${key}=${value}${!isLast ? '&' : ''}`
  })
  return str
}
