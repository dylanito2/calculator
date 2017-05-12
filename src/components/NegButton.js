import React from 'react'


const NegButton = (props) => (
  <button disabled onClick={props.calculate} id='neg-button' className='num-button'>
    <sup>+</sup>/-
    </button>
)


export default NegButton
