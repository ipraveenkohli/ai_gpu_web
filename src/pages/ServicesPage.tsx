import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { 
  Brain,
  Gauge,
  FlaskConical,
  Code,
  Database,
  Network,
  Shield,
  Zap,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Cpu,
  Server,
  CloudCog
} from "lucide-react";
import { motion } from "framer-motion";

const ServicesPage = () => {
  const mainServices = [
    {
      icon: Brain,
      title: "AI Model Training",
      description: "Train large-scale AI models with distributed GPU clusters",
      features: [
        "Multi-GPU training support",
        "Distributed computing frameworks",
        "PyTorch & TensorFlow optimization",
        "Checkpoint management",
        "Real-time monitoring"
      ],
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      icon: Gauge,
      title: "Inference Deployment",
      description: "Deploy and scale AI models for production workloads",
      features: [
        "Low-latency inference",
        "Auto-scaling capabilities",
        "Load balancing",
        "API endpoint management",
        "Model versioning"
      ],
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: FlaskConical,
      title: "Research Computing",
      description: "High-performance computing for scientific research",
      features: [
        "Custom environment setup",
        "Multi-tenant isolation",
        "Jupyter notebook support",
        "Collaborative workspaces",
        "Data persistence"
      ],
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Code,
      title: "Development & Testing",
      description: "Flexible GPU resources for development workflows",
      features: [
        "On-demand resource allocation",
        "Rapid prototyping",
        "CI/CD integration",
        "Version control compatibility",
        "Debugging tools"
      ],
      gradient: "from-orange-500 to-red-600"
    }
  ];

  const additionalServices = [
    {
      icon: Database,
      title: "Data Processing",
      description: "Accelerate large-scale data processing and ETL operations"
    },
    {
      icon: Network,
      title: "Edge Computing",
      description: "Deploy GPU workloads at the edge for real-time processing"
    },
    {
      icon: CloudCog,
      title: "Custom Solutions",
      description: "Tailored GPU infrastructure for unique requirements"
    },
    {
      icon: Shield,
      title: "Managed Services",
      description: "Fully managed GPU infrastructure with dedicated support"
    }
  ];

  const workflowSteps = [
    {
      step: "01",
      title: "Select Configuration",
      description: "Choose GPU type, quantity, and compute requirements"
    },
    {
      step: "02",
      title: "Deploy Instantly",
      description: "Launch your instance in seconds with pre-configured environments"
    },
    {
      step: "03",
      title: "Scale On-Demand",
      description: "Adjust resources dynamically based on workload demands"
    },
    {
      step: "04",
      title: "Monitor & Optimize",
      description: "Track performance metrics and optimize resource utilization"
    }
  ];

  const benefits = [
    "99.9% uptime SLA guarantee",
    "Enterprise-grade security",
    "24/7 technical support",
    "Pay-per-hour billing",
    "No long-term commitments",
    "Instant provisioning",
    "Global data centers",
    "API access & automation"
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
              Our Services
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Enterprise GPU
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Cloud Services
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive GPU infrastructure solutions for AI, machine learning, and high-performance computing workloads
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {mainServices.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card border-border/50 hover:border-primary/50 transition-all h-full group hover:scale-[1.02] duration-300 overflow-hidden">
                  <div className={`h-1 bg-gradient-to-r ${service.gradient}`} />
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <service.icon className="w-7 h-7 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Additional Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Expand your capabilities with our complementary GPU services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card border-border/50 hover:border-accent/50 transition-all text-center h-full group hover:scale-105 duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-accent/20 transition-colors">
                      <service.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
              How It Works
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple Workflow
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get started with GPU cloud in four easy steps
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {workflowSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="glass-card border-border/50 h-full">
                  <CardContent className="p-6">
                    <div className="text-5xl font-bold text-primary/20 mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground text-sm">{step.description}</p>
                  </CardContent>
                </Card>
                {idx < workflowSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="w-6 h-6 text-primary/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose Our Services
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 glass-card p-4 rounded-lg border border-border/50"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center glass-card p-12 rounded-2xl border border-border/50">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Request a custom quote tailored to your specific requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8">
                  Request Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button size="lg" variant="outline" className="text-lg px-8 border-primary/30 hover:bg-primary/10">
                  View Pricing
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

export default ServicesPage;