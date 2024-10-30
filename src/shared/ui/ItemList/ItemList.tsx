import React from 'react'
import ItemCard from '../ItemCard/ItemCard';

const items: { name: string; description: string; link: string }[] = [
    {
        name: 'card1',
        description: 'discription1',
        link: '/categories/1/chat-rooms'
    },
    {
        name: 'card2',
        description: 'discription2',
        link: '/'
    },
    {
        name: 'card3',
        description: 'discription3',
        link: '/'
    },
    {
        name: 'card4',
        description: 'discription4',
        link: '/'
    },
    {
        name: 'card5',
        description: 'discription5',
        link: '/'
    },
    {
        name: 'card6',
        description: 'discription6',
        link: '/'
    },
    {
        name: 'card7',
        description: 'discription7',
        link: '/'
    },
    {
        name: 'card8',
        description: 'discription8',
        link: '/'
    },
]

const ItemList = () => {
    return (
        <div className="item-list">
            <div className="item-list_wrapper">
                {items.map(({name, description, link}) => (
                    <ItemCard name={name} description={description} link={link}/>
                ))}
            </div>
        </div>
    )
}

export default ItemList