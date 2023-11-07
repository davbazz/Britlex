import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Hamburger from "./components/Hamburger";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="App">
      <div className="relative px-4 py-9 sm:px-10 sm:py-10 lg:px[30px] lg:py-[30px] xl:py-[55px]">
        <Hamburger />
        <Header />
        <main>
          <Hero />
          <Skills />
          <AboutUs />
          <Pricing />
          <ContactUs />
        </main>
        <Footer />
      </div>
    </div>
  );
}
