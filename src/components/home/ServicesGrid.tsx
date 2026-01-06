import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Flower2, Heart, MessageCircle, Users } from 'lucide-react';

const services = [
  {
    icon: Flower2,
    title: 'Yoga Classes',
    description:
      'From gentle beginners to advanced practitioners, find your perfect practice with Hatha, Vinyasa, and Yin yoga.',
    link: '/classes',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: Heart,
    title: 'Holistic Treatments',
    description:
      'Medical-grade yoga therapy for chronic pain, stress relief, respiratory health, and hormonal balance.',
    link: '/treatments',
    color: 'bg-accent/20 text-accent',
  },
  {
    icon: MessageCircle,
    title: 'Private Consultations',
    description:
      'Personalized assessment and tailored wellness plans designed specifically for your unique needs.',
    link: '/consultations',
    color: 'bg-secondary/20 text-secondary-foreground',
  },
  {
    icon: Users,
    title: 'Seminars & Workshops',
    description:
      'Corporate wellness programs, yoga festivals, and transformative group experiences.',
    link: '/seminars',
    color: 'bg-primary/15 text-primary',
  },
];

const ServicesGrid = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
          >
            Our Services
          </motion.span>
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Holistic Wellness Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive programs designed to nurture your physical, mental,
            and spiritual well-being.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to={service.link}
                className="group block p-8 bg-card rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 h-full"
              >
                <div className="flex items-start justify-between mb-6">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center`}
                  >
                    <service.icon className="w-7 h-7" />
                  </motion.div>
                  <motion.div
                    initial={{ x: 0, y: 0 }}
                    whileHover={{ x: 4, y: -4 }}
                  >
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.div>
                </div>
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
