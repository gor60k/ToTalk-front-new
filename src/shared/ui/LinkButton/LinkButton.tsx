import React from 'react';
import { Link } from 'react-router-dom';

interface LinkButtonProps {
    path: string;
    text: string;
}

const LinkButton: React.FC<LinkButtonProps> = ({path, text}) => {
    return (
        <Link className='base-button' to={path}>
            <span className='base-button_text'>{text}</span>
        </Link>
  )
}

export default LinkButton