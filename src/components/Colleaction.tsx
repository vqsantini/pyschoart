import './Colleaction.css'

export function Colleaction() {
  return (
    <div className="colleaction">
      <div className="colleaction-apresentation">
        <p className='topic roboto'>Colleaction</p>
        <p className='subtitle poppins half-white'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</p>
      </div>
      <div className="colleaction-topics">
        <button className='gray poppins'>Art</button>
        <button className='gray poppins'>Sport</button>
        <button className='gray poppins'>Photograpy</button>
        <button className='gray poppins'>Patern</button>
      </div>
      <div className="colleaction-content"></div>
    </div>
  )
}