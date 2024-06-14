import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'

function Grid() {
  return (
    <section id='about'>
      <BentoGrid>
        {
          [
            {
              title: "Title1",
              description: "Desc1",
              id: 1,
            },
            {
              title: "Title1",
              description: "Desc1",
              id: 1,
            },
            {
              title: "Title1",
              description: "Desc1",
              id: 1,
            },
            {
              title: "Title1",
              description: "Desc1",
              id: 1,
            },
            {
              title: "Title1",
              description: "Desc1",
              id: 1,
            },
            {
              title: "Title1",
              description: "Desc1",
              id: 1,
            },
          ].map((item) => (
            <BentoGridItem
              key={item.id}
              title={item.title}
              description={item.description}
              id={item.id}                  
            />
          ))
        }
      </BentoGrid>
    </section>
  )
}

export default Grid