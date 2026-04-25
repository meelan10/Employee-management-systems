import React from 'react'
import Header from '../others/Header'
import TaskList from '../TaskList/TaskList'
import TaskListNumber from '../others/TaskListNumber'

const EmployeeDashboard = () => {
  return (
    <div className='p-20 h-full'>
      <Header />
         <TaskListNumber />
       <TaskList /> 
    </div>
  )
}

export default EmployeeDashboard
