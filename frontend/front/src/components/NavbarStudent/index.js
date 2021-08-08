import React , {useState ,useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo,MobileIcon, NavMenu , NavItem, NavLinks,NavBtn,NavBtnLink} from './NavbarSElements';
import { IconContext } from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll'

const NavbarS = ({toggle}) => {
    const [scrollNav , setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    },[])

    const toggleHome = () =>{
        scroll.scrollToTop();
    };

    return (
        <>
        <IconContext.Provider value={{color : '#fff'}}>
           <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>
                        GestoProf
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks 
                            to='videos' 
                            smooth={true} 
                            duration ={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            >
                            Videos
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='documentos'
                            smooth={true} 
                            duration ={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            >
                            Documentos</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='presentaciones'
                            smooth={true} 
                            duration ={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            >Presentaciones</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='contacto'
                            smooth={true} 
                            duration ={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            >Contacto</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to='/signin'
                        smooth={true} 
                        duration ={500} 
                        spy={true} 
                        exact='true' 
                        offset={-80}
                        >Sign Out</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav> 
            </IconContext.Provider>
        </>
    )
}

export default NavbarS
