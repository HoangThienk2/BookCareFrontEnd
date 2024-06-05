import React from 'react'
import { Outlet } from 'react-router-dom'


const Patients = ({prop}) => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  )
}

export default Patients