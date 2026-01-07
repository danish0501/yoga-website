import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ClipboardCheck, Target, PlayCircle, Heart, ArrowRight } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/common/ScrollToTop';
import { Button } from '@/components/ui/button';

const consultationSteps = [
  {
    icon: ClipboardCheck,
    step: 1,
    title: 'Comprehensive Assessment',
    description:
      'We begin with an in-depth evaluation of your health history, current conditions, lifestyle factors, and wellness goals. This includes physical assessment, stress evaluation, and lifestyle analysis.',
    duration: '60-90 minutes',
    includes: ['Health history review', 'Physical assessment', 'Lifestyle analysis', 'Goal setting session'],
  },
  {
    icon: Target,
    step: 2,
    title: 'Personalized Plan',
    description:
      'Based on your assessment, our experts create a customized wellness plan tailored specifically to your needs. This includes yoga sequences, breathing practices, dietary recommendations, and lifestyle modifications.',
    duration: '1-2 weeks development',
    includes: ['Custom yoga sequence', 'Breathing protocols', 'Dietary guidelines', 'Progress milestones'],
  },
  {
    icon: PlayCircle,
    step: 3,
    title: 'Guided Execution',
    description:
      'We guide you through your personalized program with regular one-on-one sessions. Your instructor provides hands-on adjustments, modifications as needed, and ongoing support.',
    duration: '4-12 weeks program',
    includes: ['Weekly private sessions', 'Video resources', 'Email support', 'Progress tracking'],
  },
  {
    icon: Heart,
    step: 4,
    title: 'Recovery & Maintenance',
    description:
      'As you progress, we transition you to a sustainable maintenance plan. Regular check-ins ensure continued progress and adjustments as your needs evolve.',
    duration: 'Ongoing support',
    includes: ['Monthly check-ins', 'Plan adjustments', 'Group class access', 'Lifetime resources'],
  },
];

const Consultations = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

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
                Private Consultations
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-heading text-5xl md:text-6xl font-semibold text-foreground mb-6"
              >
                Your Personal <span className="italic text-primary">Journey</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-muted-foreground"
              >
                Experience personalized wellness guidance with our expert practitioners.
                A holistic approach tailored entirely to your unique needs.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-4xl font-semibold text-foreground mb-4">
                Our 4-Step Process
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                A structured approach to your wellness transformation, from initial
                assessment to lasting results.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8 max-w-4xl mx-auto"
            >
              {consultationSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="relative"
                >
                  <div className="flex flex-col md:flex-row gap-6 p-8 bg-card rounded-2xl shadow-soft hover:shadow-card transition-all">
                    {/* Step indicator */}
                    <div className="flex-shrink-0">
                      <motion.div
                        whileHover={{ rotate: 10, scale: 1.1 }}
                        className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center"
                      >
                        <step.icon className="w-8 h-8 text-primary" />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary-foreground text-xs font-medium">
                          Step {step.step}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {step.duration}
                        </span>
                      </div>
                      <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">{step.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {step.includes.map((item, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ scale: 1.05 }}
                            className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm"
                          >
                            {item}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Connector line */}
                  {index < consultationSteps.length - 1 && (
                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="hidden md:block absolute left-12 top-full w-0.5 h-8 bg-border origin-top"
                    />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="font-heading text-4xl font-semibold text-foreground mb-4">
                Ready to Begin?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Schedule your complimentary initial consultation and take the first step
                towards a healthier, more balanced you.
              </p>
              <Link to="/book-session">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    size="lg"
                    className="group"
                  >
                    Book Your Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Consultations;
