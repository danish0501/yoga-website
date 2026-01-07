import { motion } from 'framer-motion';
import { useState } from 'react';
import { Building2, Mic2, Calendar, MapPin, Users, Mail, Phone, User, Building, MessageSquare, ArrowRight, CheckCircle, Download } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/common/ScrollToTop';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
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

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  organization: z.string().optional(),
  email: z.string().email({ message: "Please enter a valid email address." }).optional().or(z.literal("")),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
  attendees: z.string().optional(),
  location: z.string().min(2, { message: "Location is required." }),
  message: z.string().optional(),
});

const Seminars = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      organization: "",
      email: "",
      phone: "",
      attendees: "",
      location: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setFormSubmitted(true);
    toast({
      title: "Inquiry Submitted!",
      description: "We'll get back to you within 24-48 hours.",
    });
  }

  const handleDownloadBrochure = () => {
    toast({
      title: "Brochure Download",
      description: "Your brochure will be ready shortly. Check your email for the download link.",
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
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
                <motion.span
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
                >
                  Seminars & Speaking
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="font-heading text-3xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6"
                >
                  Transform Your <span className="italic text-primary">Organization</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl text-muted-foreground mb-8"
                >
                  Bring the power of yoga and mindfulness to your workplace or event.
                  Expert-led programs for corporate wellness and large-scale gatherings.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap gap-4"
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button
                      size="lg"
                      className="group"
                      onClick={() => {
                        const form = document.getElementById('booking-form');
                        form?.scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Book a Seminar
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="outline" size="lg" onClick={handleDownloadBrochure}>
                      <Download className="mr-2 h-4 w-4" />
                      Download Brochure
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.4 }}>
                  <img
                    src={seminarImage}
                    alt="Yoga seminar workshop"
                    className="rounded-2xl shadow-elevated"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  className="absolute -bottom-4 -left-4 bg-card p-4 rounded-xl shadow-card"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-heading text-2xl font-semibold text-foreground">50k+</div>
                      <div className="text-sm text-muted-foreground">Workshop Attendees</div>
                    </div>
                  </div>
                </motion.div>
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

                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto"
                  >
                    {corporateOfferings.map((offering) => (
                      <motion.div
                        key={offering.title}
                        variants={itemVariants}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="p-6 bg-card rounded-xl shadow-soft hover:shadow-card transition-all cursor-pointer"
                        onClick={() => {
                          const form = document.getElementById('booking-form');
                          form?.scrollIntoView({ behavior: 'smooth' });
                        }}
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
                  </motion.div>
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

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-3xl mx-auto"
                  >
                    <div className="p-8 bg-card rounded-2xl shadow-soft">
                      <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                        Available Topics & Workshops
                      </h3>
                      <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      >
                        {festivalTopics.map((topic, index) => (
                          <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ x: 5 }}
                            className="flex items-center gap-3"
                          >
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="text-foreground">{topic}</span>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Booking Form */}
        <section id="booking-form" className="py-20 bg-muted/30 scroll-mt-20">
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
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6"
                  >
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </motion.div>
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">
                    Thank You!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    We've received your inquiry and will be in touch within 24-48 hours.
                  </p>
                  <Button variant="outline" onClick={() => setFormSubmitted(false)}>
                    Submit Another Inquiry
                  </Button>
                </motion.div>
              ) : (
                <Form {...form}>
                  <motion.form
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="p-8 bg-card rounded-2xl shadow-soft space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2">
                              <User size={14} />
                              Your Name *
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="John Smith" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="organization"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2">
                              <Building size={14} />
                              Organization
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="Acme Corp" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2">
                              <Mail size={14} />
                              Email
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="john@acme.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2">
                              <Phone size={14} />
                              Phone *
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="(555) 123-4567" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="attendees"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2">
                              <Users size={14} />
                              Expected Attendees
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="50" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2">
                              <MapPin size={14} />
                              Location *
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="City, State" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <MessageSquare size={14} />
                            Tell Us About Your Needs
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Describe your event, goals, and any specific requirements..."
                              rows={4}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <Button type="submit" size="lg" className="w-full group">
                        Submit Inquiry
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </motion.div>
                  </motion.form>
                </Form>
              )}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Seminars;
