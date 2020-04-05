import React from 'react';
const PaletteFooter = ({ paletteName, emoji }) => {
  return (
    <footer className='Paletter-footer'>
      {paletteName}
      <span className='emoji'>{emoji}</span>
    </footer>
  );
};

export default PaletteFooter;
