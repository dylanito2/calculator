import React from 'react'


class Display extends React.Component {

  displayCorrect() {
    return this.props.secondOperand === '' ? this.props.firstOperand : this.props.secondOperand
  }

  render() {
    return (
      <div className='calc-display'>
        <div className='content'>
          {this.displayCorrect()}
        </div>
      </div>
    )
  }
}

export default Display
