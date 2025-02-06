import Navbar from "../(components)/Navbar";
import Link from "next/link";
const CancelPage: React.FC = () => (
    <>
        <Navbar />
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
            <div className="bg-gray-800 p-10 rounded-xl shadow-xl max-w-lg text-center border border-red-500">
                <h1 className="text-4xl font-extrabold text-red-500">Payment Cancelled</h1>
                <p className="text-lg mt-4 text-gray-300">Your transaction was not completed. Please try again later.</p>
                <Link
                    href="/checkout" 
                    className="mt-6 inline-block bg-red-500 hover:bg-red-600 text-white font-bold px-6 py-3 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg"
                >
                    Try Again
                </Link>
            </div>
        </div>
    </>
);

export default CancelPage;
