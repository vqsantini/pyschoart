import { useState } from 'react'
import './Colleaction.css'

export function Colleaction() {

  const [active, setActive] = useState(0)

  const butons = ["Art","Sport","Photography","Patern"]


  return (
    <div className="colleaction">
      <div className="colleaction-apresentation">
        <p className='topic roboto'>Colleaction</p>
        <p className='subtitle poppins half-white'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</p>
      </div>
      <div className="colleaction-topics">
        {butons.map((text, index) => (
          <button key={index}
          onClick={() => setActive(index)} 
          className={active === index ? "purple poppins" : "gray poppins"}
          >{text}</button>
        ))}
        
      </div>
      <div className="colleaction-content"></div>
    </div>
  )
}