import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <div id="title">Dashboard</div>
      <Link to="/dashboard/profile/0263bb64-bc0e-4740-911d-11505a65d0e9">Go to Profile</Link>
      <Link to="/dashboard/main">Go to Main</Link>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
