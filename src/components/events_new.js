// ReactComponentファイルに必要
import React, { Component } from 'react';
// reduxを使用する場合に必要なconnect関数
import { connect } from 'react-redux'
// 入力フォームの作成に必要
import { Field, reduxForm } from 'redux-form'
// ページ内にリンクを生成するために必要
import { Link } from 'react-router-dom'

// Postアクションを呼び出すために必要
// import { postEvent } from '../actions'

// Componentのタイトル
class EventsNew extends Component {

  // フォームのrenderFieldというメソッドを定義。入力される値が渡ってくる。
  renderField(field) {
    // 入力された情報を拾う
    const { input, label, type, meta: { touched, error } } = field

    return (
    <div>
      <input {...input} placeholder={label} type={type} />
      {/* タッチされて尚且エラーがある場合のバリデーションの記述。問題があれば「error」を表示 */}
      {touched && error && <span>{error}</span>}
    </div>)
  }

  // renderする内容
  render(){

    return(
      <form>
        <div><Field label="Title" name="title" type="text" component={this.renderField} /></div>
        <div><Field label="Body" name="body" type="text" component={this.renderField} /></div>

        <div>
          <input type="submit" value="Submit" disabled={false} />
          <Link to="/">Cancel</Link>
        </div>
      </form>
    )
  }
}

// バリデーションを行う関数の定義
const validate = values => {
  // エラーとする内容
  const errors = {}

  // valuesには入力されている値が渡ってくる。空だった場合はerrorsというオブジェクトのtitle keyに対してエラー文を出力。
  if (!values.title) errors.title = "Enter a title, please."
  if (!values.body) errors.body = "Enter a body, please."

  // エラーがあった場合は「errors」の中にエラー文が格納されて返す
  return errors
}

// const mapDispatchToProps = ({ postEvent })


// Fromをしようしたときに必要。バリデーションの設定、フォームの名前を定義する。
export default connect(null, null)(
  reduxForm({ validate, form: 'eventNewForm' })(EventsNew)
)



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
