import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, Calculator, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

const QuotePage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    gpuType: "",
    quantity: "1",
    durationHours: "",
    useCase: "",
    estimatedBudget: "",
    projectDescription: "",
    startDate: "",
    requirements: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // In production, this would POST to your PHP backend
    // Example: fetch('/api/quote.php', { method: 'POST', body: JSON.stringify(formData) })
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success("Quote request submitted! Our team will contact you within 24 hours.");
      
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        gpuType: "",
        quantity: "1",
        durationHours: "",
        useCase: "",
        estimatedBudget: "",
        projectDescription: "",
        startDate: "",
        requirements: ""
      });
    } catch (error) {
      toast.error("Failed to submit request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const gpuOptions = [
    { value: "h100", label: "NVIDIA H100 (80GB) - $4.50/hr" },
    { value: "a100-80", label: "NVIDIA A100 SXM4 (80GB) - $3.00/hr" },
    { value: "a100-40", label: "NVIDIA A100 PCIe (40GB) - $2.50/hr" },
    { value: "rtx-4090", label: "NVIDIA RTX 4090 (24GB) - $1.20/hr" },
    { value: "a6000", label: "NVIDIA RTX A6000 (48GB) - $2.00/hr" },
    { value: "l40", label: "NVIDIA L40 (48GB) - $2.20/hr" },
    { value: "v100", label: "NVIDIA V100 (32GB) - $1.80/hr" },
    { value: "mi250x", label: "AMD MI250X (128GB) - $3.50/hr" }
  ];

  const useCaseOptions = [
    { value: "training", label: "AI/ML Training" },
    { value: "inference", label: "Inference Deployment" },
    { value: "research", label: "Scientific Research" },
    { value: "development", label: "Development & Testing" },
    { value: "other", label: "Other" }
  ];

  const steps = [
    {
      step: "1",
      title: "Submit Request",
      description: "Fill out the quote form with your requirements"
    },
    {
      step: "2",
      title: "Review & Quote",
      description: "Our team reviews and prepares a custom quote"
    },
    {
      step: "3",
      title: "Confirmation",
      description: "Approve the quote and finalize details"
    },
    {
      step: "4",
      title: "Deployment",
      description: "Your GPU infrastructure is provisioned"
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
              <Calculator className="w-3 h-3 mr-1" />
              Custom Quote
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Request a
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Custom Quote
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8">
              Tell us about your GPU requirements and we'll create a tailored solution for your needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-card border-border/50 text-center h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                      <span className="text-xl font-bold text-primary">{step.step}</span>
                    </div>
                    <h3 className="font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <FileText className="w-6 h-6 text-primary" />
                    Quote Request Form
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Provide details about your GPU requirements and we'll get back to you with a custom quote
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Contact Information */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Badge variant="outline">1</Badge>
                        Contact Information
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">Full Name *</Label>
                          <Input
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@company.com"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 (555) 123-4567"
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="company">Company *</Label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Your Company"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* GPU Requirements */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Badge variant="outline">2</Badge>
                        GPU Requirements
                      </h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="gpuType">GPU Type *</Label>
                          <Select
                            value={formData.gpuType}
                            onValueChange={(value) => handleSelectChange('gpuType', value)}
                            required
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select GPU type" />
                            </SelectTrigger>
                            <SelectContent>
                              {gpuOptions.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="quantity">Quantity *</Label>
                          <Input
                            id="quantity"
                            name="quantity"
                            type="number"
                            min="1"
                            value={formData.quantity}
                            onChange={handleChange}
                            placeholder="1"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="durationHours">Duration (Hours)</Label>
                          <Input
                            id="durationHours"
                            name="durationHours"
                            type="number"
                            min="1"
                            value={formData.durationHours}
                            onChange={handleChange}
                            placeholder="e.g., 720 (1 month)"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="startDate">Preferred Start Date</Label>
                          <Input
                            id="startDate"
                            name="startDate"
                            type="date"
                            value={formData.startDate}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div>
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <Badge variant="outline">3</Badge>
                        Project Details
                      </h3>
                      <div className="space-y-6">
                        <div className="space-y-2">
                          <Label htmlFor="useCase">Use Case *</Label>
                          <Select
                            value={formData.useCase}
                            onValueChange={(value) => handleSelectChange('useCase', value)}
                            required
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select use case" />
                            </SelectTrigger>
                            <SelectContent>
                              {useCaseOptions.map((option) => (
                                <SelectItem key={option.value} value={option.value}>
                                  {option.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="estimatedBudget">Estimated Budget (Optional)</Label>
                          <Input
                            id="estimatedBudget"
                            name="estimatedBudget"
                            type="number"
                            min="0"
                            step="0.01"
                            value={formData.estimatedBudget}
                            onChange={handleChange}
                            placeholder="e.g., 5000"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="projectDescription">Project Description *</Label>
                          <Textarea
                            id="projectDescription"
                            name="projectDescription"
                            value={formData.projectDescription}
                            onChange={handleChange}
                            placeholder="Tell us about your project and what you'll be using the GPUs for..."
                            rows={4}
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="requirements">Special Requirements (Optional)</Label>
                          <Textarea
                            id="requirements"
                            name="requirements"
                            value={formData.requirements}
                            onChange={handleChange}
                            placeholder="Any specific requirements, frameworks, or configurations needed..."
                            rows={3}
                          />
                        </div>
                      </div>
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Submitting..." : "Request Quote"}
                      <CheckCircle2 className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Happens Next?
              </h2>
              <p className="text-muted-foreground">
                Here's what you can expect after submitting your quote request
              </p>
            </div>

            <div className="space-y-6">
              <Card className="glass-card border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Immediate Confirmation</h3>
                      <p className="text-sm text-muted-foreground">
                        You'll receive an email confirmation with your request details
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Expert Review (24 hours)</h3>
                      <p className="text-sm text-muted-foreground">
                        Our team analyzes your requirements and prepares a custom quote
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Personalized Proposal</h3>
                      <p className="text-sm text-muted-foreground">
                        Receive a detailed quote with pricing, timelines, and recommendations
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-border/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Quick Deployment</h3>
                      <p className="text-sm text-muted-foreground">
                        Once approved, your GPU infrastructure can be live within minutes
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuotePage;