import React from 'react'


class NumberButton extends React.Component {

  render() {
    let buttonClass = this.props.value === 0 ? 'zero-button' : null
    return (
      <button onClick={this.props.appendValue} className={'num-button ' + buttonClass}>
        {this.props.value}
      </button>
    )
  }
}

export default NumberButton
