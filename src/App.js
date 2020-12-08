import React from "react";
import "./App.css";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe("pk_test_51Htz2PIH9RhEFlr9ReO3VS6F26w3Foae91UsHOdBKnTK2a3ZMhBnI3MJisec8cqGeKzvshUe4RvVAetWEXuJ6zCh00aKkwQzGa");

function App() {
  return (
    <div className="App">
      <div className="product">
        <img
          src="https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress"
          alt="laptop"
          style={{ width: "100%", height: "auto" }}
        />
        <div>
          <Elements stripe={stripePromise}>
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </div>
  );
}

export default App;
