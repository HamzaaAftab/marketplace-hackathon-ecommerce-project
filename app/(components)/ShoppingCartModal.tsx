'use client';

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useShoppingCart } from "use-shopping-cart";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCartModal } from "../(contexts)/cart-model";
import Link from "next/link";

const ShoppingCartModal = () => {
  const { cartDetails, removeItem, totalPrice, clearCart } = useShoppingCart();
  const { isOpen, onOpenChange } = useCartModal();

  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetTrigger className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
        View Cart
      </SheetTrigger>
      
      <SheetContent className="w-[400px]">
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
        </SheetHeader>

        <div className="mt-4 space-y-4">
          {cartDetails && Object.keys(cartDetails).length > 0 ? (
            Object.values(cartDetails).map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b pb-2">
                <div className="flex items-center space-x-4">
                  <Image 
                    src={item.image as string} 
                    alt={item.name} 
                    width={50} 
                    height={50} 
                    className="rounded-md"
                  />
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-500">${item.price}</p>
                  </div>
                </div>
                <Button 
                  variant="destructive" 
                  size="sm" 
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </Button>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Your cart is empty.</p>
          )}
        </div>

        {totalPrice ? (
          <div className="mt-6">
            <p className="font-semibold text-lg">Total: ${totalPrice}</p>
            <Link href={"/checkout"}>
            <Button className="w-full mt-3 bg-green-600 hover:bg-green-700 transition">
              Checkout
            </Button>
            </Link>
            <Button 
              variant="secondary" 
              className="w-full mt-2" 
              onClick={clearCart}
            >
              Clear Cart
            </Button>
          </div>
        ) : null}
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCartModal;