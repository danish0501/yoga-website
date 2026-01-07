import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TreatmentSection from '@/components/treatments/TreatmentSection';
import CTASection from '@/components/home/CTASection';
import ScrollToTop from '@/components/common/ScrollToTop';

const Treatments = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 hero-gradient">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
              >
                Yoga Treatment & Therapy
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-heading text-3xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6"
              >
                Heal Through <span className="italic text-primary">Yoga</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-muted-foreground"
              >
                Evidence-based therapeutic yoga programs designed to address specific
                health conditions and promote complete healing.
              </motion.p>
            </motion.div>
          </div>
        </section>

        <TreatmentSection />
        <CTASection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Treatments;
