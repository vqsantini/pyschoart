import './AboutUS.css'

export function AboutUS() {
  return (
    <div className="aboutUS">
      <div className="aboutUS-title">
        <p className='topic roboto'>About Us</p>
        <p className='lorem poppins half-white'>Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit.</p>
      </div>
      <div className="aboutUS-img"><img src="AboutUS.svg" alt="" /></div>
      <div className="aboutUS-content">
        <p className='title poppins'>Get Popular NFT</p>
        <p className="lorem poppins half-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. </p>
        <button className='button-press button-default purple poppins'>Show More</button>
      </div>
    </div>
  )
}