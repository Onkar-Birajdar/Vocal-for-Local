import React from "react";
import "./Checkout.css";
// import { useStateValue } from "../../StateProvider";
// import CheckoutProduct from "../CheckoutProduct/CheckoutProduct.jsx";

function Checkout() {
    // const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt="amazon"
                />
               
                <div>
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>
                </div>
            </div>

            <div className="checkout__right">
                <h2>Your subTotal Here</h2>
            </div>
            
            {/* {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping Basket is empty</h2>
                    <p>
                        You have no items in your basket. To buy one or more
                        items, click "Add to Basket" next to the item.
                    </p>
                </div>
            ) : (
                <div>
                        <h2 className="checkout__title">Your Shopping Basket</h2>
                        <div className="checkout__items">
                        {basket.map((item) => (
                            <CheckoutProduct
                                item={item.id}
                                title={item.title}
                                image={item.image} 
                                price={item.price} 
                                rating={item.rating}
                            />
                        ))}
                    </div> 
                </div>
            )} */}
        </div>
    );
}

// eslint-disable-next-line no-lone-blocks

export default Checkout;
