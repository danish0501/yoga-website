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
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Upcoming Events
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-6">
              Seminars &{' '}
              <span className="italic text-primary">Workshops</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Join us for transformative group experiences, corporate wellness
              programs, and large-scale yoga festivals led by our expert
              instructors.
            </p>

            <div className="space-y-4 mb-8">
              {upcomingSeminars.map((seminar, index) => (
                <motion.div
                  key={seminar.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-4 bg-card rounded-xl shadow-soft hover:shadow-card transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="inline-block px-2 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary mb-2">
                        {seminar.type}
                      </span>
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
                </motion.div>
              ))}
            </div>

            <Link to="/seminars">
              <Button variant="outline" className="group">
                View All Seminars
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={seminarImage}
                alt="Yoga workshop seminar"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSeminars;
