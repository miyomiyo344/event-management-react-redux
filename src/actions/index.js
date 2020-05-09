// exportはComponentのView側で利用するために設定するもの。View側でimportして使用する。

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const increment () = => ({
  type: INCREMENT
})

export const decrement () = => ({
  type: DECREMENT
})
