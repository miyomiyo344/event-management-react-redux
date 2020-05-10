// import { INCREMENT, DECREMENT } from '../actions'
import _ from 'lodash'
import { 
  READ_EVENTS,
  READ_EVENT,
  DELETE_EVENT
} from '../actions'

// const initialState = { value: 0 }

// eventsというオブジェクトにイベント情報が丸々入っている
export default (events = {}, action) => {
  switch (action.type) {
    case READ_EVENT:
      // console.log(action.response.data)としたときに{id: 9, title: "Let's have an event 9!", body: "This is the body for event 9."}のように表示されてたらOK
      const data = action.response.data
      // eventsというオブジェクトに入ったイベント情報を、該当のものだけ更新する記述
      // { ...events }はeventsの情報を全て展開するための記述
      // [data.id]: dataで上記constで持ってきたdataとeventsの各dataを照らし合わせて該当するものをreturnさせる
      return { ...events, [data.id]: data }
    case READ_EVENTS:
      return _.mapKeys(action.response.data, 'id')
    case DELETE_EVENT:
      // 下記の2行＋上記のDELETE_EVENTで更新後のevents一覧を返してくれるようになる。逆に下記の記述がないとdeleteを行っても一度リロードしないとデータが消えない
      delete events[action.id]
      return { ...events }
    default:
      return events
  }
}