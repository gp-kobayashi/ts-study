export default function genericAdvanceSample() {
  //map関数のシグネチャ
  type Map<T, U> = (array: T[], fn: (item: T) => U) => U[]

  const mapStringsToNumbers: Map<string, number> = (array, fn) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
      const item = array[i]
      result[i] = fn(item)
    }
    return result
  }
  const numbers = mapStringsToNumbers(['123', '456', '789'], (item) => Number(item))
  console.log('Generics advanced sample 1:', numbers)

  const mapNumbersToStrings: Map<number, string> = (array, fn) => {
    const result = []
    for (let i = 0; i < array.length; i++) {
      result[i] = fn(array[i])
    }
    return result
  }

  const strings = mapNumbersToStrings(numbers, (item) => String(item))
  console.log('Generics advanced sample 2:', strings)
}
