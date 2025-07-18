import React from 'react'

const Singers = ({singer}) => {
  return (
    <div>
        <h3>Singers:{singer.name}</h3>
        <p>Singers:{singer.age}</p>
        
    
    </div>
  )
}

export default Singers