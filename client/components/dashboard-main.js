import React from 'react'
import { Link } from 'react-router-dom'

const dashboardMain = () => {
  return (
    <div>
      <div id="title">Main</div>
      <Link to="/dashboard/profile/0263bb64-bc0e-4740-911d-11505a65d0e9">Go to Profile</Link>
      <Link to="/dashboard">Go to Root</Link>
    </div>
  )
}

dashboardMain.propTypes = {}

export default dashboardMain
