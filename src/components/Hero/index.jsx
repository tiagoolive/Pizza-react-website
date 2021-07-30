import React, {useState} from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import {HeroContainer, HeroContent, HeroItems, HeroH1, HeroP, HeroBtn} from './HeroElements'

const Hero = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <HeroContainer>
            <Navbar toggle={toggle} />
            <Sidebar toggle={toggle} isOpen={isOpen} />
            <HeroContent>
                <HeroItems>
                    <HeroH1>Melhor Pizza Sempre</HeroH1>
                    <HeroP>Pronta em 10 minutos</HeroP>
                    <HeroBtn>Peça Já</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
