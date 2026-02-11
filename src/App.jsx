
import Home from './Sections/home'
import Navbar from "./Components/navbar"
import About from './Sections/Aboutme'
import Projects  from './Sections/Projects'
import Experience from './Sections/Experience'
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
             <section id='Projects' className='w-full h-screen '>
      <Projects/> 
      </section>
       <section id='Experience' className='w-full h-screen'>
      <Experience/> 
      </section>
    </>
  )
}

export default App
