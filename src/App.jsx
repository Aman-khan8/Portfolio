
import Home from './Sections/home'
import Navbar from "./Components/navbar"
import About from './Sections/Aboutme'
import Projects  from './Sections/Projects'
import Experience from './Sections/Experience'
import Contactme from './Sections/Contactme'
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
      <section id='Contact' className='w-full h-[40vh] '>
      <Contactme/> 
      </section>
       <div className="w-full  bg-black text-white md:h-[5vh] flex justify-center items-center text-xs">
                       <h1>ALL Copyright reversed &copy; 2026</h1>
             </div>
    </>
  )
}

export default App
