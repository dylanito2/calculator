import React from 'react'


const PercentButton = (props) => (
  <button disabled onClick={props.calculate} id='percent-button' className='num-button'>
    %
  </button>
)


export default PercentButton
