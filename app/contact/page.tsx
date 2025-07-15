import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, Phone, Mail, MessageCircle, Clock, Users, Award, CheckCircle, Star } from "lucide-react"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Our Location",
      details: ["Chhatrapati Sambhajinagar", "(Aurangabad), Maharashtra, India"],
      color: "bg-gradient-to-br from-blue-500 to-cyan-500",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      details: ["+91 9403 36 2424", "Mon-Sat: 9 AM - 7 PM"],
      color: "bg-gradient-to-br from-green-500 to-emerald-500",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      details: ["info.suprimotech@gmail.com", "Quick response guaranteed"],
      color: "bg-gradient-to-br from-purple-500 to-violet-500",
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "WhatsApp",
      details: ["Chat with us instantly", "Available 24/7"],
      color: "bg-gradient-to-br from-green-500 to-emerald-500",
    },
  ]

  const services = [
    "Social Media Marketing",
    "SEO & SEM",
    "Google & Meta Ads",
    "Website Development",
    "Branding & Design",
    "AI Funnels & Automation",
    "Complete Digital Strategy",
    "Other",
  ]

  const budgetRanges = [
    "₹10,000 - ₹25,000",
    "₹25,000 - ₹50,000",
    "₹50,000 - ₹1,00,000",
    "₹1,00,000 - ₹2,00,000",
    "₹2,00,000+",
    "Let's discuss",
  ]

  const whyChooseUs = [
    "Free strategy consultation",
    "Custom solutions for your business",
    "Transparent pricing",
    "Weekly performance reports",
    "Dedicated account manager",
    "ROI-focused approach",
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 hero-gradient relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <Badge className="mb-6 bg-purple-100 text-purple-700">
                <Star className="w-4 h-4 mr-2" />
                Get In Touch
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ready to Grow Your
                <span className="gradient-text block">Business Online?</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Let's discuss your digital marketing goals and create a custom strategy that delivers results
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg">
                    <CheckCircle className="h-4 w-4 text-purple-600" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/customer-support.png"
                alt="Customer Support"
                width={400}
                height={400}
                className="w-full max-w-sm mx-auto animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-0 shadow-xl card-hover">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 rounded-2xl ${info.color} flex items-center justify-center mx-auto mb-4 text-white shadow-lg`}
                    >
                      {info.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{info.title}</h3>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-gray-600 text-sm font-medium">
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Main Contact Form */}
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="border-0 shadow-2xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Strategy Call</h2>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                        <Input
                          placeholder="Enter your first name"
                          className="rounded-xl border-gray-200 focus:border-purple-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                        <Input
                          placeholder="Enter your last name"
                          className="rounded-xl border-gray-200 focus:border-purple-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        className="rounded-xl border-gray-200 focus:border-purple-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                      <Input
                        type="tel"
                        placeholder="Enter your phone number"
                        className="rounded-xl border-gray-200 focus:border-purple-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Business Name</label>
                      <Input
                        placeholder="Enter your business name"
                        className="rounded-xl border-gray-200 focus:border-purple-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Service Interested In *</label>
                      <Select>
                        <SelectTrigger className="rounded-xl border-gray-200 focus:border-purple-500">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service, index) => (
                            <SelectItem key={index} value={service.toLowerCase().replace(/\s+/g, "-")}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Monthly Budget Range</label>
                      <Select>
                        <SelectTrigger className="rounded-xl border-gray-200 focus:border-purple-500">
                          <SelectValue placeholder="Select your budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetRanges.map((range, index) => (
                            <SelectItem key={index} value={range.toLowerCase().replace(/\s+/g, "-")}>
                              {range}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Tell Us About Your Goals</label>
                      <Textarea
                        placeholder="Describe your business goals, challenges, and what you hope to achieve with digital marketing..."
                        rows={4}
                        className="rounded-xl border-gray-200 focus:border-purple-500"
                      />
                    </div>

                    <Button className="w-full btn-gradient text-white py-3 rounded-xl font-semibold shadow-lg">
                      Get Free Strategy Call
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>

                    <p className="text-sm text-gray-500 text-center">
                      We'll respond within 2 hours during business hours
                    </p>
                  </form>
                </CardContent>
              </Card>

              {/* Quick Quote Form */}
              <div className="space-y-8">
                <Card className="border-0 shadow-2xl bg-gradient-to-br from-purple-50 to-blue-50">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Need a Quick Quote?</h3>
                    <p className="text-gray-600 mb-6">Get an instant estimate for your digital marketing needs</p>
                    <form className="space-y-4">
                      <Select>
                        <SelectTrigger className="rounded-xl bg-white border-gray-200">
                          <SelectValue placeholder="Select primary service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.slice(0, -1).map((service, index) => (
                            <SelectItem key={index} value={service.toLowerCase().replace(/\s+/g, "-")}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      <Select>
                        <SelectTrigger className="rounded-xl bg-white border-gray-200">
                          <SelectValue placeholder="Business size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="startup">Startup (1-10 employees)</SelectItem>
                          <SelectItem value="small">Small Business (11-50 employees)</SelectItem>
                          <SelectItem value="medium">Medium Business (51-200 employees)</SelectItem>
                          <SelectItem value="large">Large Business (200+ employees)</SelectItem>
                        </SelectContent>
                      </Select>

                      <Input
                        type="email"
                        placeholder="Your email for quote"
                        className="rounded-xl bg-white border-gray-200"
                      />

                      <Button className="w-full btn-orange text-white rounded-xl font-semibold shadow-lg">
                        Get Instant Quote
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Why Choose Us */}
                <Card className="border-0 shadow-2xl">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Why 120+ Businesses Trust Us</h3>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                          <Clock className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Quick Response</h4>
                          <p className="text-sm text-gray-600">We respond to all inquiries within 2 hours</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                          <Users className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Dedicated Support</h4>
                          <p className="text-sm text-gray-600">Personal account manager for every client</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                          <Award className="h-6 w-6" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">Proven Results</h4>
                          <p className="text-sm text-gray-600">4X to 10X average ROI across all campaigns</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* WhatsApp CTA */}
                <Card className="border-0 shadow-2xl bg-gradient-to-br from-green-50 to-emerald-50">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white">
                      <MessageCircle className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Prefer to Chat?</h3>
                    <p className="text-gray-600 mb-6">Get instant answers to your questions on WhatsApp</p>
                    <a href="https://wa.me/919403362424" target="_blank" rel="noopener noreferrer">
                      <Button className="bg-gradient-to-br from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white w-full rounded-xl font-semibold shadow-lg">
                        <MessageCircle className="mr-2 h-5 w-5" />
                        Chat on WhatsApp
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">Quick answers to common questions about our services</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">How quickly can we see results?</h4>
                  <p className="text-gray-600 text-sm">
                    Most clients see initial improvements within 30-60 days, with significant results typically visible
                    within 3-6 months.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Do you work with small businesses?</h4>
                  <p className="text-gray-600 text-sm">
                    We specialize in helping small and medium businesses grow their online presence affordably.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">What's included in your reporting?</h4>
                  <p className="text-gray-600 text-sm">
                    Weekly detailed reports covering all metrics, insights, and recommendations for continuous
                    improvement.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Do you offer custom packages?</h4>
                  <p className="text-gray-600 text-sm">
                    Yes, we create tailored solutions based on your specific business needs and budget requirements.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">What industries do you serve?</h4>
                  <p className="text-gray-600 text-sm">
                    We've successfully worked across 25+ industries including healthcare, education, e-commerce, real
                    estate, and more.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Is there a minimum contract period?</h4>
                  <p className="text-gray-600 text-sm">
                    We recommend a minimum 3-month commitment to see meaningful results, but we're flexible based on
                    your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 120+ successful businesses and start your digital growth journey today
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="btn-orange text-white px-10 py-4 text-lg font-semibold rounded-2xl shadow-2xl"
                >
                  Schedule Free Consultation
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
              <a href="tel:+919403362424" className="inline-flex">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold rounded-2xl bg-transparent"
                >
                  <Phone className="mr-3 h-6 w-6" />
                  Call Now: +91 9403 36 2424
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/919403362424"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
      >
        <Button className="btn-orange text-white rounded-full w-16 h-16 shadow-2xl animate-pulse-glow">
          <MessageCircle className="h-7 w-7" />
        </Button>
      </a>
    </div>
  )
}
