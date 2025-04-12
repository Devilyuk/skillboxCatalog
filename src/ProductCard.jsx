import "./ProductCard.css"

export const ProductCard = ({product}) => {
    return (
        <div className="product-card">
            <div className="product-card__image">
                <img src={`./src/assets/images/${product.imageUrl}`} />
            </div>
            <div className="product-card__info">
                {   !product.discount
                    ?
                    (<div className="product-card__price">
                        {
                            product.price.toLocaleString('ru-RU', {
                                style: 'currency',
                                currency: 'RUB'
                            })
                        }
                    </div>)
                    :
                    (<div className="product-card__price">
                        <div className="product-card__price-discount">
                            {
                                (product.price - (product.price * (product.discount / 100))).toLocaleString('ru-RU', {
                                    style: 'currency',
                                    currency: 'RUB'
                                })
                            }
                        </div>
                        <div className="product-card__price-old">
                            {
                                product.price.toLocaleString('ru-RU', {
                                    style: 'currency',
                                    currency: 'RUB'
                                })
                            }
                        </div>
                    </div>)
                }
                
                <div className="product-card__title">{product.title}</div>
            </div>
        </div>
    )
}