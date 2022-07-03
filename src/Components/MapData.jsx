import React from 'react'

export const MapData = (props) => {
  return (
    <div>
       {
        props.arr.map((elem)=>
        (
            <div key={elem.id}>
                <h5>{elem.name}</h5>
                </div>
        ))
       }


    </div>
  )
}
