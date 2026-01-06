import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import ServicesGrid from '@/components/home/ServicesGrid';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import FeaturedSeminars from '@/components/home/FeaturedSeminars';
import CTASection from '@/components/home/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ServicesGrid />
        <WhyChooseUs />
        <FeaturedSeminars />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
