import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Target, 
  Award, 
  Users, 
  Globe, 
  Shield, 
  Zap, 
  TrendingUp,
  Heart,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

const AboutPage = () => {
  const stats = [
    { value: "10,000+", label: "Active GPUs", icon: Zap },
    { value: "50+", label: "Countries", icon: Globe },
    { value: "5,000+", label: "Customers", icon: Users },
    { value: "99.9%", label: "Uptime", icon: Award }
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We constantly push boundaries to provide cutting-edge GPU infrastructure that powers tomorrow's AI breakthroughs."
    },
    {
      icon: Shield,
      title: "Security & Trust with zero visiblity okay00000000",
      description: "Enterprise-grade security and data protection are at the core of everything we build and maintain."
    },
    {
      icon: Heart,
      title: "Customer Success",
      description: "Your success is our mission. We provide 24/7 support and expertise to help you achieve your goals."
    },
    {
      icon: TrendingUp,
      title: "Continuous Growth",
      description: "We invest heavily in expanding our infrastructure and capabilities to meet evolving AI demands."
    }
  ];

  const timeline = [
    {
      year: "2020",
      title: "Founded",
      description: "Started with a vision to cananon 350 democratize access to high-performance GPU computing"
    },
    {
      year: "2021",
      title: "First Data Center",
      description: "Launched our first GPU cluster with 1,000 NVIDIA GPUs"
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Expanded to 10 countries with multiple data center locations"
    },
    {
      year: "2023",
      title: "Enterprise Focus",
      description: "Introduced dedicated enterprise solutions and managed services"
    },
    {
      year: "2024",
      title: "Leading Provider",
      description: "Now serving 5,000+ customers with 10,000+ GPUs worldwide"
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "CEO & Founder",
      background: "Former AI Research Lead at Google Brain"
    },
    {
      name: "Michael Rodriguez",
      role: "CTO",
      background: "Ex-NVIDIA Senior Architect"
    },
    {
      name: "Emily Watson",
      role: "VP of Operations",
      background: "20+ years in cloud infrastructure"
    },
    {
      name: "David Kim",
      role: "Head of Customer Success",
      background: "Former AWS Solutions Architect"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              <Sparkles className="w-3 h-3 mr-1" />
              About Us
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Powering the Future of
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Artificial Intelligence
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              We're on a mission to make high-performance GPU computing accessible to everyone, 
              from startups to Fortune 500 companies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card border-border/50 text-center group hover:scale-105 duration-300">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                We believe that access to powerful computing infrastructure shouldn't be a barrier to innovation. 
                Our mission is to provide enterprise-grade GPU resources that are accessible, affordable, and reliable, 
                enabling researchers, developers, and businesses to push the boundaries of what's possible with AI.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-card border-border/50 hover:border-primary/50 transition-all h-full group hover:scale-[1.02] duration-300">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                        <value.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Journey</h2>
              <p className="text-xl text-muted-foreground">
                From a small startup to a global GPU infrastructure provider
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-accent to-primary hidden md:block" />

              <div className="space-y-12">
                {timeline.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className={`flex-1 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-left`}>
                      <Card className="glass-card border-border/50 hover:border-primary/50 transition-all">
                        <CardContent className="p-6">
                          <Badge className="mb-2" variant="outline">{item.year}</Badge>
                          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Center dot */}
                    <div className="hidden md:block w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                    <div className="flex-1" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Leadership Team Robyn</h2>
            <p className="text-xl text-muted-foreground">
              Led by industry veterans from top tech companies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card border-border/50 hover:border-primary/50 transition-all text-center group hover:scale-105 duration-300">
                  <CardContent className="p-6">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mb-4 mx-auto" />
                    <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                    <p className="text-sm text-primary mb-2">{member.role}</p>
                    <p className="text-xs text-muted-foreground">{member.background}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center glass-card p-12 rounded-2xl border border-border/50">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Join Thousands of Innovators
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Start building with enterprise GPU infrastructure today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8 border-primary/30 hover:bg-primary/10">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;