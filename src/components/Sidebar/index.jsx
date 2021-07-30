import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRouter} from './SidebarElements'

const Sidebar = ({toggle, isOpen}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Pizzas</SidebarLink>
                <SidebarLink to="/">Sobremesas</SidebarLink>
                <SidebarLink to="/">Menu Completo</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRouter to="/">Peça Agora</SidebarRouter>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar
