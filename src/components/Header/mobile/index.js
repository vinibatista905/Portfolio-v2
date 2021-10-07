import React from "react";
import { CgBriefcase, CgWebsite } from "react-icons/cg";
import { FaLaptopCode, FaRegUser } from 'react-icons/fa';
import { RiCloseCircleLine } from 'react-icons/ri';

import "./Mobile.scss";

function Mobile({ isOpen, setIsOpen }) {
  return (
    <div className="mobile">
      <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
        <RiCloseCircleLine />
      </div>
      <div className='mobile-options'>
      <div className='mobile-option'>
                <a href='#projects' onClick={() => setIsOpen(!isOpen)}>
                <CgWebsite className='option-icon' />Projetos
                </a>
            </div>
            <div className='mobile-option' onClick={() => setIsOpen(!isOpen)}>
                <a href='#skills'>
                <FaLaptopCode className='option-icon' />Skills
                </a>
            </div>
            <div className='mobile-option' onClick={() => setIsOpen(!isOpen)}>
                <a href='#work'>
                <CgBriefcase className='option-icon' />Serviços
                </a>
            </div>
            <div className='mobile-option' onClick={() => setIsOpen(!isOpen)}>
                <a href='#contact'>
                <FaRegUser className='option-icon' />Contato
                </a>
            </div>
      </div>
    </div>
  );
}

export default Mobile;
