import { useState } from "react"
import { Link } from "react-scroll"
import { FaBars, FaTimes } from "react-icons/fa"

function Navbar() {

    const [isOpen, setIsOpen] = useState(false)

    const navItems = [
        { path: 'Home', label: 'Home' },
        { path: 'About', label: 'About Me' },
        { path: 'Projects', label: 'Projects' },
        { path: 'Experience', label: 'Experience' },
        { path: 'Contact', label: 'Contact Me' },
    ]

    return (
        <>
          <div className=" sticky top-0 z-50 w-full bg-white shadow-md relative">

    <div className="h-[10vh] flex items-center justify-between px-6 md:px-20">

        {/* Logo */}
        <div className="font-black text-lg">
            Aman-Khan
        </div>
   <div className="hidden md:flex gap-6 font-semibold text-black">
                    {navItems.map((item) => (
                        <Link
                            key={item.label}
                            to={item.path}
                            smooth={true}
                            duration={500}
                            spy={true}
                            offset={-80}
                            activeClass="text-blue-700 font-bold"
                            className="cursor-pointer hover:text-gray-700"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

     
        <div className="md:hidden text-2xl cursor-pointer">
            <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </button>
        </div>
    </div>


    {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 md:hidden">
            {navItems.map((item) => (
                <Link
                    key={item.label}
                    to={item.path}
                    smooth
                    duration={500}
                    offset={-80}
                    onClick={() => setIsOpen(false)}
                >
                    {item.label}
                </Link>
            ))}
        </div>
    )}

</div>

            
        </>
    )
}

export default Navbar
