import React from 'react'
import './section.css'

function Section({Icon, title, color, selected}) {
  return (
    <div className={`section ${selected && 'section--selected'}`}
    style={{
        borderBottom: `3px solid ${color}`,
        color: `${selected && color}`,
    }}
    >
        <Icon />
        <h4 className='section__title'>{title}</h4>
    </div>
  )
}

export default Section
