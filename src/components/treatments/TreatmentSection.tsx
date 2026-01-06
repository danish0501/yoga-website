import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import therapyImage from '@/assets/therapy-room.jpg';

const treatments = [
  {
    id: 'chronic-pain',
    title: 'Chronic Pain Management',
    subtitle: 'Back & Neck Relief',
    description:
      'Evidence-based yoga therapy protocols designed to alleviate chronic back and neck pain through targeted postures, breathwork, and progressive muscle relaxation techniques.',
    benefits: [
      'Reduces inflammation and muscle tension',
      'Improves spinal mobility and alignment',
      'Strengthens core stabilizing muscles',
      'Decreases reliance on pain medication',
    ],
    stats: { sessions: '8-12', success: '87%' },
  },
  {
    id: 'stress-anxiety',
    title: 'Stress & Anxiety Reduction',
    subtitle: 'Mental Wellness Protocol',
    description:
      'Comprehensive mind-body intervention combining pranayama (breathwork), meditation, and restorative yoga to regulate the nervous system and promote emotional balance.',
    benefits: [
      'Activates parasympathetic nervous system',
      'Reduces cortisol and stress hormones',
      'Improves sleep quality and duration',
      'Enhances emotional resilience',
    ],
    stats: { sessions: '6-10', success: '92%' },
  },
  {
    id: 'respiratory',
    title: 'Respiratory Health',
    subtitle: 'Breathing Optimization',
    description:
      'Specialized breathing practices and chest-opening postures to enhance lung capacity, improve oxygen uptake, and support recovery from respiratory conditions.',
    benefits: [
      'Increases vital lung capacity',
      'Strengthens respiratory muscles',
      'Clears congestion and improves airflow',
      'Supports post-illness recovery',
    ],
    stats: { sessions: '10-14', success: '85%' },
  },
  {
    id: 'hormonal',
    title: 'Hormonal Balance',
    subtitle: 'Endocrine System Support',
    description:
      'Targeted yoga sequences and lifestyle modifications to support hormonal equilibrium, particularly beneficial for thyroid function, menstrual health, and menopause management.',
    benefits: [
      'Regulates thyroid function naturally',
      'Eases menstrual discomfort',
      'Supports healthy menopause transition',
      'Balances energy levels throughout day',
    ],
    stats: { sessions: '12-16', success: '79%' },
  },
];

const TreatmentSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Therapeutic Programs
          </span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Medical-Grade Yoga{' '}
            <span className="italic text-primary">Therapy</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our therapeutic programs are developed in collaboration with healthcare
            professionals to address specific health conditions through targeted
            yoga interventions.
          </p>
        </motion.div>

        {/* Featured Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden mb-16 shadow-elevated"
        >
          <img
            src={therapyImage}
            alt="Therapy room"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8">
            <h3 className="font-heading text-2xl md:text-3xl font-semibold text-background mb-2">
              Evidence-Based Healing
            </h3>
            <p className="text-background/80 max-w-xl">
              Our treatment protocols are backed by clinical research and tailored
              to each individual's health profile.
            </p>
          </div>
        </motion.div>

        {/* Treatment Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {treatments.map((treatment, index) => (
            <motion.div
              key={treatment.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-card rounded-2xl shadow-soft hover:shadow-card transition-shadow"
            >
              <span className="inline-block px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-medium mb-4">
                {treatment.subtitle}
              </span>
              <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                {treatment.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {treatment.description}
              </p>

              <ul className="space-y-3 mb-6">
                {treatment.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between pt-6 border-t border-border">
                <div className="flex gap-6">
                  <div>
                    <div className="text-2xl font-heading font-semibold text-foreground">
                      {treatment.stats.sessions}
                    </div>
                    <div className="text-xs text-muted-foreground">Sessions</div>
                  </div>
                  <div>
                    <div className="text-2xl font-heading font-semibold text-primary">
                      {treatment.stats.success}
                    </div>
                    <div className="text-xs text-muted-foreground">Success Rate</div>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="group">
                  Learn More
                  <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TreatmentSection;
