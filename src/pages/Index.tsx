import HeroSection from "@/components/HeroSection";
import ProductCatalog from "@/components/ProductCatalog";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <ProductCatalog />
      <Footer />
    </div>
  );
};

export default Index;
