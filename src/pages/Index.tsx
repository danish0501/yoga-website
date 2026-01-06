import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import ServicesGrid from '@/components/home/ServicesGrid';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import FeaturedSeminars from '@/components/home/FeaturedSeminars';
import Testimonials from '@/components/home/Testimonials';
import CTASection from '@/components/home/CTASection';
import ScrollToTop from '@/components/common/ScrollToTop';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <ServicesGrid />
        <WhyChooseUs />
        <FeaturedSeminars />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Index;
