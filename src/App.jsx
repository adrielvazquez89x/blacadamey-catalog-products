import { Outlet } from 'react-router'
import Header from './components/Layout/Header/Header'
import Footer from './components/Layout/Footer/Footer'
import './App.css'


function App() {


  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
