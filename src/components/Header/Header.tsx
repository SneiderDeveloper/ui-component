import React from 'react';
import { Search } from "../Search/Search";
import { MenuBar } from "../MenuBar/MenuBar";

export const Header = () => {
  return (
    <div style={{ width: '100%' }}>
      <header style={{ 
        background: 'darkblue', 
        padding: '15px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        width: '100%' // Cambia aquí para ajustar el ancho
      }}>
        <div className='row' />
        <div style={{ display: 'flex', alignItems: 'right' }}>
          <img src="https://www.bosquesdecolombia.com/themes/imagina2017/img/logo.png" style={{ width: '390px', marginRight: '-10px', marginLeft: '35px' }} />
        </div>
        
        <div className='row 2'>
          <p style={{ color: 'white', marginRight: '55px' }}>316-4726059 • 311 846 1857 • 315 617 7252</p>
          <p style={{ color: 'white' }}>bosquesdecolombia.gerencia@hotmail.com</p>
        </div>

        <Search label="Buscar" placeholder="Busqueda" width="250px" radius="md" />
      </header>

      
      <div style={{
         background:'darkblue',
         padding:'15px',
         display:'flex',
         justifyContent:'end' 
       }}>
         <MenuBar />
       </div>
    </div>  
  );
}

