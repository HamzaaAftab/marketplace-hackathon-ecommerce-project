import Link from "next/link";

export default function MobileMenu({ closeMenu }: { closeMenu: () => void }) {
  return (
    <div className="bg-white fixed top-16 left-0 w-full shadow-md py-6 flex flex-col items-center space-y-6 md:hidden transition-all">
      <Link href="/about" onClick={closeMenu} className="text-lg font-semibold hover:text-[#E67E22]">About</Link>
      <Link href="/shop" onClick={closeMenu} className="text-lg font-semibold hover:text-[#E67E22]">Shop</Link>
      <Link href="/cart" onClick={closeMenu} className="text-lg font-semibold hover:text-[#E67E22]">Cart</Link>
    </div>
  );
}
