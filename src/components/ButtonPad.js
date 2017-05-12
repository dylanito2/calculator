import React from 'react'

import OperatorButtons from './OperatorButtons'
import NumberButtons from './NumberButtons'

const ButtonPad = (props) => (
  <div className='calc-buttons'>
    <NumberButtons appendValue={props.appendValue} clear={props.clear} />
    <OperatorButtons addOperator={props.addOperator} calculate={props.calculate} />
  </div>
)


export default ButtonPad
