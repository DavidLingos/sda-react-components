import React, { useState } from 'react';

export default function Menu({ menuName, menuItems }) {
  const [activeItem, setActiveItem] = useState(menuItems[0]);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand">{menuName}</a>
      <ul className="navbar-nav mr-auto">
        {menuItems.map((item) => (
          <li className="nav-item">
            <a
              className={'nav-link' + (activeItem === item ? ' active' : '')}
              onClick={function () {
                setActiveItem(item);
              }}
              href="#">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
