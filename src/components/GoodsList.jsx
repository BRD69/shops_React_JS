import React from "react";
import {Good} from "./GoodsItem";

function Goods(props) {
    const {
        goods = [],
        addToBasket = Function.prototype,
    } = props;

    if (!goods.length) {
        return <h3>Ничего не найдено</h3>
    }

    return (
        <div className="goods">
            {goods.map(item => (
                <Good
                    key={item.id}
                    {...item}
                    addToBasket={addToBasket}
                />
            ))}
        </div>
    );
}

export {Goods}