import React, {useState} from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div>
            <Navbar toggle={toggle} />
            <Sidebar toggle={toggle} isOpen={isOpen} />
        </div>
    )
}

export default Hero
