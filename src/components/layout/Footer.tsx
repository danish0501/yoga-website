import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin, Instagram, Facebook, Youtube, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center"
              >
                <Leaf className="w-5 h-5 text-primary" />
              </motion.div>
              <span className="font-heading text-xl font-semibold">
                Serenity
              </span>
            </Link>
            <p className="text-sm text-secondary-foreground/80 leading-relaxed">
              Guiding you towards balance, vitality, and inner peace through
              authentic yoga practices and holistic wellness.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: 'https://instagram.com' },
                { icon: Facebook, href: 'https://facebook.com' },
                { icon: Youtube, href: 'https://youtube.com' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="font-heading text-lg font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Yoga Classes', path: '/classes' },
                { name: 'Treatments', path: '/treatments' },
                { name: 'Consultations', path: '/consultations' },
                { name: 'Seminars', path: '/seminars' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors flex items-center gap-1 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="font-heading text-lg font-semibold mb-4">
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
                { name: 'Hatha Yoga', path: '/classes' },
                { name: 'Vinyasa Flow', path: '/classes' },
                { name: 'Yoga Therapy', path: '/treatments' },
                { name: 'Corporate Wellness', path: '/seminars' },
                { name: 'Private Sessions', path: '/consultations' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="font-heading text-lg font-semibold mb-4">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <MapPin size={18} className="mt-0.5 text-primary" />
                  <span className="text-sm text-secondary-foreground/80 group-hover:text-primary transition-colors">
                    123 Wellness Avenue
                    <br />
                    Peaceful Valley, CA 94102
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-3 group"
                >
                  <Phone size={18} className="text-primary" />
                  <span className="text-sm text-secondary-foreground/80 group-hover:text-primary transition-colors">
                    (555) 123-4567
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@serenity.com"
                  className="flex items-center gap-3 group"
                >
                  <Mail size={18} className="text-primary" />
                  <span className="text-sm text-secondary-foreground/80 group-hover:text-primary transition-colors">
                    hello@serenity.com
                  </span>
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-secondary-foreground/60">
            © {currentYear} Serenity Wellness. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-secondary-foreground/60">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
