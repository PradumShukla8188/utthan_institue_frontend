import './App.css'
import Header from './app/common/header/header'
// import Home from './app/components/pages/home'
import Footer from './app/common/footer/footer'
import RouteLinks from './app/router'

function App() {
  return (
    <>
      <Header />
      <RouteLinks />
      {/* <Home /> */}
      <Footer />
    </>
  )
}

export default App
