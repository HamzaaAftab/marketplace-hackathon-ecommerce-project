import Footer from "./(components)/Footer";
import Hero from "./(components)/Hero";
import Navbar from "./(components)/Navbar";
import ProductsSection from "./(components)/ProductsSection";
import RoomSlider from "./(components)/RoomSlider";


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
