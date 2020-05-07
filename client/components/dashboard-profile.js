import React from 'react'
import { Link, useParams } from 'react-router-dom'

const DashboardPro = () => {
  const { user } = useParams()
  return (
    <div>
      <div id="title">Profile</div>
      <div id="username">{user}</div>
      <Link to="/dashboard">Go to Root</Link>
      <Link to="/dashboard/main">Go to Main</Link>
    </div>
  )
}

DashboardPro.propTypes = {}

export default DashboardPro
