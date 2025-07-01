import React from 'react'
import "./About.css"

export default function Abouts() {
  return (
    <div className='info'>
      <div className='info__img'>
        <img src="Rectangle.png" alt="" />
      </div>
        
        <div className='info__text'>
            <h2>Mijn naam is Nikita
            </h2>
            <p>
            Ik ben 22 jaar oud.Ik kom uit Wit-Rusland.
            Mijn hobby is schaken tennis spelen met vrienden,gaan zwemmen.
            </p>
            <div className='button-wrapper'>
                <a className='btn-primary' href="/about">Meer bekijken →</a>
            </div>
            
        </div>
        

    </div>
  )
}
