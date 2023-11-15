import React from 'react';


export const NavBarLinks = ({ href, label, active, onClick}) => {
  return (
 <li>
    <a href={href} className={active ? 'active' : ''}
    onClick={onClick}>
    {label}
    </a>
</li>
 );
};

export default NavBarLinks;