function Good(props) {
    const {
        id,
        name,
        description,
        price,
        priceNoDiscount,
        image,
        icon,
        full_background,
        addToBasket = Function.prototype,
    } = props;
    return (
        <div className="card">
            <div className="card-image">
                <img src={full_background} alt={name}/>
                {/*<a className="btn-floating halfway-fab waves-effect waves-light red"><i*/}
                {/*    className="material-icons">add</i></a>*/}
            </div>
            <div className="card-content">
                <span className="card-title">{name}</span>
                <p>{description}</p>
                <div className="card-action">
                    <button className="btn" onClick={() => addToBasket({id, name, price})}>Купить</button>
                    <span className="right" style={{fontSize: '1.5rem'}}>{price} руб.</span>
                </div>
            </div>
        </div>
    );
}

export {Good}
