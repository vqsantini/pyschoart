import './Home.css'

export function Home() {
  const elements = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-visible');
      }
    });
  });

  elements.forEach(el => observer.observe(el));

  return (
    <div className="home">
      <div className="home-left fade-in">
        <div className="home-left-group1">
          <p className='title poppins'>Create, Sell & <br />Collect Your Own <br />Creative NFT</p>
          <p className='lorem poppins half-white'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Nunc vulputate libero et velit.</p>
        </div>
        <div className='home-left-group2'>
          <button className='button-press button-default purple poppins'>Explore Now</button>
          <button className='button-press button-default gray poppins'>Sell NFT</button>
        </div>
        <div className="home-left-group3">
          <div className="home-left-group3-1">
            <p className='title poppins'>37k+</p>
            <p className="subtitle poppins half-white">Artworks</p>
          </div>
          <div className="home-left-group3-1">
            <p className='title poppins'>20k+</p>
            <p className="subtitle poppins half-white">Artists</p>
          </div>
          <div className="home-left-group3-1">
            <p className='title poppins'>99k+</p>
            <p className="subtitle poppins half-white">Aucations</p>
          </div>
        </div>
      </div>
      <div className="home-right">
        <div className="home-right-group1 fade-in"><img src="Img1.svg" className='img-1' /><img src="Img2.svg" className='img-3' /><img src="Img3.svg" className='img-2' /></div>
        <div className="home-right-group1 fade-in-reverse"><img src="Img4.svg" className='img-2' /><img src="Img5.svg" className='img-3' /><img src="Img6.svg" className='img-1' /></div>
        <div className="home-right-group2 fade-in"><img src="Img7.svg" className='img-4' /></div>
      </div>
    </div>
  )
}