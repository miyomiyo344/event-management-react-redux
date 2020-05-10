// ReactComponentファイルに必要
import React, { Component } from 'react';
// reduxを使用する場合に必要なconnect関数
import { connect } from 'react-redux'
// 入力フォームの作成に必要
import { Field, reduxForm } from 'redux-form'
// ページ内にリンクを生成するために必要
import { Link } from 'react-router-dom'

// get/delete/putアクションを呼び出すために必要。putは更新。
import { getEvent, deleteEvent, putEvent } from '../actions'

// Componentのタイトル
class EventsShow extends Component {

  // onSubmitはイニシャライズしたときにバインドすることとする
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.onDeleteClick = this.onDeleteClick.bind(this)
  }

  // レンダリングが完了したらEvent情報を拾ってくる処理
  // getEventはactionで定義
  componentDidMount() {
    const { id } = this.props.match.params
    if (id) this.props.getEvent(id)
  }

  // フォームのrenderFieldというメソッドを定義。入力される値が渡ってくる。
  renderField(field) {
    // 入力された情報を拾う
    // touchedはredux特有のもので1回でもフォームに触ったらtouched状態になる
    const { input, label, type, meta: { touched, error } } = field

    return (
    <div>
      <input {...input} placeholder={label} type={type} />
      {/* タッチされて尚且エラーがある場合のバリデーションの記述。問題があれば「error」を表示 */}
      {touched && error && <span>{error}</span>}
    </div>)
  }

  // 非同期処理を行うためにはasyncが必要
  async onDeleteClick() {
    // idの拾い方。現在どんなパラメータを持っているのかをconsole.log(this.props.match)で確認する。下記でアクションにidを渡す。
    const { id } = this.props.match.params
    // アクションで定義するdeleteEventを記載。idを引数に。
    await this.props.deleteEvent(id)
    this.props.history.push('/')
  }

  // 非同期処理を行うためにはasyncが必要
  async onSubmit(values){
    // postEventにvaluesの値を渡す
    // await this.props.postEvent(values)
    // トップページの履歴に追加
    this.props.history.push('/')
  }

  // renderする内容
  render(){
    // handleSubmitという関数はrenderが実行されたときに渡ってくる関数となる
    // pristineという属性は何も入力されていない状態を検知できる
    // submittingという属性は一度submitを押したらtrueになる。これをdisabledと連携して一度submitしたらボタンを非活性状態にできる(2重押し防止)。
    const { handleSubmit, pristine, submitting } = this.props

    return(
      // サブミットボタンが押されたときのメソッドを作成
      <form onSubmit={handleSubmit(this.onSubmit)}>
        <div><Field label="Title" name="title" type="text" component={this.renderField} /></div>
        <div><Field label="Body" name="body" type="text" component={this.renderField} /></div>

        <div>
          {/* inputタグでpristineという状態を渡すことで何も入力されていなかったときにsubmitボタンが押せなくなる */}
          <input type="submit" value="Submit" disabled={pristine || submitting} />
          <Link to="/">Cancel</Link>
          {/* onDeleteClickの中でDeleteの処理を行う */}
          <Link to="/" onClick={this.onDeleteClick}>Delete</Link>
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

// 現在各IDが持っているStateの情報(TitleとBody)を表示させるために必要
const mapStateToProps = (state, ownProps) => {
  // ownPropsにIDが入っている
  const event = state.events[ownProps.match.params.id]
  // initialValues: eventは初期値を渡すための記述
  // 左側のeventが上の行で指示してIDが入ったevent
  return { initialValues: event, event }
}

// 本ComponentにdeleteEvent,getEventをバインド
const mapDispatchToProps = ({ deleteEvent, getEvent })

// Fromをしようしたときに必要。バリデーションの設定、フォームの名前を定義する。
export default connect(mapStateToProps , mapDispatchToProps)(
  // enableReinitialize: trueは元々持っているTitleとBodyの情報を表示させるための記述
  reduxForm({ validate, form: 'eventShowForm', enableReinitialize: true })(EventsShow)
)

