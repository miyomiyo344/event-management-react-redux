// import React from 'react';
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

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

const App = () => ( <Counter> </Counter> )

class Counter extends Component {
  // constructorは初期化処理で実行されるメソッド
  constructor(props){
    super(props)
    this.state = {count: 0}
  }

  handlePlusButton = () => {
    this.setState({count: this.state.count + 1})
  }

  handleMinusButton = () => {
    this.setState({count: this.state.count - 1})
  }

  render(){
    return(
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}

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

export default App;
