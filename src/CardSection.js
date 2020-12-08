import React from 'react';
import { ElementsConsumer, CardElement } from '@stripe/react-stripe-js';
import "./App.css";

const CARD_ELEMENT_OPTIONS = {

    style:{
        base:{
            color:'#303238',
            fontSize:'16px',
            fontFamily: 'sans-serif',
            fontSmoothing:'antialiased',
            "::placeholder":{
                color:'#CFD7DF'
            }
        },
        invalid:{
            color:'#e5424d',
            ":focus":{
                color:'#303238'
            }
        }
    }
};

export default function CardSection(){
    return(
        <label >
            <h4 className='Cardetail'>Card Details</h4>
            
            <CardElement options={CARD_ELEMENT_OPTIONS}/>
        </label>
    )
}