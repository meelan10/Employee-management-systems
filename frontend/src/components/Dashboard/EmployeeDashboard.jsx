import React from 'react'
import Header from '../others/Header'
import TaskList from '../TaskList/TaskList'
import TaskListNumber from '../others/TaskListNumber'

const EmployeeDashboard = () => {
  return (
    <div className='p-20 b-[#1C1C1C]'>
      <Header />
       <TaskListNumber />
       <TaskList />
    </div>
  )
}

export default EmployeeDashboard
