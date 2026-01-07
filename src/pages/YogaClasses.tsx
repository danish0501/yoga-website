import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, Star, ChevronRight, ArrowRight } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/common/ScrollToTop';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
import { useToast } from "@/hooks/use-toast";
import { User, Mail, Phone, MessageSquare } from 'lucide-react';

const yogaStyles = {
  hatha: {
    name: 'Hatha Yoga',
    description: 'Traditional practice focusing on physical postures and breath control. Perfect for building a strong foundation.',
    duration: '60-75 min',
    intensity: 'Gentle to Moderate',
  },
  vinyasa: {
    name: 'Vinyasa Flow',
    description: 'Dynamic, flowing sequences synchronized with breath. Build strength, flexibility, and cardiovascular endurance.',
    duration: '60-90 min',
    intensity: 'Moderate to High',
  },
  yin: {
    name: 'Yin Yoga',
    description: 'Slow-paced style with postures held for longer periods. Targets deep connective tissues and promotes relaxation.',
    duration: '75-90 min',
    intensity: 'Gentle',
  },
};

const classLevels = [
  {
    level: 'Beginner',
    description: 'New to yoga or returning after a break? Start here with foundational poses and breathing techniques.',
    classes: [
      { name: 'Foundations of Yoga', time: 'Mon, Wed 9:00 AM', instructor: 'Sarah Chen', spots: 12 },
      { name: 'Gentle Morning Flow', time: 'Tue, Thu 7:00 AM', instructor: 'Michael Torres', spots: 8 },
      { name: 'Restorative Basics', time: 'Sat 10:00 AM', instructor: 'Emma Wilson', spots: 15 },
    ],
  },
  {
    level: 'Intermediate',
    description: 'Ready to deepen your practice? Explore more challenging postures and sequences.',
    classes: [
      { name: 'Power Vinyasa', time: 'Mon, Wed 6:00 PM', instructor: 'David Park', spots: 6 },
      { name: 'Alignment Workshop', time: 'Tue 12:00 PM', instructor: 'Sarah Chen', spots: 10 },
      { name: 'Core Strengthening', time: 'Thu 5:30 PM', instructor: 'Lisa Johnson', spots: 4 },
    ],
  },
  {
    level: 'Advanced',
    description: 'For experienced practitioners seeking to master advanced techniques and inversions.',
    classes: [
      { name: 'Advanced Asana', time: 'Wed, Fri 7:00 AM', instructor: 'Master Raj Patel', spots: 5 },
      { name: 'Arm Balance Mastery', time: 'Sat 8:00 AM', instructor: 'David Park', spots: 8 },
      { name: 'Pranayama Deep Dive', time: 'Sun 9:00 AM', instructor: 'Master Raj Patel', spots: 12 },
    ],
  },
];

const firstTimerSteps = [
  { step: 1, title: 'Choose Your Class', description: 'We recommend starting with a Beginner class or private session.' },
  { step: 2, title: 'Arrive Early', description: 'Come 15 minutes before class to complete paperwork and settle in.' },
  { step: 3, title: 'What to Bring', description: 'Comfortable clothing and water. Mats and props are provided.' },
  { step: 4, title: 'Listen to Your Body', description: 'Rest when needed. Every body is different, and modifications are always available.' },
];

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }).optional().or(z.literal("")),
  mobile: z.string().min(10, { message: "Mobile number must be at least 10 digits." }),
  message: z.string().optional(),
});

const YogaClasses = () => {
  const [selectedClass, setSelectedClass] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      message: "",
    },
  });

  const handleBookClick = (className: string) => {
    setSelectedClass(className);
    setIsModalOpen(true);
  };

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log({ ...values, class: selectedClass });
    setIsModalOpen(false);
    toast({
      title: "Booking Request Sent",
      description: `We've received your request for ${selectedClass}. We'll contact you shortly!`,
    });
    form.reset();
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
                Yoga Classes
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="font-heading text-5xl md:text-6xl font-semibold text-foreground mb-6"
              >
                Find Your Perfect <span className="italic text-primary">Practice</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-muted-foreground"
              >
                From gentle beginners to advanced practitioners, discover classes tailored
                to your experience level and wellness goals.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Yoga Styles */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-4xl font-semibold text-foreground mb-4">
                Yoga Styles We Offer
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Each style offers unique benefits. Explore and find what resonates with you.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {Object.entries(yogaStyles).map(([key, style]) => (
                <motion.div
                  key={key}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="p-8 bg-card rounded-2xl shadow-soft hover:shadow-card transition-all"
                >
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">
                    {style.name}
                  </h3>
                  <p className="text-muted-foreground mb-6">{style.description}</p>
                  <div className="flex gap-4 text-sm">
                    <span className="flex items-center gap-1 text-primary">
                      <Clock size={14} />
                      {style.duration}
                    </span>
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Star size={14} />
                      {style.intensity}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Class Levels */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-4xl font-semibold text-foreground mb-4">
                Classes by Level
              </h2>
            </motion.div>

            <Tabs defaultValue="Beginner" className="w-full">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
                <TabsTrigger value="Beginner">Beginner</TabsTrigger>
                <TabsTrigger value="Intermediate">Intermediate</TabsTrigger>
                <TabsTrigger value="Advanced">Advanced</TabsTrigger>
              </TabsList>

              {classLevels.map((levelData) => (
                <TabsContent key={levelData.level} value={levelData.level}>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto"
                  >
                    <p className="text-center text-muted-foreground mb-8">
                      {levelData.description}
                    </p>
                    <div className="space-y-4">
                      {levelData.classes.map((cls, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ x: 8 }}
                          className="flex items-center justify-between p-6 bg-card rounded-xl shadow-soft hover:shadow-card transition-all"
                        >
                          <div>
                            <h4 className="font-heading text-lg font-semibold text-foreground">
                              {cls.name}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {cls.time} • {cls.instructor}
                            </p>
                          </div>
                          <div className="flex items-center gap-4">
                            <span className="flex items-center gap-1 text-sm text-primary">
                              <Users size={14} />
                              {cls.spots} spots
                            </span>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                              <Button size="sm" onClick={() => handleBookClick(cls.name)}>Book Now</Button>
                            </motion.div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* First Timer Guide */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <motion.span
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4"
              >
                New to Yoga?
              </motion.span>
              <h2 className="font-heading text-4xl font-semibold text-foreground mb-4">
                First Timer's Guide
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Everything you need to know for your first class at Serenity.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
            >
              {firstTimerSteps.map((item, index) => (
                <motion.div
                  key={item.step}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="relative p-6 bg-card rounded-xl shadow-soft hover:shadow-card transition-all"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-semibold mb-4"
                  >
                    {item.step}
                  </motion.div>
                  <h4 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  {index < firstTimerSteps.length - 1 && (
                    <ChevronRight className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 text-muted-foreground/30" />
                  )}
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link to="/consultations">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="group">
                    Book Your First Class
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

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          <DialogHeader>
            <DialogTitle>Book {selectedClass}</DialogTitle>
          </DialogHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 pt-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name *</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <User className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="John Doe" className="pl-9" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="john@example.com" className="pl-9" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="mobile"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mobile Number *</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Phone className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="1234567890" className="pl-9" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                        <Textarea placeholder="Any questions?" className="pl-9 min-h-[80px]" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">Submit Request</Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default YogaClasses;
