export const prepPersonalityData = (data) => {
  return data.personality.map((item) => {
    return {name: item.name, percentile: item.percentile * 100}
  })
}

export const countWords = (str) => {
  return (! str || str.trim().length === 0) ? 0 : str.split(' ').length;
}

export const isEnoughWords = (value, minWords) => {
  return (value && countWords(value) >= minWords)
}