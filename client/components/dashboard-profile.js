import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Dummy = () => {
  const { user } = useParams()
  return (
    <div id="title">
      Profile
      <Link to="/dashboard"> Go to Root</Link>
      <Link to="/dashboard/main"> Go to Main</Link>
      <div id="username">{user}</div>
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy
