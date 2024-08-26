//オプションパラメータを持つ関数
export const isUsetSignedIn = (userId: string, username?: string): boolean => {
  if (userId === 'ABC') {
    console.log('function parameters sample 1: User is signed in Username is', username)
    return true
  } else {
    console.log('function parameters sample 1: User is not sined in')
    return false
  }
}

//デフォルトパラメータを持つ関数
export const isUsetSignedIn2 = (userId: string, username = 'NO NAME'): boolean => {
  if (userId === 'ABC') {
    console.log('function parameters sample 3: User is signed in Username is', username)
    return true
  } else {
    console.log('function parameters sample 4: User is not sined in')
    return false
  }
}

//レストパラメータを持つ関数
export const sumProductsPrice = (...productsPrice: number[]): number => {
  return productsPrice.reduce((prevTotal: number, productsPrice: number) => {
    return prevTotal + productsPrice
  }, 0)
}
