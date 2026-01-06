import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import seminarImage from '@/assets/seminar-workshop.jpg';

const upcomingSeminars = [
  {
    id: 1,
    title: 'Corporate Wellness Masterclass',
    date: 'March 15, 2026',
    location: 'San Francisco, CA',
    attendees: 150,
    type: 'Corporate',
  },
  {
    id: 2,
    title: 'Yoga Festival Workshop',
    date: 'April 8-10, 2026',
    location: 'Los Angeles, CA',
    attendees: 500,
    type: 'Festival',
  },
  {
    id: 3,
    title: 'Stress Management Retreat',
    date: 'May 20, 2026',
    location: 'Sedona, AZ',
    attendees: 50,
    type: 'Retreat',
  },
];

const FeaturedSeminars = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-24 bg-secondary/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            >
              Upcoming Events
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6"
            >
              Seminars &{' '}
              <span className="italic text-primary">Workshops</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg mb-8"
            >
              Join us for transformative group experiences, corporate wellness
              programs, and large-scale yoga festivals led by our expert
              instructors.
            </motion.p>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4 mb-8"
            >
              {upcomingSeminars.map((seminar) => (
                <motion.div
                  key={seminar.id}
                  variants={cardVariants}
                  whileHover={{ x: 8, scale: 1.01 }}
                  className="p-4 bg-card rounded-xl shadow-soft hover:shadow-card transition-all cursor-pointer"
                >
                  <Link to="/seminars">
                    <div className="flex items-start justify-between">
                      <div>
                        <motion.span
                          whileHover={{ scale: 1.05 }}
                          className="inline-block px-2 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary mb-2"
                        >
                          {seminar.type}
                        </motion.span>
                        <h4 className="font-heading text-lg font-semibold text-foreground">
                          {seminar.title}
                        </h4>
                        <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar size={14} />
                            {seminar.date}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={14} />
                            {seminar.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users size={14} />
                            {seminar.attendees}+ attendees
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Link to="/seminars">
                <Button variant="outline" className="group">
                  View All Seminars
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="relative z-10 rounded-2xl overflow-hidden shadow-elevated"
            >
              <img
                src={seminarImage}
                alt="Yoga workshop seminar"
                className="w-full h-auto object-cover"
              />
            </motion.div>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
              className="absolute -top-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSeminars;
