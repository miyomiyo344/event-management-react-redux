// exportはComponentのView側で利用するために設定するもの。View側でimportする。
// export const INCREMENT = 'INCREMENT'

import axios from 'axios'

// reducerに対してexportして渡す
// 一覧表示用
export const READ_EVENTS = 'READ_EVENTS'
// 新規投稿用
export const CREATE_EVENT = 'CREATE_EVENT'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

// 一覧表示用アクション。APIのURLを指定して全てのデータを持ってくる。
export const readEvents = () => async dispatch => {
  const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
  dispatch({ type: READ_EVENTS, response })
}

// 新規投稿用アクション
// valuesで入力された値を受け取る >> axiosのpostでvaluesを送信
export const postEvent = values => async dispatch => {
  const response = await axios.post(`${ROOT_URL}/events${QUERYSTRING}`, values)
  dispatch({ type: CREATE_EVENT, response })
}

// export const increment = () => ({
//   type: INCREMENT
// })

// export const decrement = () => ({
//   type: DECREMENT
// })