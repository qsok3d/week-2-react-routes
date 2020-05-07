import React from 'react'
import { Link } from 'react-router-dom'

const Dummy = () => {
  return (
    <div id="title">
      Main
      <Link to="/dashboard/profile/0263bb64-bc0e-4740-911d-11505a65d0e9"> Go to Profile</Link>
      <Link to="/dashboard"> Go to Root</Link>
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy
