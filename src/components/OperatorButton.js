import React from 'react'


const OperatorButton = (props) => (
  <button onClick={props.addOperator} id={'oper-button-' + props.index + 1} className={'oper-button'}>
    {props.value}
  </button>
)


export default OperatorButton
