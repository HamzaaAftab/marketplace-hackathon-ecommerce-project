import Footer from "@/app/(components)/Footer";
import Hero from "@/app/(components)/Hero";
import Navbar from "@/app/(components)/Navbar";
import ProductsSection from "@/app/(components)/ProductsSection";
import RoomSlider from "@/app/(components)/RoomSlider";
export default function Home() {
  return (
  <>
    <Navbar/>
    <Hero/>
    <ProductsSection/>
    <RoomSlider/>
    <Footer/>
  </>
  );
}
