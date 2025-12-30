import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GPU3D from "@/components/GPU3D";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  Zap, 
  Shield, 
  Clock, 
  TrendingUp, 
  Cpu, 
  Server, 
  Gauge,
  Check,
  ArrowRight,
  Sparkles,
  BarChart3,
  Brain
} from "lucide-react";
import { motion } from "framer-motion";

const HomePage = () => {
  const features = [
    {
      icon: Zap,
      title: "Instant Deployment",
      description: "Launch your GPU instances in seconds with our automated infrastructure"
    },
    {
      icon: Shield,
      title: "Enterprise Security 200+ GPUS Security ",
      description: "Bank-grade encryption and isolated environments for your workloads"
    },
    {
      icon: Clock,
      title: "24/7 Availability also ",
      description: "99.9% uptime SLA with round-the-clock technical support"
    },
    {
      icon: TrendingUp,
      title: "Auto Scaling we care ",
      description: "Automatically scale resources based on your computational needs"
    }
  ];

  const gpuCards = [
    {
      name: "NVIDIA H10000000",
      vram: "80GB HBM3",
      performance: "989 TFLOPs",
      price: "$4.50/hr",
      badge: "Most Powerful",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      name: "NVIDIA A1000000000",
      vram: "80GB HBM2e",
      performance: "624 TFLOPs",
      price: "$3.00/hr",
      badge: "Popular",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      name: "RTX 4090",
      vram: "24GB GDDR6X",
      performance: "83 TFLOPs",
      price: "$1.20/hr",
      badge: "Best Value",
      gradient: "from-green-500 to-emerald-600"
    }
  ];

  const useCases = [
    { icon: Brain, title: "AI Training", desc: "Large language models & deep learning" },
    { icon: Gauge, title: "Inference", desc: "Real-time AI model deployment" },
    { icon: BarChart3, title: "Research", desc: "Scientific computing & simulations" },
    { icon: Sparkles, title: "Fine-tuning", desc: "Custom model optimization" }
  ];

  const stats = [
    { value: "10K+", label: "Active GPUs" },
    { value: "99.9%", label: "Uptime SLA" },
    { value: "50+", label: "Countries" },
    { value: "24/7", label: "Support" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                <Sparkles className="w-3 h-3 mr-1" />
                Next-Gen GPU Infrastructure
              </Badge>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Power Your
                <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  AI Dreams
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Premium GPU cloud infrastructure for AI training, inference, and high-performance computing. 
                Scale instantly with enterprise-grade hardware.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/quote">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8">
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button size="lg" variant="outline" className="text-lg px-8 border-primary/30 hover:bg-primary/10">
                    View Pricing
                  </Button>
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-4 gap-4 mt-12">
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            {/* Right Column - 3D GPU */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] animate-float"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl" />
              <GPU3D />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-accent/20 text-accent border-accent/30">
              Why Choose Us
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Built for Performance
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade infrastructure designed for the most demanding AI workloads
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card border-border/50 hover:border-primary/50 transition-all h-full group hover:scale-105 duration-300">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <feature.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GPU Cards Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              <Cpu className="w-3 h-3 mr-1" />
              Premium Hardware
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Choose Your Power
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From cutting-edge H100s to cost-effective solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {gpuCards.map((gpu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card border-border/50 hover:border-primary/50 transition-all group hover:scale-105 duration-300 overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${gpu.gradient}`} />
                  <CardContent className="p-6">
                    <Badge className="mb-4" variant="secondary">{gpu.badge}</Badge>
                    <h3 className="text-2xl font-bold mb-4">{gpu.name}</h3>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2">
                        <Server className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">{gpu.vram}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Gauge className="w-4 h-4 text-primary" />
                        <span className="text-muted-foreground">{gpu.performance}</span>
                      </div>
                    </div>
                    
                    <div className="text-3xl font-bold text-primary mb-6">
                      {gpu.price}
                    </div>
                    
                    <Link href="/quote">
                      <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90">
                        Get Started
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Perfect For Every Use Case
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {useCases.map((useCase, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card border-border/50 hover:border-accent/50 transition-all text-center group hover:scale-105 duration-300">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-accent/20 transition-colors">
                      <useCase.icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                    <p className="text-muted-foreground text-sm">{useCase.desc}</p>
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
              Ready to Scale Your AI?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get started with enterprise GPU infrastructure in minutes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8">
                  Request Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8 border-primary/30 hover:bg-primary/10">
                  Contact Sales
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

export default HomePage;