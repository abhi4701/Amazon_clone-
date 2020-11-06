import React ,{useState, useEffect} from 'react'
import "./Payment.css";
import CheckoutProduct from "./CheckoutProduct";
import {useStateValue} from "./StateProvider";
import { Link, useHistory } from 'react-router-dom';
import { useElements, useStripe ,CardElement} from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import {getBasketTotal} from "./reducer";
import axios from "./axois";


function Payment() {

    const stripe=useStripe();
    const elements=useElements();
     const [{basket, user},dispatch]=useStateValue();
     const history =useHistory();
        const [disabled, setDisabled]=useState(true);
        const [error,setError] = useState(null);
        const [succeeded, setSucceeded]=useState(false);
        const [processing, setProcessing]=useState("");
        const [clientSecret, setClientSecret]=useState(true);



        useEffect(() =>{
                const getClientSecret = async () =>{
                        const response =await axios({
                            method: 'post',
                            url: `/payments/create?total=${getBasketTotal(basket)*100}`
                        });
                        setClientSecret(response.data.clientSecret)
                }
                getClientSecret();
        },[basket])

        console.log('The secret is', clientSecret);
       
    

     
     
     const handleChange = event =>{
        
        //listen for change in the card.
        //and display any errors as the customer types their card detials.
        setDisabled(event.empty);
        setError(event.error? event.error.message : "");

     }
    return (
        <div className ="payment">
            <div className="payment__container">
 
                <h1>
                    Checkout (<Link to ="/checkout">
                        {basket?.length} items
                    </Link>)
                </h1>

                    <div className="payment__section">
                        <div className="payment__title">
                            <h3>Delivery Address</h3>
                        </div>
                         <div className="payment__address">
                             <p>{user?.email}</p>
                             <p>133 newtown</p>
                             <p>Kolkata, WB</p>
                         </div>
                    </div>
                    <div className="payment__section">
                    <div className="payment__title">
                            <h3>Review items and delivery</h3>
                        </div>
                        <div className ="payment__items">
                            {basket.map(item => (
                                <CheckoutProduct 
                                     id={item.id}
                                     title={item.title}
                                     image={item.image}
                                     price={item.price}
                                      rating={item.rating}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="payment__section">
                    <div className="payment__title">
                            <h3>Payment Methods</h3>
                        </div>
                        <div className="payment__details">
                                    <form >
                                        <CardElement  onChange ={handleChange}/>
                                      <div className="payment__priceContainer">

                                      <CurrencyFormat 
                                        renderText={(value) =>(
                                            
                                            <h3>Order Total: {value}</h3>
                                       
                                                )}
                                                decimalScale={2}
                                                value={getBasketTotal(basket)}
                                                displayType={"text"}
                                                thousandSeparator={true}
                                                prefix={"$"}
                                                />
                                                    <button >
                                                        <span>{"Buy Now"}</span>
                                                    </button>
                                      </div>

                                      {/* error */}
                                        {error && <div>{error}</div>}
                                    </form>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default Payment
