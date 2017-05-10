import React from 'react'

import ClearButton from './ClearButton'

class TopRow extends React.Component {



  render() {
    return (
      <div>
        <ClearButton clear={this.props.clear} />
        <ClearButton clear={this.props.clear} />
        <ClearButton clear={this.props.clear} />
      </div>
    )
  }
}

export default TopRow
