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
import App from './App'
import PropTypes from 'prop-types'
import { BrowserRouter } from 'react-router-dom';

const Hello = props => (
  <div>Hello {props.name}!</div>
)

Hello.defaultProps = {
  name: 'David'
}

Hello.propTypes = {
  name: PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <BrowserRouter>
      <App/>
    </BrowserRouter>,
    <Hello name="React" />,
    document.body.appendChild(document.createElement('div')),
  )
})
