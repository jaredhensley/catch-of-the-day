import React from 'react';
import {formatPrice} from '../helpers';
class Order extends React.Component {

    renderOrder(key) {
        const fish = this.props.fishes[key];
        const count = this.props.fishes[key];

        if (!fish || fish.status === 'unavailable' {
            return <li key={key}>Sorry, fish is no longer available</li>
        })
    }
    render() {
        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevTotal, key) => {
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            const isAvailable = fish && fish.status === 'available';
            if(isAvailable) {
                return prevTotal + (count * fish.price || 0)
            }
            return prevTotal;
        }, 0);
        return (
            <div className="order-wrap">
                <h2>YOUR ORDER</h2>
                <ul className="order">
                    {orderIds.map(this.renderOrder)}
                    <li className="total">
                        <strong>Total:</strong>
                        {formatPrice(total)}
                    </li>
                </ul>
            </div>
        )
    }
}

export default Order;
