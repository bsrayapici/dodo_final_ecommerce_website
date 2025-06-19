import React from "react";

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <div className="product-image-container">
                <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                />
            </div>

            <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-category">{product.category}</p>

                <div className="product-colors">
                    {product.colors.map((color, index) => (
                        <span
                            key={index}
                            className="color-dot"
                            style={{ backgroundColor: color }}
                        />
                    ))}
                </div>
                <div className="product-price">${product.price}</div>
            </div>

            <style jsx>{`
                .product-card {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    padding: 0px;
                    width: 239px;
                    height: 615px;
                    background: #FFFFFF;
                    flex: none;
                    order: 0;
                    flex-grow: 0;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                    border-radius: 8px;
                    overflow: hidden;
                }

                .product-image-container {
                    position: relative;
                    width: 100%;
                    height: 427px;
                    overflow: hidden;
                }

                .product-image {
                    position: absolute;
                    left: 0px;
                    right: 0px;
                    top: 0px;
                    bottom: 0px;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    object-position: center;
                }

                .product-info {
                    padding: 25px 25px 35px 25px;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 10px;
                    width: 100%;
                    flex: 1;
                }

                .product-name {
                    font-family: 'Montserrat', sans-serif;
                    font-style: normal;
                    font-weight: 700;
                    font-size: 16px;
                    line-height: 24px;
                    color: #252B42;
                    margin: 0;
                }

                .product-category {
                    font-family: 'Montserrat', sans-serif;
                    font-style: normal;
                    font-weight: 700;
                    font-size: 14px;
                    line-height: 24px;
                    color: #737373;
                    margin: 0;
                }

                .product-colors {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    margin: 5px 0;
                }

                .color-dot {
                    width: 16px;
                    height: 16px;
                    border-radius: 50%;
                    border: 1px solid rgba(0, 0, 0, 0.1);
                }

                .product-price {
                    font-family: 'Montserrat', sans-serif;
                    font-style: normal;
                    font-weight: 700;
                    font-size: 16px;
                    line-height: 24px;
                    color: #23A6F0;
                    margin-top: auto;
                }
            `}</style>
        </div>
    );
};

export default ProductCard;