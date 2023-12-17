import './App.css'
import Analytics from './components/analytics/analytics'
import Circle from './components/decorations/Circle'
import Line from './components/decorations/Line'
import Featured from './components/featured/featured'
import Footer from './components/footer/Footer'
import Hero from './components/hero/hero'
import Nav from './components/navbar/nav'
import Ready from './components/ready/Ready'
import Testi from './components/testimonials/Testi'

function App() {
    return (
        <>
            <Nav />
            <Circle top={'top-[40%]'} xPosition={'right-0'} color={'bg-light-color'} />
            <Circle top={'top-0'} xPosition={'left-[10%]'} color={'bg-main-color'} />
            <Hero />
            <Featured />
            <Analytics />
            <Testi />
            <Ready />
            <Footer />
            <Line />
        </>
    )
}

export default App