import Link from "next/link";
import { FiCreditCard } from "react-icons/fi";

export default function CheckoutIcon() {
  return (
    <Link href="/checkout">
      <FiCreditCard size={24} className="hover:text-[#E67E22] transition" />
    </Link>
  );
}
