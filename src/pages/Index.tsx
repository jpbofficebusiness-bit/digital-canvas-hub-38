import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import RecentReleases from "@/components/RecentReleases";
import AboutAuthor from "@/components/AboutAuthor";
import NewsSection from "@/components/NewsSection";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Spacer for fixed header */}
      <div className="h-16 md:h-20" />
      
      <main>
        <HeroCarousel />
        <RecentReleases />
        <AboutAuthor />
        <NewsSection />
        <Newsletter />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
