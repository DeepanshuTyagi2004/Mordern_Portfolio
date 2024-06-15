import { projects } from '@/data'
import React from 'react'

const RecentProjects = () => {
  return (
    <div className='py-20'>
      <h1 className='heading'>
        A Small Collection Of {' '}
        <span className='text-purple'> Recent Projects</span>
      </h1>
      <div className='flex flex-wrap gap-16 mt-10 p-4 items-center justify-center'>
        {
          projects.map((project) => (
            <div key={project.id}>
              {project.title}
            </div>
          )
          )
        }
      </div>
    </div>
  )
}
export default RecentProjects