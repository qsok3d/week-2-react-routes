import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Dummy = () => {
  const { user } = useParams()
  return (
    <div id="title">
      <div>Profile</div>
      <div id="username">{user}</div>
      <Link to="/dashboard/">Go to Root</Link>
      <Link to="/dashboard/main">Go to Main</Link>
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy
