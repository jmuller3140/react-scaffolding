import React from 'react'
import './spinner.scss'

const Spinner = () => (
  <div className='d-flex justify-content-center w-100'>
    <div className="spinner">
      <div className="double_bounce1"></div>
      <div className="double_bounce2"></div>
    </div>
  </div>
)

export default Spinner