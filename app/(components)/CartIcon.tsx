import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";

export default function CartIcon() {
  return (
    <Link href="/cart" className="relative">
      <FiShoppingCart size={24} className="hover:text-[#E67E22] transition" />
      {/* Badge */}
      <span className="absolute -top-2 -right-2 bg-[#E67E22] text-white text-xs font-bold px-2 py-0.5 rounded-full">2</span>
    </Link>
  );
}
