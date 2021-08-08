import React , {useState} from 'react';
import NavbarS from '../components/NavbarStudent';
import Sidebar from '../components/Sidebar';
import HeroSection from '../components/HeroSectionSt';
import {  homeObjStudentOne, homeObjStudentTree, homeObjStudentTwo } from '../components/InfoSectionStudent/Data';
import InfoSection from '../components/InfoSectionStudent';
import Carrousel from '../components/Carrousel';
import Document from '../components/ServicesStudent';
import { doc1, doc2, doc3, doc4 } from '../components/ServicesStudent/Data';

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
        </>
    );
};

export default StudentPage