import React from 'react'
import './Menu.styles.scss';

export default function Menu(props) {

    const items = props.children ? props.children : <li>No data</li>;
  return (
    <div className={props.noShadow ? 'menu menu--noshadow' : 'menu'}>
    <ul>
      {
          items
      }  
      </ul>     
    </div>
  )
}
