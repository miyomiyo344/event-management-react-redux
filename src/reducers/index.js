import { combineReducers } from 'redux'
// フォームを使うための記述。reducerという名前でも可能だが一般的なのでformという名前にしている。
import { reducer as form } from 'redux-form'
import events from './events'

// importでformを使っているのでexportにもformを記載
export default combineReducers({ events, form })

// 複数のreducerを統合する場合は下記のような書き方となる
// export default combineReducers({foo, bar, baz})