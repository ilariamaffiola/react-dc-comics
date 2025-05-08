import React from 'react'
import Menu from './Menu'

const links = [
    {
      id: 1,
      href: "#",
      label: "Characters",
      current: false,
    },
    {
      id: 2,
      href: "#",
      label: "Comics",
      current: true,
    },
    {
      id: 3,
      href: "#",
      label: "Movies",
      current: false,
    },
    {
      id: 4,
      href: "#",
      label: "TV",
      current: false,
    },
    {
        id: 4,
        href: "#",
        label: "Games",
        current: false,
      },
      {
        id: 4,
        href: "#",
        label: "Collectibles",
        current: false,
      },
      {
        id: 4,
        href: "#",
        label: "Videos",
        current: false,
      },
      {
        id: 4,
        href: "#",
        label: "Fans",
        current: false,
      },
      {
        id: 4,
        href: "#",
        label: "News",
        current: false,
      },
      {
        id: 4,
        href: "#",
        label: "Shop",
        current: false,
      }
    ]

const Header = () => {
  return (
    <header className="container">
        <figure>
            <img src="/src/assets/img/dc-logo.png" alt="logo" />
        </figure>
        <ul>
        {links.map((link) => (
        <Menu
        key={`menu-${link.id}`}
        href={link.href}
        label={link.label}
        
        />

        ))}   
            
        </ul>
    </header>
  );
}

export default Header
