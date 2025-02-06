'use client';
import { useState } from 'react';
import Navbar from '../(components)/Navbar';

const CheckoutPage: React.FC = () => {
    const [loading, setLoading] = useState(false);

    const handleCheckout = async () => {
        setLoading(true);
        try {
            const response = await fetch('/api/payment', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    product: {
                        name: 'Premium VIP Product',
                        price: 1000,
                    }
                }),
            });
    
            const data = await response.json();
            if (data.url) {
                window.location.href = data.url;
            } else {
                console.error('Stripe response error:', data);
            }
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 text-white">
                <div className="bg-gray-800 p-10 rounded-xl shadow-xl max-w-lg text-center">
                    <h1 className="text-3xl font-extrabold mb-4 text-yellow-400">Exclusive VIP Checkout</h1>
                    <p className="text-lg mb-6 text-gray-300">Unlock premium benefits with a secure and fast payment process.</p>
                    <button
                        onClick={handleCheckout}
                        className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold px-8 py-3 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
                        disabled={loading}
                    >
                        {loading ? 'Redirecting...' : 'Proceed to Payment'}
                    </button>
                </div>
            </div>
        </>
    );
};

export default CheckoutPage;
