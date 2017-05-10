import React from 'react'

import OperatorButton from './OperatorButton'
import CalculateButton from './CalculateButton'


class OperatorButtons extends React.Component {

  renderOperatorButtons() {
    let buttons = ['÷', '*', '-', '+']
    return buttons.map((value, index) => {
      return <OperatorButton key={value} value={value} addOperator={this.props.addOperator.bind(null, value)} index={index} />
    })
  }

  render() {
    return (
      <div className='oper-buttons-container' >
        {this.renderOperatorButtons()}
        <CalculateButton calculate={this.props.calculate} />
      </div>
    )
  }
}

export default OperatorButtons
