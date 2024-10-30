import React from 'react';
import { Link } from 'react-router-dom';

interface ItemCard {
    link: string;
    name: string;
    description: string;
}

const ItemCard: React.FC<ItemCard> = ({ link, name, description }) => {
    return (
        <Link to={link} className='item-card'>
            <div className="item-card_wrapper">
                <h3 className="item-card_name">
                    {name}
                </h3>
                <div className="item-card_description">
                    {description}
                </div>
            </div>
        </Link>
    )
}

export default ItemCard