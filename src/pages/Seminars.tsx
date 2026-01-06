import { motion } from 'framer-motion';
import { useState } from 'react';
import { Building2, Mic2, Calendar, MapPin, Users, Mail, Phone, User, Building, MessageSquare, ArrowRight, CheckCircle } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import seminarImage from '@/assets/seminar-workshop.jpg';

const corporateOfferings = [
  {
    title: 'Stress Management Programs',
    description: 'Help your team manage workplace stress with guided breathing, meditation, and movement sessions.',
    duration: '4-8 weeks',
    participants: '20-200',
  },
  {
    title: 'Desk Yoga Workshops',
    description: 'Quick, effective sequences designed for office environments to reduce tension and boost productivity.',
    duration: '1-2 hours',
    participants: '10-50',
  },
  {
    title: 'Leadership Mindfulness',
    description: 'Executive-focused programs combining mindfulness practices with leadership development.',
    duration: '2-day retreat',
    participants: '10-30',
  },
  {
    title: 'Team Building Retreats',
    description: 'Full-day or weekend retreats combining yoga, meditation, and team-building activities.',
    duration: '1-3 days',
    participants: '15-100',
  },
];

const festivalTopics = [
  'Keynote: The Science of Yoga & Wellness',
  'Vinyasa Flow Masterclass (500+ participants)',
  'Pranayama & Meditation Workshop',
  'Yoga for Chronic Pain Management',
  'Building a Sustainable Yoga Practice',
  'The Business of Wellness',
];

const Seminars = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        {/* Hero */}
        <section className="py-16 hero-gradient">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  Seminars & Speaking
                </span>
                <h1 className="font-heading text-5xl md:text-6xl font-semibold text-foreground mb-6">
                  Transform Your <span className="italic text-primary">Organization</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Bring the power of yoga and mindfulness to your workplace or event.
                  Expert-led programs for corporate wellness and large-scale gatherings.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="group">
                    Book a Seminar
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" size="lg">
                    Download Brochure
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <img
                  src={seminarImage}
                  alt="Yoga seminar workshop"
                  className="rounded-2xl shadow-elevated"
                />
                <div className="absolute -bottom-4 -left-4 bg-card p-4 rounded-xl shadow-card">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-heading text-2xl font-semibold text-foreground">50k+</div>
                      <div className="text-sm text-muted-foreground">Workshop Attendees</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Tabs */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <Tabs defaultValue="corporate" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
                <TabsTrigger value="corporate" className="flex items-center gap-2">
                  <Building2 size={16} />
                  Corporate Wellness
                </TabsTrigger>
                <TabsTrigger value="speaking" className="flex items-center gap-2">
                  <Mic2 size={16} />
                  Guest Speaking
                </TabsTrigger>
              </TabsList>

              <TabsContent value="corporate">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="text-center mb-12">
                    <h2 className="font-heading text-4xl font-semibold text-foreground mb-4">
                      Corporate Wellness Programs
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                      Invest in your team's well-being with our customizable workplace wellness solutions.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {corporateOfferings.map((offering, index) => (
                      <motion.div
                        key={offering.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="p-6 bg-card rounded-xl shadow-soft"
                      >
                        <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                          {offering.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">{offering.description}</p>
                        <div className="flex gap-4 text-sm">
                          <span className="flex items-center gap-1 text-primary">
                            <Calendar size={14} />
                            {offering.duration}
                          </span>
                          <span className="flex items-center gap-1 text-muted-foreground">
                            <Users size={14} />
                            {offering.participants}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>

              <TabsContent value="speaking">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="text-center mb-12">
                    <h2 className="font-heading text-4xl font-semibold text-foreground mb-4">
                      Festival & Event Speaking
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                      Book our expert instructors for yoga festivals, conferences, and large-scale wellness events.
                    </p>
                  </div>

                  <div className="max-w-3xl mx-auto">
                    <div className="p-8 bg-card rounded-2xl shadow-soft">
                      <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                        Available Topics & Workshops
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {festivalTopics.map((topic, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="text-foreground">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="font-heading text-4xl font-semibold text-foreground mb-4">
                  Book for Your Event
                </h2>
                <p className="text-muted-foreground text-lg">
                  Tell us about your organization and wellness needs. We'll craft a
                  customized proposal for you.
                </p>
              </div>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center p-12 bg-card rounded-2xl shadow-soft"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">
                    Thank You!
                  </h3>
                  <p className="text-muted-foreground">
                    We've received your inquiry and will be in touch within 24-48 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="p-8 bg-card rounded-2xl shadow-soft space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="flex items-center gap-2">
                        <User size={14} />
                        Your Name
                      </Label>
                      <Input id="name" placeholder="John Smith" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="flex items-center gap-2">
                        <Building size={14} />
                        Organization
                      </Label>
                      <Input id="company" placeholder="Acme Corp" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center gap-2">
                        <Mail size={14} />
                        Email
                      </Label>
                      <Input id="email" type="email" placeholder="john@acme.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center gap-2">
                        <Phone size={14} />
                        Phone
                      </Label>
                      <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="attendees" className="flex items-center gap-2">
                        <Users size={14} />
                        Expected Attendees
                      </Label>
                      <Input id="attendees" type="number" placeholder="50" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location" className="flex items-center gap-2">
                        <MapPin size={14} />
                        Location
                      </Label>
                      <Input id="location" placeholder="City, State" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="flex items-center gap-2">
                      <MessageSquare size={14} />
                      Tell Us About Your Needs
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Describe your event, goals, and any specific requirements..."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full group">
                    Submit Inquiry
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Seminars;
