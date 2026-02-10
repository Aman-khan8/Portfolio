
import Home from './Sections/home'
import Navbar from "./Components/navbar"
import About from './Sections/Aboutme'
import Projects  from './Sections/Projects'
function App() {


  return (
    <>
    <Navbar/>

    <section id='Home' className='w-full h-screen items-center '>
      <Home/> 
      </section>
      <section id='About' className='w-full h-screen'>
      <About/> 
      </section>
             <section id='Projects' className='w-full '>
      <Projects/> 
      </section>
    </>
  )
}

export default App
