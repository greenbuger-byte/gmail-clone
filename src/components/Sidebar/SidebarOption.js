import React from 'react';
import './sidebarOption.scss';

const SidebarOption = ({Icon, title, number, selected}) => {
    return (
        <div className={`sidebarOption ${selected && 'sidebarOption__active'}`}>
            <Icon />
            <h3>{title}</h3>
            <p>{number}</p>
        </div>
    );
};

export default SidebarOption;