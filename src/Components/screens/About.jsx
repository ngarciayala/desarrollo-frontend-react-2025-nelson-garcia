import { useState } from 'react';

const About = () => {
    // los hooks en react son funciones ya definidas
    // los hooks siempre tiene el prefijo use
    // hook useState, useEffect, useContext, useRef, useTransition
    // es posible crear nuestos propios hooks: useService, useImage
    
    // el hook useState me permite manejar variables de estado
    const [ nameComponent, setNameComponent ] = useState('About');
    
    return (
        <>
            <p>Component name: {nameComponent}</p>
            <button onClick={() => {setNameComponent('Curso de React')}}>Press</button>        </>
    );
}

export default About;