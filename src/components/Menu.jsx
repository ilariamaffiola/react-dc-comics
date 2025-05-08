import React from 'react'

const Menu = (props) => {
  return (
    <li>
        <a href={props.href}>{props.label}</a>
    </li>
  )
}

export default Menu
