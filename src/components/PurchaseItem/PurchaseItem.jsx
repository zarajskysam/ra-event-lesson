import React from 'react';
import PropTypes from 'prop-types';
import PurchaseModel from '../../models/PurchaseModel';
import PurchaseList from '../PurchaseList/PurchaseList';



const PurchaseItem = (props) => {

    const { name,done } = props.item;

    const onToggle = () => {
        props.onToggle(props.item);
    }

    const onRemove = () => {
        props.onRemove(props.item);
    }

    return (
        <li>{name}
            <button>{done ? 'Uncheck' : 'Check'}</button>
            <button>Remove</button>
        </li>
    )
}

PurchaseItem.propTypes = {
   item: PropTypes.instanceOf(PurchaseModel).isRequired,
   onToggle: PropTypes.func.isRequired,
   onRemove: PropTypes.func.isRequired,
}

export default PurchaseItem;
