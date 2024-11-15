import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const menuItems = [
  {
    title: 'Diagnósticos',
    link: '/diagnostic',
  },
  {
    title: 'Equipo',
    link: '/team',
  },
  {
    title: 'Mis servicios',
    dropdown: [
      { title: 'Asesoramiento en neurodivergencias', link: '/consulting' },
      { title: 'Supervisión a terapeutas', link: '/supervision' },
      { title: 'Asesoría para empleados', link: '/employee-advice' },
    ],
  },
  {
    title: 'Productos',
    dropdown: [
      { title: 'Ebooks', link: '/ebooks' },
      { title: 'Cursos', link: '/cursos' },
      { title: 'Material gratuito', link: '/free' },
    ],
  },
  {
    title: 'Sobre mí',
    link: '/aboutme',
  },
  {
    title: 'Contacto',
    link: '/contact',
  },
];

const Menu = ({ isOpen }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Función para manejar la apertura y cierre de los dropdowns
  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <nav className={`mainmenu ${isOpen ? 'isActive' : ''}`}>
      {/* Menú principal */}
      <ul className={`nav__list ${isOpen ? 'isActive' : ''}`}>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`nav__list--item ${
              item.dropdown ? 'nav__list--services' : ''
            }`}
          >
            {item.link ? (
              <Link to={item.link} className="nav__link">
                {item.title}
              </Link>
            ) : (
              <div className="dropdown">
                <button
                  className="dropdown-toggle nav__link"
                  onClick={() => handleDropdownToggle(index)}
                >
                  {item.title}
                </button>
                {activeDropdown === index && (
                  <ul className="nav__submenu">
                    {item.dropdown.map((subItem, subIndex) => (
                      <li key={subIndex} className="nav__submenu--item">
                        <Link to={subItem.link} className="nav__link">
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
