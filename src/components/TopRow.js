import React from 'react'

import ClearButton from './ClearButton'
import NegButton from './NegButton'
import PercentButton from './PercentButton'

const TopRow = (props) => (
  <div>
    <ClearButton clear={props.clear} />
    <PercentButton clear={props.clear} />
    <NegButton clear={props.clear} />
  </div>
)


export default TopRow
