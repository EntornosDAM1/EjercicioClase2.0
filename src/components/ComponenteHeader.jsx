import React from 'react';

import './ComponenteHeader.css';

export default function ComponenteHeader(props) {
  
  return (
    <div>
      <button id="Boton">Inicio</button>
      <button id="Boton">Perfil</button>
      <form action="www.google.com">
        <input type="submit" value="Go to Google" />
      </form>
      </div>
  );
}

export default ComponenteHeader;