import React from 'react'

import NumberButton from './NumberButton'
import TopRow from './TopRow'

class NumberButtons extends React.Component {

  renderNumberButtons() {
    let buttons = [...Array(10).keys()]
    buttons.push(buttons.shift())
    buttons.push('.')
    return buttons.map((value) => {
      return <NumberButton key={value} value={value} appendValue={this.props.appendValue.bind(null, value)} />
    })
  }

  render() {
    return (
      <div className='num-buttons-container'>
        <TopRow clear={this.props.clear} />
        {this.renderNumberButtons()}
      </div>
    )
  }
}

export default NumberButtons
