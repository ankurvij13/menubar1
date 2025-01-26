// src/MenuBar.js
import React from 'react';
import './Menubar.css'; // We'll add styles in this file

function MenuBar() {
  return (
    <div className="menu-bar">
      <ul className="menu-list">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </div>
  );
}

export default MenuBar;
