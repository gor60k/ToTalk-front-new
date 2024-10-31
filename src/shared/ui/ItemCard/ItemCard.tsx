import React from 'react';
import LinkButton from '../LinkButton/LinkButton';

interface ItemCard {
    link: string;
    name: string;
    description: string;
}

const ItemCard: React.FC<ItemCard> = ({ link, name, description }) => {
    return (
        <div className='item-card'>
            <div className="item-card_wrapper">
                <h3 className="item-card_name">
                    {name}
                </h3>
                <div className="item-card_description">
                    {description}
                </div>
                <LinkButton path={link} text={'Перейти'} />
            </div>
        </div>
    )
}

export default ItemCard