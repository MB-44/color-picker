import React, { useState } from 'react';

function ColorPicker() {

  const [color, setColor] = useState("#FFFFFF");

  function handleColorChange(event) {
    setColor(event.target.value);
  }

  // Copy the current color to the clipboard
  function handleCopy() {
    navigator.clipboard.writeText(color)
      .then(() => {
        alert(`Copied ${color} to clipboard!`);
      })
      .catch(() => {
        alert('Failed to copy the color code.');
      });
  }

  return (
    <div style={{
      display: 'flex', 
      flexDirection: 'column',
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh'
    }}>
      <h2>Color Picker</h2>
      <div 
        className='color-display' 
        style={{
          background: color,
          width: '150px',
          height: '150px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1rem',
          borderRadius: '8px'
        }}
      >
        <p style={{ color: '#000', background: '#fff', padding: '0.5rem', borderRadius: '4px' }}>
          Selected Color: {color}
        </p>
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="color-input" style={{ marginRight: '0.5rem' }}>Select a Color:</label>
        <input 
          id="color-input"
          type="color" 
          value={color} 
          onChange={handleColorChange}
        />
      </div>
      <button onClick={handleCopy}>Copy Color Code</button>
    </div>
  );
}

export default ColorPicker;