import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-secondary p-12 md:p-16 lg:p-20"
        >
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold text-secondary-foreground mb-6">
              Begin Your Wellness Journey{' '}
              <span className="italic text-primary">Today</span>
            </h2>
            <p className="text-secondary-foreground/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
              Take the first step towards a balanced, healthier you. Schedule a
              free consultation and discover how our holistic approach can
              transform your life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                Book Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Us Now
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
