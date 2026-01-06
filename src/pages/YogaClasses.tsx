import { motion } from 'framer-motion';
import { Clock, Users, Star, ChevronRight } from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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

const YogaClasses = () => {
  return (
    <div className="min-h-screen">
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
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Yoga Classes
              </span>
              <h1 className="font-heading text-5xl md:text-6xl font-semibold text-foreground mb-6">
                Find Your Perfect <span className="italic text-primary">Practice</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                From gentle beginners to advanced practitioners, discover classes tailored
                to your experience level and wellness goals.
              </p>
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(yogaStyles).map(([key, style], index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 bg-card rounded-2xl shadow-soft"
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
            </div>
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
                        <div
                          key={index}
                          className="flex items-center justify-between p-6 bg-card rounded-xl shadow-soft"
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
                            <Button size="sm">Book Now</Button>
                          </div>
                        </div>
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
              <span className="inline-block px-4 py-1.5 rounded-full bg-accent/20 text-accent text-sm font-medium mb-4">
                New to Yoga?
              </span>
              <h2 className="font-heading text-4xl font-semibold text-foreground mb-4">
                First Timer's Guide
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Everything you need to know for your first class at Serenity.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {firstTimerSteps.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative p-6 bg-card rounded-xl shadow-soft"
                >
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-heading font-semibold mb-4">
                    {item.step}
                  </div>
                  <h4 className="font-heading text-lg font-semibold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                  {index < firstTimerSteps.length - 1 && (
                    <ChevronRight className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 text-muted-foreground/30" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default YogaClasses;
