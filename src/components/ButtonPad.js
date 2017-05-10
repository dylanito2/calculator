import React from 'react'

import OperatorButtons from './OperatorButtons'
import NumberButtons from './NumberButtons'

import CalculateButton from './CalculateButton'


class ButtonPad extends React.Component {




  render() {

    return (
      <div className='calc-buttons'>
        <NumberButtons appendValue={this.props.appendValue} clear={this.props.clear} />
        <OperatorButtons addOperator={this.props.addOperator} calculate={this.props.calculate} />
      </div>
    )
  }
}

export default ButtonPad
