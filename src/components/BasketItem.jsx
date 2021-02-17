import React from "react";

function BasketItem(props) {
    const {
        id,
        name,
        price,
        quantity,
        removeToBasket = Function.prototype,
        incQuantity=Function.prototype,
        decQuantity=Function.prototype,
    } = props
    return(
        <li className="collection-item">
            {name} <i onClick={() => incQuantity(id)} className="tiny material-icons basket-quantity">add</i>x{quantity}<i onClick={() => decQuantity(id)} className="tiny material-icons basket-quantity">remove</i> = {quantity * price}
            <span onClick={() => removeToBasket(id)} className="secondary-content basket-delete"><i className="material-icons">clear</i></span>
        </li>
    );
}

export {BasketItem}