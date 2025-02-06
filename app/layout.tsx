import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import CartProvider from "./(components)/Providers";
import ShoppingCartModal from "./(components)/ShoppingCartModal";



const font = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
})



export const metadata: Metadata = {
  title: "Ecommerce App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased`}
      >
        
    <CartProvider>
      <ShoppingCartModal/>
       {children}
    </CartProvider>
   
     
      </body>
    </html>
  );
}
