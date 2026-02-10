import { Children } from "react"
import {Link} from "react-scroll"

function Navbar(){
    const navItems=[
        {path:'Home',Children: 'Home'},
        {path:'About',Children: 'About Me'},
        {path:'Projects',Children: 'Projects'},
        {path:'Experience',Children: 'Experience'},
        {path:'Contact',Children: 'Contact Me'},
    ]

    return(
        <>
        <div className=" hidden md:flex w-full h-[10vh] bg-white lg:px-40 sticky top-0 shadow-md items-center justify-between">

            {/* Left Side */}
            <div className="font-black">
                <a href="https://www.linkedin.com/in/aman-khan-82970a294/">Aman-Khan</a>
            </div>

            {/* Right Side */}
            <div className="flex gap-3 font-semibold text-black">
                {navItems.map((item)=>(
                    <div key={item.Children}>
                       <Link
  to={item.path}
  smooth={true}
  duration={500}
  spy={true}
  activeClass="text-blue-700 font-bold" // Tailwind classes
  className="cursor-pointer hover:text-gray-700"
>
  {item.Children}
</Link>
                    </div>
                ))}
            </div>

        </div>
        </>
    )
}
export default Navbar
