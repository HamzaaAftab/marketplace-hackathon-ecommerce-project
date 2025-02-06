'use client'

import { useShoppingCart } from 'use-shopping-cart'
import { Button } from "@/components/ui/button";
import { useCartModal } from '../(contexts)/cart-model';
import Link from 'next/link';

export function CartSummary() {
  const { 
    totalPrice,
    cartCount,
    redirectToCheckout,
  } = useShoppingCart()
  const { onOpenChange } = useCartModal()

  // Handle undefined values safely
  const safeCartCount = cartCount ?? 0
  const safeTotalPrice = totalPrice ?? 0

  // Convert cents to dollars with proper type checking
  const actualTotalPrice = (safeTotalPrice * 1).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return (
    <div className="border mt-12 md:mt-12 p-6 rounded-lg shadow-lg bg-white transition-all duration-300 hover:shadow-xl">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Your Cart ({safeCartCount} {safeCartCount === 1 ? 'item' : 'items'})
      </h2>
      
      {safeCartCount > 0 ? (
        <>
          <div className="mb-6">
            <p className="text-lg font-semibold text-gray-700">
              Total: <span className="text-2xl text-green-600 ml-2">{actualTotalPrice}</span>
            </p>
          </div>

          <div className="space-y-4">
            <Link href={"/checkout"}>
            <Button 
              onClick={() => redirectToCheckout()}
              className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-6 text-lg font-bold hover:from-green-700 hover:to-green-800 transition-all"
            >
              Proceed to Checkout
            </Button>
            </Link>

            <div className="flex justify-center">
              <Button
                variant="outline"
                onClick={() => onOpenChange(true)}
                className="px-8 py-3 border-gray-300 text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              >
                View Full Cart Details
              </Button>
            </div>
          </div>
        </>
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-500 text-lg mb-6">Your cart is empty</p>
          
          <Button
            variant="secondary"
            className="px-8 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700"
            onClick={() => onOpenChange(true)}
          >
            Continue Shopping
          </Button>
          
        </div>
      )}
    </div>
  )
}