import './Global.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Hosting from './components/Hosting'
import Marketing from './components/Marketing'
import Review from './components/review'
import Services from './components/Services'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Services />
      <Marketing />
      <Hosting />
      <Review />
      <Footer />
    </div>
  )
}

export default App
