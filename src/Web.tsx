import { AboutUS } from './components/AboutUS'
import { Colleaction } from './components/Colleaction'
import { Header } from './components/Header'
import { Home } from './components/Home'
import Navbar from './components/Navbar'
import { Spensored } from './components/Spensored'
import './Web.css'

export function Web() {
    return (
        <div className="web">
            <Header />
            <Home />
            <Spensored />
            <AboutUS />
            <Colleaction />
            {/* <Navbar /> */}
        </div>
    )
}