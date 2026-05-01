import React from 'react'
import Header from '../others/Header'
import TaskList from '../TaskList/TaskList'
import TaskListNumber from '../others/TaskListNumber'

const EmployeeDashboard = ({ user, onLogout }) => {
  return (
    <div className='p-20 h-full'>
      <Header userName={user?.email || 'Employee'} onLogout={onLogout} />
      <TaskListNumber />
      <TaskList /> 
    </div>
  )
}

export default EmployeeDashboard
