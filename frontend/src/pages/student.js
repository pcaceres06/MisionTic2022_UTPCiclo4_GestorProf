import React , {useState} from 'react';
import NavbarS from '../components/NavbarStudent';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSectionSt';
import {  homeObjStudentFour, homeObjStudentOne, homeObjStudentTree, homeObjStudentTwo } from '../components/InfoSectionStudent/Data';
import InfoSection from '../components/InfoSectionStudent';
import Carrousel from '../components/Carrousel';
import Document from '../components/ServicesStudent';
import { doc1, doc2, doc3, doc4 } from '../components/ServicesStudent/Data';
import Presenta from '../components/PresentaStudent';
import { pre1,pre2,pre3 } from '../components/PresentaStudent/Data';
import Contact from '../components/Contact';
import Footer from '../components/Footer';



const StudentPage = () => {
    const [isOpen , setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <NavbarS toggle = {toggle} />
            <HeroSection/>
            <InfoSection {...homeObjStudentOne}/>
            <Carrousel></Carrousel>
            <InfoSection {...homeObjStudentTwo}/>
            <Document {...doc1}/>
            <Document {...doc2}/>
            <Document {...doc3}/>
            <Document {...doc4}/>
            <InfoSection {...homeObjStudentTree}/>
            <Presenta {...pre1}/>
            <Presenta {...pre2}/>
            <Presenta {...pre3}/>
            <InfoSection {...homeObjStudentFour}/>
            <Contact></Contact>
            <Footer></Footer>
        </>
    );
};

export default StudentPage