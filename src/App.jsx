import "./App.css";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import ArticleSection from "./components/ArticleSection";



function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-grow">
        <HeroSection />
        <ArticleSection />
      </div>
      <Footer />
    </div>
  );
}

export default App;


