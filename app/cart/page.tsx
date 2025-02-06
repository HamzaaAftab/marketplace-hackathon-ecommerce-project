import { CartSummary } from "../(components)/CartSummary"
import Navbar from "../(components)/Navbar"

export default function CartPage() {
  return (
    <>
    <Navbar/>
    <h1 className="text-3xl mt-12 md:mt-20 mx-auto text-center font-bold mb-8">Your Shopping Cart</h1>
    <div className="max-w-4xl mx-auto">
    <CartSummary />
    </div>
    </>
    
  )
}