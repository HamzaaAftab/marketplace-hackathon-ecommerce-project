'use client'
import { useState } from "react";

const CheckoutPage: React.FC = () => {
    const [loading, setLoading] = useState(false);

    const handleCheckout = async () => {
        setLoading(true);
        try {
            const response = await fetch("/api/payment", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    product: {
                        name: "Test Product", // Replace with actual product name
                        price: 1000, // Replace with actual price (in dollars, multiplied by 100 for cents)
                    }
                }),
            });
    
            const data = await response.json();
            if (data.url) {
                window.location.href = data.url; // Redirect to Stripe Checkout
            } else {
                console.error("Stripe response error:", data);
            }
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Stripe Hosted Checkout</h1>
            <button
                onClick={handleCheckout}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg"
                disabled={loading}
            >
                {loading ? "Redirecting..." : "Checkout"}
            </button>
        </div>
    );
};

export default CheckoutPage;
