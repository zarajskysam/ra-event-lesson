import React from 'react';
import PurchaseModel from '../../models/PurchaseModel';
import PurchaseItem from '../../components/PurchaseItem/PurchaseItem';
import { useState } from 'react';

const PurchaseList = (props) => {
    const [items, setItems] = useState([new PurchaseModel(1, 'Pizza'), new PurchaseModel(2, 'Juice')]);
    const onItemToggle = item => {
        setItems(prevItems => prevItems.map(o => {
            if (o.id === item.id) {
                return {...o, done: !o.done};
            }
            return o;
        }))
    };
    
    const onItemRemove = item => {
        setItems(prevItems => prevItems.filter(o => o.id !== item.id));
    }
    return (
        <ul>
            {items.map(o => <PurchaseItem key={o.id} item={o}
            onToggle={onItemToggle} onRemove={onItemRemove} />)}
        </ul>
    )
}


export default PurchaseList;
