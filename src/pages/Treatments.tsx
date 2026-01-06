import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import TreatmentSection from '@/components/treatments/TreatmentSection';
import CTASection from '@/components/home/CTASection';

const Treatments = () => {
  return (
    <div className="min-h-screen">
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
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Yoga Treatment & Therapy
              </span>
              <h1 className="font-heading text-5xl md:text-6xl font-semibold text-foreground mb-6">
                Heal Through <span className="italic text-primary">Yoga</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Evidence-based therapeutic yoga programs designed to address specific
                health conditions and promote complete healing.
              </p>
            </motion.div>
          </div>
        </section>

        <TreatmentSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Treatments;
