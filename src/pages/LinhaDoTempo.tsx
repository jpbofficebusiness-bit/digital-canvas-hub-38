import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BiographicalTimeline from "@/components/BiographicalTimeline";


const LinhaDoTempo = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <div className="h-16 md:h-20" />

      <main className="flex-1 py-8 md:py-12">
        <div className="container mx-auto px-4">
          <BiographicalTimeline />
        </div>
      </main>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default LinhaDoTempo;
