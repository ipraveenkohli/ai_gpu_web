import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Link } from "wouter";
import { CheckCircle2, Sparkles, ArrowRight, Zap, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const PricingPage = () => {
  const gpuPricing = [
    {
      name: "NVIDIA H100000 SXM5",
      vram: "80GB HBM3",
      tflops: "989",
      hourly: 4.50,
      daily: 1000.00,
      monthly: 2800.00,
      badge: "Flagship",
      gradient: "from-cyan-500 to-blue-600",
      features: ["4th Gen Tensor Cores", "900 GB/s NVLink", "PCIe Gen5"]
    },
    {
      name: "NVIDIA A00100 SXM4",
      vram: "80GB HBM2e",
      tflops: "624",
      hourly: 3.00,
      daily: 7000.00,
      monthly: 1800.00,
      badge: "Popular",
      gradient: "from-purple-500 to-pink-600",
      features: ["3rd Gen Tensor Cores", "600 GB/s NVLink", "PCIe Gen4"]
    },
    {
      name: "NVIDIA A100 PCIe",
      vram: "40GB HBM2e",
      tflops: "312",
      hourly: 2.50,
      daily: 55.00,
      monthly: 1500.00,
      badge: "Balanced",
      gradient: "from-indigo-500 to-purple-600",
      features: ["3rd Gen Tensor Cores", "PCIe Gen4", "ECC Memory"]
    },
    {
      name: "NVIDIA RTX 4090",
      vram: "24GB GDDR6X",
      tflops: "83",
      hourly: 1.20,
      daily: 25.00,
      monthly: 700.00,
      badge: "Best Value",
      gradient: "from-green-500 to-emerald-600",
      features: ["3rd Gen RT Cores", "DLSS 3.0", "AV1 Encode"]
    },
    {
      name: "NVIDIA RTX A6000",
      vram: "48GB GDDR6",
      tflops: "40",
      hourly: 2.00,
      daily: 45.00,
      monthly: 1250.00,
      badge: "Professional",
      gradient: "from-orange-500 to-red-600",
      features: ["2nd Gen RT Cores", "ECC Memory", "NVLink Ready"]
    },
    {
      name: "NVIDIA L40",
      vram: "48GB GDDR6",
      tflops: "90",
      hourly: 2.20,
      daily: 48.00,
      monthly: 1350.00,
      badge: "Inference",
      gradient: "from-yellow-500 to-orange-600",
      features: ["3rd Gen RT Cores", "AV1 Encode", "Low Latency"]
    },
    {
      name: "NVIDIA V100 SXM2",
      vram: "32GB HBM2",
      tflops: "125",
      hourly: 1.80,
      daily: 40.00,
      monthly: 1100.00,
      badge: "Legacy",
      gradient: "from-blue-500 to-indigo-600",
      features: ["1st Gen Tensor Cores", "300 GB/s NVLink", "Proven Reliability"]
    },
    {
      name: "AMD MI250X",
      vram: "128GB HBM2e",
      tflops: "383",
      hourly: 3.50,
      daily: 75.00,
      monthly: 2100.00,
      badge: "High Memory",
      gradient: "from-red-500 to-pink-600",
      features: ["CDNA2 Architecture", "Infinity Fabric", "Dual GPU"]
    }
  ];

  const planFeatures = {
    hourly: [
      "Pay only for what you use",
      "No minimum commitment",
      "Instant provisioning",
      "Full API access",
      "24/7 support"
    ],
    daily: [
      "20% discount vs hourly",
      "24-hour commitment",
      "Priority support",
      "Full API access",
      "Reserved capacity"
    ],
    monthly: [
      "Up to 37% savings",
      "30-day commitment",
      "Dedicated support",
      "Custom configurations",
      "SLA guarantee"
    ]
  };

  const additionalServices = [
    { name: "Additional Storage (per TB/month)", price: "$50" },
    { name: "Data Transfer Out (per TB)", price: "$20" },
    { name: "Premium Support (24/7)", price: "$500/month" },
    { name: "Managed Service Add-on", price: "15% of compute" },
    { name: "Custom Environment Setup", price: "$200 one-time" },
    { name: "Dedicated Private Network", price: "$300/month" }
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
              Transparent Pricing
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Simple, Flexible
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                GPU Pricing
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              Pay only for what you use with our transparent, competitive pricing. No hidden fees.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans Tabs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="hourly" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="hourly">Hourly</TabsTrigger>
              <TabsTrigger value="daily">
                Daily
                <Badge className="ml-2 bg-primary/20 text-primary text-xs">-20%</Badge>
              </TabsTrigger>
              <TabsTrigger value="monthly">
                Monthly
                <Badge className="ml-2 bg-accent/20 text-accent text-xs">-37%</Badge>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="hourly">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {gpuPricing.map((gpu, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Card className="glass-card border-border/50 hover:border-primary/50 transition-all h-full group hover:scale-105 duration-300 overflow-hidden">
                      <div className={`h-1 bg-gradient-to-r ${gpu.gradient}`} />
                      <CardHeader>
                        <Badge className="w-fit mb-2" variant="secondary">{gpu.badge}</Badge>
                        <CardTitle className="text-xl">{gpu.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{gpu.vram} | {gpu.tflops} TFLOPs</p>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-6">
                          <div className="text-3xl font-bold text-primary mb-1">
                            ${gpu.hourly.toFixed(2)}
                          </div>
                          <div className="text-sm text-muted-foreground">per hour</div>
                        </div>
                        
                        <ul className="space-y-2 mb-6">
                          {gpu.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-xs text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
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
              
              <div className="max-w-md mx-auto glass-card p-6 rounded-lg border border-border/50">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Hourly Plan Features
                </h3>
                <ul className="space-y-2">
                  {planFeatures.hourly.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="daily">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {gpuPricing.map((gpu, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Card className="glass-card border-border/50 hover:border-primary/50 transition-all h-full group hover:scale-105 duration-300 overflow-hidden">
                      <div className={`h-1 bg-gradient-to-r ${gpu.gradient}`} />
                      <CardHeader>
                        <Badge className="w-fit mb-2" variant="secondary">{gpu.badge}</Badge>
                        <CardTitle className="text-xl">{gpu.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{gpu.vram} | {gpu.tflops} TFLOPs</p>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-6">
                          <div className="text-3xl font-bold text-primary mb-1">
                            ${gpu.daily.toFixed(2)}
                          </div>
                          <div className="text-sm text-muted-foreground">per day (24 hours)</div>
                          <div className="text-xs text-accent mt-1">
                            Save ${(gpu.hourly * 24 - gpu.daily).toFixed(2)} vs hourly
                          </div>
                        </div>
                        
                        <ul className="space-y-2 mb-6">
                          {gpu.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-xs text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
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
              
              <div className="max-w-md mx-auto glass-card p-6 rounded-lg border border-border/50">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Daily Plan Features
                </h3>
                <ul className="space-y-2">
                  {planFeatures.daily.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="monthly">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {gpuPricing.map((gpu, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Card className="glass-card border-border/50 hover:border-primary/50 transition-all h-full group hover:scale-105 duration-300 overflow-hidden">
                      <div className={`h-1 bg-gradient-to-r ${gpu.gradient}`} />
                      <CardHeader>
                        <Badge className="w-fit mb-2" variant="secondary">{gpu.badge}</Badge>
                        <CardTitle className="text-xl">{gpu.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{gpu.vram} | {gpu.tflops} TFLOPs</p>
                      </CardHeader>
                      <CardContent>
                        <div className="mb-6">
                          <div className="text-3xl font-bold text-primary mb-1">
                            ${gpu.monthly.toFixed(2)}
                          </div>
                          <div className="text-sm text-muted-foreground">per month (30 days)</div>
                          <div className="text-xs text-accent mt-1">
                            Save ${(gpu.hourly * 720 - gpu.monthly).toFixed(2)} vs hourly
                          </div>
                        </div>
                        
                        <ul className="space-y-2 mb-6">
                          {gpu.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-xs text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
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
              
              <div className="max-w-md mx-auto glass-card p-6 rounded-lg border border-border/50">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  Monthly Plan Features
                </h3>
                <ul className="space-y-2">
                  {planFeatures.monthly.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Additional Services
              </h2>
              <p className="text-muted-foreground">
                Optional add-ons to enhance your GPU infrastructure
              </p>
            </div>
            
            <Card className="glass-card border-border/50">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Service</TableHead>
                    <TableHead className="text-right">Price</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {additionalServices.map((service, idx) => (
                    <TableRow key={idx}>
                      <TableCell className="font-medium">{service.name}</TableCell>
                      <TableCell className="text-right text-primary">{service.price}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center glass-card p-12 rounded-2xl border border-border/50">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get a personalized quote based on your specific requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/quote">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8">
                  Request Custom Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-lg px-8 border-primary/30 hover:bg-primary/10">
                  Talk to Sales
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

export default PricingPage;