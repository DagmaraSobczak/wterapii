import React, {useState} from 'react'

const Nav = ({routes}) => {
  const [activeMenu, setActiveMenu] = useState(null)

  const handleMenuClick = (index) => {
    setActiveMenu(activeMenu === index ? null : index)
  }

  return (
    <nav>
      <ul className="nav-list">
        {routes.map((route, index) => (
          <li
            key={index}
            className="nav-item"
            onMouseEnter={() => handleMenuClick(index)}
            onMouseLeave={() => handleMenuClick(index)}
          >
            <a href={route.href}>{route.title}</a>
            {route.el && activeMenu === index && (
              <ul className="sub-menu">
                {route.el.map((subRoute, subIndex) => (
                  <li key={subIndex}>
                    <a href={subRoute.elHref}>{subRoute.elTitle}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
