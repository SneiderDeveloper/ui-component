import React from 'react';
import { Search } from "../Search/Search";
import { MenuBar } from "../MenuBar/MenuBar";

export const Header = () => {
  return (
    <div style={{ width: '100%', position: 'fixed' }}>
      <header style={{ 
        background: 'white',
        padding: '15px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        width: '100%', // Cambia aquí para ajustar el ancho
        color: 'black'
      }} className="flex flex-row flex-wrap space-x-4">
          <div style={{ alignItems: 'right'}} className='flex-1'>
              <img src="https://www.bosquesdecolombia.com/themes/imagina2017/img/logo.png"
                   style={{minWidth: 300, maxWidth: 390, marginRight: '-10px', marginLeft: '35px'}}/>
          </div>

          <div className='flex-1'>
              <p>316-4726059 • 311 846 1857 • 315 617 7252</p>
              <p>bosquesdecolombia.gerencia@hotmail.com</p>
          </div>

          <Search label="Buscar" placeholder="Busqueda" width="250px" radius="md"/>
      </header>


        <div style={{
            background: 'darkblue',
            padding: '15px',
            display: 'flex',
            justifyContent: 'end'
        }}>
            <MenuBar/>
        </div>
    </div>
  );
}

