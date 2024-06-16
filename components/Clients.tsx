import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { companies, testimonials } from '@/data'

function Clients() {
  return (
    <div className='py-20' id="projects">
      <h1 className='heading'>
        Kind Words from
        <span className='text-purple'> Satisfied Clients</span>
      </h1>
      <div className='flex flex-col items-center max-lg:mt-10'>
        <InfiniteMovingCards
          items={testimonials}
          direction='left'
          speed='slow'
        />
        <div className='flex flex-row flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10'>
          {companies.map(({id, img, name, nameImg}, idx) => (
            <div key={id} className='flex md:max-w-60 max-w-32 gap-2'>
              <img
                src={img}
                alt={name}
                className=' w-5 md:w-10 '
              />
              <img
                src={nameImg}
                alt={name}
                className=' w-20 md:w-24 '
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Clients