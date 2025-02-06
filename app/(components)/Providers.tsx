'use client';

import { ReactNode } from "react";
import { CartProvider as USCProvider } from "use-shopping-cart";
import { CartModalProvider } from "../(contexts)/cart-model";

const CartProvider = ({ children }: { children: ReactNode }) => {
  const stripePublicKey = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY;

  if (!stripePublicKey) {
    throw new Error("Stripe public key is missing. Please check your environment variables.");
  }

  return (
    <USCProvider
      mode="payment"
      cartMode="client-only"
      stripe={stripePublicKey}
      successUrl="http://localhost:3000/success"
      cancelUrl="http://localhost:3000/error"
      currency="USD"
      billingAddressCollection={true}
      shouldPersist={true}
      language="en-US"
    >
      <CartModalProvider>
        {children}
      </CartModalProvider>
    </USCProvider>
  );
};

export default CartProvider;