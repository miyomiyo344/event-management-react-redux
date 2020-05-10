// ReactComponentファイルに必要
import React, { Component } from 'react';
// reduxを使用する場合に必要なconnect関数
import { connect } from 'react-redux'
import _ from 'lodash'
// ページ内にリンクを生成するために必要
import { Link } from 'react-router-dom'

// Tableにmaterial-uiを使用するために必要
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table'
// 新規作成用のボタンにmaterial-uiを使用するために必要
import FloatingActionButton from 'material-ui/FloatingActionButton'
// 新規作成用のボタンのプラスマークにmaterial-uiを使用するために必要
import ContentAdd from 'material-ui/svg-icons/content/add'

// Getアクションを呼び出すために必要
import { readEvents } from '../actions'

class EventsIndex extends Component {
  // マウント後にやりたい処理を書く
  componentDidMount() {
    this.props.readEvents()
  }
  // イベント一覧の描画
  renderEvents() {
    return _.map(this.props.events, event => (
      <TableRow key={event.id}>
        <TableRowColumn>{event.id}</TableRowColumn>
        <TableRowColumn>
          <Link to={`/events/${event.id}`}>
            {event.title}
          </Link>
        </TableRowColumn>
        <TableRowColumn>{event.body }</TableRowColumn>
      </TableRow>
    ))
  }

  // renderする内容
  render(){
    const style = {
      position: 'fixed',
      right: 12,
      bottom: 12
    }
    return(
      <React.Fragment>
        <FloatingActionButton style={style} containerElement={<Link to="/events/new" />}>
          <ContentAdd />
        </FloatingActionButton>
        <Table>
          <TableHeader
          // displaySelectAll={false}にて全選択のCheckBoxを消してる
          displaySelectAll={false}
          // adjustForCheckbox={false}にて消したCheckBox分の隙間を埋める
          adjustForCheckbox={false}
          >
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Title</TableHeaderColumn>
              <TableHeaderColumn>Body</TableHeaderColumn>
            </TableRow>
          </TableHeader>

          {/* displayRowCheckbox={false}にてCheckBoxを消す */}
          <TableBody displayRowCheckbox={false}>
            {this.renderEvents()}
          </TableBody>
        </Table>

      </React.Fragment>
    )
  }
}

// イベントに関する描画に必要
const mapStateToProps = state => ({ events: state.events })

const mapDispatchToProps = ({ readEvents })
// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement())
// })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)

// function App() {
//   // const greeting = "Hi!!";
//   // const dom = <h1 className="foo">{greeting}</h1>
//   // return (
//   //   dom
//   // );

//   // return (
//   //   <input type="text" onClick={() => {console.log("I am clicked.")}} />
//   // );

//   // return (
//   //   <input type="text" onChange={() => {console.log("I am clicked.")}} />
//   // );

//   // return (
//   //   <div>
//   //     <label htmlFor="bar"> bar </label>
//   //     <input type="text" onChange={() => {console.log("I am clicked.")}} />
//   //   </div>
//   // );

//   return (
//     <React.Fragment>
//       <label htmlFor="bar"> bar </label>
//       <input type="text" onChange={() => {console.log("I am clicked.")}} />
//     </React.Fragment>
//   );
// }

// const App = () => {
//   // const profiles = [
//   //   { name: "Taro", age: 10 },
//   //   { name: "Hanako", age: 5 },
//   //   { name: "Saburo", age: 3 }
//   // ]
//   // return(
//   //   <div>
//   //     {
//   //       profiles.map((profile, index) => {
//   //         return <User name={profile.name} age={profile.age} key={index} />
//   //       })
//   //     }
//   //   </div>
//   // )
// }

// const App = () => ( <Counter> </Counter> )

// Reduxを使用する場合は同じ処理をreducerで行うことになるため記述が不要となる
// constructorは初期化処理で実行されるメソッド(コールバック)
// constructor(props){
//   super(props)
//   this.state = {count: 0}
// }

// Reduxを使用する場合は同じ処理をaction creatorで実行しているため不要となる
// handlePlusButton = () => {
//   this.setState({count: this.state.count + 1})
// }
// handleMinusButton = () => {
//   this.setState({count: this.state.count - 1})
// }

// const User = (props) => {
//   return <div>Hi! I am {props.name}!, and {props.age} years old! </div>
// }

// 型チェック
// isRequiredでageという属性が必ず設定されてないと駄目ということになる
// 初めに定義しておくことが重要
// User.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number.isRequired
// }

// デフォルト値の設定
// 値が入ってなかったときのデフォルト
// User.defaultProps = {
//   age: 1
// }

// export default App;
