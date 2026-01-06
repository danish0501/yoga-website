import { motion } from 'framer-motion';
import { Award, Clock, Shield, Sparkles } from 'lucide-react';
import yogaMeditationImage from '@/assets/yoga-meditation.jpg';

const features = [
  {
    icon: Award,
    title: 'Certified Experts',
    description:
      'Our instructors hold internationally recognized certifications with decades of combined experience.',
  },
  {
    icon: Shield,
    title: 'Medical-Grade Approach',
    description:
      'Evidence-based practices validated by healthcare professionals for therapeutic outcomes.',
  },
  {
    icon: Sparkles,
    title: 'Personalized Care',
    description:
      'Every program is tailored to your unique body, goals, and wellness journey.',
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description:
      'Morning, evening, and weekend sessions to fit seamlessly into your lifestyle.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={yogaMeditationImage}
                alt="Yoga meditation practice"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute top-1/2 -right-4 w-8 h-8 bg-primary organic-shape animate-float" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Why Serenity
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
              A Holistic Path to{' '}
              <span className="italic text-primary">Healing</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              We blend ancient yogic wisdom with modern science to create
              transformative experiences that address your complete well-being—body,
              mind, and spirit.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading text-lg font-semibold text-foreground mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
