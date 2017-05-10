import React from 'react'


class OperatorButton extends React.Component {

  render() {
    return (
      <button onClick={this.props.addOperator} id={'oper-button-' + this.props.index + 1} className={'oper-button'}>
        {this.props.value}
      </button>
    )
  }
}

export default OperatorButton
