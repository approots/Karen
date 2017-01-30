import {prepPersonalityData, countWords, isEnoughWords} from './utils'

test('countWords counts the number of words correctly', () => {
  const str = 'should be 4 words'
  expect(countWords(str)).toBe(4);
})

test('isEnoughWords returns true when there is enough', () => {
  const str = 'Are be 4 words'
  const minWords = 4
  expect(isEnoughWords(str, minWords)).toBe(true);
})

test('isEnoughWords returns false when there are not enough', () => {
  const str = 'Are be 4 words'
  const minWords = 5
  expect(isEnoughWords(str, minWords)).toBe(false);
})

test('prepPersonalityData preps data as expected', () => {
  const input = {personality: [
    {name:'David', something:'something',percentile:.94},
    {name:'Noel', something:'something',percentile:.92}
  ]}
  const output =  [
    {name:'David',percentile:94},
    {name:'Noel',percentile:92}
  ]
  expect(prepPersonalityData(input)).toEqual(output);
})

