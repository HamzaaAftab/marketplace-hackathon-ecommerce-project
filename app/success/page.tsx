import Link from 'next/link';

const SuccessPage: React.FC = () => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-yellow-200 via-white to-yellow-100 text-gray-900">
        <div className="bg-white p-12 rounded-2xl shadow-2xl max-w-lg text-center border-4 border-yellow-500">
            <h1 className="text-5xl font-extrabold text-yellow-600 drop-shadow-md">✨ Payment Successful! ✨</h1>
            <p className="text-xl mt-6 text-gray-800 font-medium">Thank you for your purchase. Your transaction was completed successfully.</p>
            <Link 
                href="/" 
                className="mt-8 inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold px-8 py-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 shadow-xl"
            >
                Go to Homepage
            </Link>
        </div>
    </div>
);

export default SuccessPage;
