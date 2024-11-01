import React from 'react'
import ItemCard from '../ItemCard/ItemCard';

const items: { name: string; description: string; link: string }[] = [
    {
        name: 'Спорт',
        description: 'discription1',
        link: '/categories/1/chat-rooms'
    },
    {
        name: 'Книги',
        description: 'discription2',
        link: '/'
    },
    {
        name: 'Игры',
        description: 'discription3',
        link: '/'
    },
    {
        name: 'Кулинария',
        description: 'discription4',
        link: '/'
    },
    {
        name: 'Политика',
        description: 'discription5',
        link: '/'
    },
    {
        name: 'История',
        description: 'discription6',
        link: '/'
    },
    {
        name: 'Что-то',
        description: 'discription7',
        link: '/'
    },
    {
        name: 'Что-то еще',
        description: 'discription8',
        link: '/'
    },
]

const ItemList = () => {
    return (
        <div className="item-list">
            <div className="item-list_wrapper">
                {items.map(({name, description, link}) => (
                    <ItemCard name={name} description={description} link={link} key={name} />
                ))}
            </div>
        </div>
    )
}

export default ItemList