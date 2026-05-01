import React from 'react'
import Header from '../others/Header'
import AllTask from '../others/AllTask'
import CreateTask from '../others/CreateTask'

const AdminDashboard = ({ user, onLogout }) => {
  return (
    <div className='min-h-screen w-full bg-slate-950 text-slate-100 p-8'>
      <Header userName={user?.email || 'Admin'} onLogout={onLogout} />

      <section className='mt-8 grid gap-6 xl:grid-cols-[1.7fr_1fr]'>
        <div className='space-y-6'>
          <div className='rounded-[32px] border border-white/10 bg-slate-900/90 p-7 shadow-[0_25px_50px_rgba(15,23,42,0.35)]'>
            <div className='flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
              <div>
                <p className='text-sm uppercase tracking-[0.18em] text-slate-500'>Admin dashboard</p>
                <h1 className='mt-3 text-3xl font-semibold text-white'>Team tasks, timelines, and activity in one place</h1>
                <p className='mt-3 max-w-2xl text-sm leading-6 text-slate-400'>Manage task creation, assignments, and progress with a clean workspace designed for admin flow.</p>
              </div>
              <div className='inline-flex items-center gap-3 rounded-full border border-slate-700 bg-white/5 px-4 py-2 text-sm text-slate-200'>
                <span className='h-2.5 w-2.5 rounded-full bg-emerald-400' />
                Live workspace
              </div>
            </div>

            <div className='mt-7 grid gap-4 sm:grid-cols-3'>
              <div className='rounded-3xl bg-slate-800/90 p-5'>
                <p className='text-sm text-slate-400'>Total Tasks</p>
                <p className='mt-3 text-3xl font-semibold text-white'>128</p>
                <p className='mt-2 text-sm text-slate-500'>Updated just now</p>
              </div>
              <div className='rounded-3xl bg-slate-800/90 p-5'>
                <p className='text-sm text-slate-400'>Active Employees</p>
                <p className='mt-3 text-3xl font-semibold text-white'>24</p>
                <p className='mt-2 text-sm text-slate-500'>Monitoring all assignments</p>
              </div>
              <div className='rounded-3xl bg-slate-800/90 p-5'>
                <p className='text-sm text-slate-400'>Pending Reviews</p>
                <p className='mt-3 text-3xl font-semibold text-white'>7</p>
                <p className='mt-2 text-sm text-slate-500'>Tasks waiting for approval</p>
              </div>
            </div>
          </div>

          <div className='rounded-[32px] border border-white/10 bg-slate-900/90 p-7 shadow-[0_25px_50px_rgba(15,23,42,0.35)]'>
            <div className='flex items-center justify-between gap-4'>
              <div>
                <p className='text-sm uppercase tracking-[0.18em] text-slate-500'>Create new task</p>
                <h2 className='mt-2 text-2xl font-semibold text-white'>Quick task builder</h2>
              </div>
            </div>
            <div className='mt-6'>
              <CreateTask />
            </div>
          </div>
        </div>

        <aside className='space-y-6'>
          <div className='rounded-[32px] border border-white/10 bg-slate-900/90 p-7 shadow-[0_25px_50px_rgba(15,23,42,0.35)]'>
            <div className='flex items-center justify-between gap-4'>
              <div>
                <p className='text-sm uppercase tracking-[0.18em] text-slate-500'>Performance</p>
                <h2 className='mt-2 text-2xl font-semibold text-white'>Current overview</h2>
              </div>
            </div>
            <div className='mt-6 grid gap-4'>
              <div className='rounded-3xl bg-slate-800/90 p-5'>
                <p className='text-sm text-slate-400'>Completed Today</p>
                <p className='mt-3 text-2xl font-semibold text-white'>18</p>
              </div>
              <div className='rounded-3xl bg-slate-800/90 p-5'>
                <p className='text-sm text-slate-400'>Open Requests</p>
                <p className='mt-3 text-2xl font-semibold text-white'>12</p>
              </div>
            </div>
          </div>

          <div className='rounded-[32px] border border-white/10 bg-slate-900/90 p-7 shadow-[0_25px_50px_rgba(15,23,42,0.35)]'>
            <div className='flex items-center justify-between gap-4'>
              <div>
                <p className='text-sm uppercase tracking-[0.18em] text-slate-500'>Task activity</p>
                <h2 className='mt-2 text-2xl font-semibold text-white'>Recent assignments</h2>
              </div>
            </div>
            <div className='mt-6'>
              <AllTask />
            </div>
          </div>
        </aside>
      </section>
    </div>
  )
}

export default AdminDashboard
