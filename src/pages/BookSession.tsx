import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import * as z from "zod";
import { motion } from "framer-motion";
import { Calendar, Clock, User, Mail, MessageSquare, CheckCircle, Phone } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/common/ScrollToTop";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    mobile: z.string().min(10, {
        message: "Please enter a valid mobile number.",
    }),
    email: z.string().email({
        message: "Please enter a valid email address.",
    }).optional().or(z.literal("")),
    sessionType: z.string({
        required_error: "Please select a session type.",
    }),
    date: z.string().refine((val) => !isNaN(Date.parse(val)), {
        message: "Please select a valid date",
    }),
    message: z.string().optional(),
});

const BookSession = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            mobile: "",
            email: "",
            message: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
        setFormSubmitted(true);
        toast({
            title: "Request Received",
            description: "We've received your booking request. We'll contact you shortly to confirm.",
        });
        // form.reset(); // Don't reset immediately so we can potentially show data or just hide it
    }

    return (
        <div className="min-h-screen overflow-x-hidden pb-24">
            <Header />
            <main className="pt-24">
                {/* Hero Section */}
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
                                Book a Session
                            </motion.span>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="font-heading text-5xl md:text-6xl font-semibold text-foreground mb-6"
                            >
                                Start Your <span className="italic text-primary">Transformation</span>
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="text-xl text-muted-foreground"
                            >
                                Take the first step towards a healthier, more balanced life.
                                Schedule your session with our expert practitioners today.
                            </motion.p>
                        </motion.div>
                    </div>
                </section>

                {/* Booking Form Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            {/* Left Column: Information */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-8"
                            >
                                <div>
                                    <h2 className="font-heading text-3xl font-semibold mb-4">Why Book With Us?</h2>
                                    <p className="text-muted-foreground text-lg leading-relaxed">
                                        Our scheduling process is designed to be simple and accommodating.
                                        Whether you're looking for a private yoga session, a therapeutic treatment,
                                        or a wellness consultation, we're here to support your journey.
                                    </p>
                                </div>

                                <div className="space-y-6">
                                    {[
                                        {
                                            icon: User,
                                            title: "Expert Practitioners",
                                            description: "Work with certified professionals dedicated to your growth."
                                        },
                                        {
                                            icon: Clock,
                                            title: "Flexible Scheduling",
                                            description: "Morning, evening, and weekend slots available to fit your lifestyle."
                                        },
                                        {
                                            icon: CheckCircle,
                                            title: "Personalized Approach",
                                            description: "Every session is tailored to meet your specific needs and goals."
                                        }
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.1 }}
                                            className="flex items-start gap-4 p-4 rounded-xl bg-card/50 border border-border/50 hover:bg-card hover:border-border transition-colors"
                                        >
                                            <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                                <item.icon size={24} />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                                                <p className="text-muted-foreground text-sm">{item.description}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Right Column: Form */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="bg-card p-8 md:p-10 rounded-3xl shadow-soft border border-border/50"
                            >
                                {formSubmitted ? (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="text-center py-8"
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
                                            Request Received!
                                        </h3>
                                        <p className="text-muted-foreground mb-8">
                                            Thank you for booking with us. We'll review your request and contact you shortly to confirm your session.
                                        </p>
                                        <Button variant="outline" onClick={() => setFormSubmitted(false)}>
                                            Book Another Session
                                        </Button>
                                    </motion.div>
                                ) : (
                                    <>
                                        <h3 className="font-heading text-2xl font-semibold mb-6">Request a Session</h3>
                                        <Form {...form}>
                                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                                <FormField
                                                    control={form.control}
                                                    name="name"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormLabel>Full Name *</FormLabel>
                                                            <FormControl>
                                                                <div className="relative">
                                                                    <User className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                                                                    <Input placeholder="John Doe" className="pl-10" {...field} />
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
                                                                    <Phone className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                                                                    <Input placeholder="8895673459" className="pl-10" {...field} />
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
                                                            <FormLabel>Email Address</FormLabel>
                                                            <FormControl>
                                                                <div className="relative">
                                                                    <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                                                                    <Input placeholder="john@example.com" className="pl-10" {...field} />
                                                                </div>
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                    <FormField
                                                        control={form.control}
                                                        name="sessionType"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel>Session Type *</FormLabel>
                                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                                    <FormControl>
                                                                        <SelectTrigger>
                                                                            <SelectValue placeholder="Select type" />
                                                                        </SelectTrigger>
                                                                    </FormControl>
                                                                    <SelectContent>
                                                                        <SelectItem value="consultation">Initial Consultation</SelectItem>
                                                                        <SelectItem value="yoga-private">Private Yoga Session</SelectItem>
                                                                        <SelectItem value="therapy">Yoga Therapy</SelectItem>
                                                                        <SelectItem value="meditation">Meditation Session</SelectItem>
                                                                    </SelectContent>
                                                                </Select>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />

                                                    <FormField
                                                        control={form.control}
                                                        name="date"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel>Preferred Date *</FormLabel>
                                                                <FormControl>
                                                                    <div className="relative">
                                                                        <Input type="date" className="block" {...field} />
                                                                    </div>
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
                                                            <FormLabel>Message</FormLabel>
                                                            <FormControl>
                                                                <div className="relative">
                                                                    <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
                                                                    <Textarea
                                                                        placeholder="Tell us about your goals or any specific requirements..."
                                                                        className="pl-10 min-h-[120px] resize-none"
                                                                        {...field}
                                                                    />
                                                                </div>
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />

                                                <Button type="submit" size="lg" className="w-full">
                                                    Submit Request
                                                </Button>
                                            </form>
                                        </Form>
                                    </>
                                )}
                            </motion.div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <ScrollToTop />
        </div>
    );
};

export default BookSession;
