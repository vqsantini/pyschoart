import './Header.css'

export function Header() {
    return(
        <header>
            <div className="logo"><img src="Logo.svg" alt="" /></div>
            <div className="search"><input type="text" className='input-search'/></div>
            <nav>
                <button className='header-nav'>Collections</button>
                <button className='header-nav'>Feature</button>
                <button className='header-nav'>FAQ</button>
                <button className='header-nav wallet'>Select Wallet</button>
            </nav>
        </header>
    )
}