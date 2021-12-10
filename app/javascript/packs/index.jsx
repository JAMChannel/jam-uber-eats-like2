// import React from 'react'
// import ReactDOM from 'react-dom'
// import { BrowserRouter } from 'react-router-dom';

// document.addEventListener('DOMContentLoaded', () => {
  //   ReactDOM.render(
    //     <BrowserRouter>
    //       <App/>
    //     </BrowserRouter>,
    //     document.querySelector('#root'),
    //   );
    // });
    
import React from 'react'
import ReactDOM from 'react-dom'
// import PropTypes from 'prop-types'
// import App from './App'
// import { BrowserRouter } from 'react-router-dom';



const Calc = props =>{
  let n = props.number;
  let total = 0;
  for (let i = 0;i <= n; i++){
    total = total + i;
  }
  return (
    <div> ゼロから{props.number}までの合計は、「{total}」です。</div>
  );
}

Calc.defaultProps = {
  number: 0
}

// Calc.propTypes = {
//   debugger
//   number: PropTypes.integer
// }

document.addEventListener('DOMContentLoaded', () => {
  console.log("OK")
  let el = (<div>
    <Calc number="100" />
    <Calc number="200" />
    <Calc number="300" />
  </div>);
  let dom = document.querySelector('#hello');
  ReactDOM.render(el,dom);
})

// const Hello = props => (
//   <div>Hello {props.name}!</div>
// )

// Hello.defaultProps = {
//   name: 'David'
// }

// Hello.propTypes = {
//   name: PropTypes.string
// }

// document.addEventListener('DOMContentLoaded', () => {
//   ReactDOM.render(
//     // <BrowserRouter>
//     //   <App/>
//     // </BrowserRouter>,
//     <Hello name="React" />,
//     document.body.appendChild(document.createElement('div')),
//   )
// })
