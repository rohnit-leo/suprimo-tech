"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Image from "next/image"
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  CheckCircle,
  Award,
  Users,
  Target,
  Zap,
  ArrowRight,
  Quote,
} from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Create WhatsApp message with form data
    const message = `Hi Suprimo Tech! I'm interested in your services.

*Contact Details:*
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company || "Not specified"}

*Service Interest:* ${formData.service || "Not specified"}
*Budget Range:* ${formData.budget || "Not specified"}

*Message:*
${formData.message}

Please get back to me with more information. Thank you!`

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message)

    // Redirect to WhatsApp
    window.open(`https://wa.me/918408004141?text=${encodedMessage}`, "_blank")
  }

  const handleQuickQuote = () => {
    const message = `Hi Suprimo Tech! I'm interested in getting a quick quote for your digital marketing services. Please provide me with more information about your packages and pricing. Thank you!`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/918408004141?text=${encodedMessage}`, "_blank")
  }

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Call Us",
      details: "+91 840-800-4141",
      description: "Mon-Fri 10 am to 6pm",
      color: "bg-gradient-to-br from-blue-500 to-cyan-500",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Us",
      details: "info@suprimotech.com",
      description: "Online support",
      color: "bg-gradient-to-br from-purple-500 to-pink-500",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Visit Us",
      details: "Chh. Sambhajinagar, MH",
      description: "Maharashtra, India",
      color: "bg-gradient-to-br from-orange-500 to-red-500",
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "WhatsApp",
      details: "+91 840-800-4141",
      description: "Quick support",
      color: "bg-gradient-to-br from-green-500 to-emerald-500",
    },
  ]

  const services = [
    "Social Media Marketing",
    "SEO & SEM",
    "Google & Meta Ads",
    "Website Development",
    "Branding & Design",
    "AI Automation",
    "Content Marketing",
    "Email Marketing",
  ]

  const budgetRanges = [
    "₹10,000 - ₹25,000",
    "₹25,000 - ₹50,000",
    "₹50,000 - ₹1,00,000",
    "₹1,00,000 - ₹2,00,000",
    "₹2,00,000+",
  ]

  const faqs = [
    {
      question: "How long does it take to see results?",
      answer: "Most clients see initial results within 30-60 days, with significant improvements by 90 days.",
    },
    {
      question: "Do you work with small businesses?",
      answer: "Yes! We work with businesses of all sizes, from startups to enterprises.",
    },
    {
      question: "What's included in your reporting?",
      answer: "Weekly detailed reports with metrics, insights, and actionable recommendations.",
    },
    {
      question: "Can you help with multiple services?",
      answer: "We offer comprehensive digital marketing solutions under one roof.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 hero-gradient relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <Badge className="mb-6 bg-purple-100 text-purple-700">
                <MessageCircle className="w-4 h-4 mr-2" />
                Get In Touch
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ready to Scale Your
                <span className="gradient-text block">Digital Presence?</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Let's discuss your goals and create a custom strategy that delivers real results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/918408004141" target="_blank" rel="noopener noreferrer">
                  <Button className="btn-gradient text-white px-8 py-3 rounded-xl font-semibold">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp Now
                  </Button>
                </a>
                <a href="tel:+91 840-800-4141">
                  <Button
                    variant="outline"
                    className="px-8 py-3 rounded-xl font-semibold border-purple-200 bg-transparent"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Call Now
                  </Button>
                </a>
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-0 shadow-xl card-hover">
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 ${info.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg`}
                  >
                    {info.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-lg font-semibold text-purple-600 mb-1">{info.details}</p>
                  <p className="text-gray-600 text-sm">{info.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Quick Quote */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Card className="border-0 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                  <MessageCircle className="h-6 w-6 text-green-600" />
                  Send Message via WhatsApp
                </CardTitle>
                <p className="text-gray-600">
                  Fill out the form below and we'll send your details directly to WhatsApp for instant communication!
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-semibold text-gray-700 mb-2 block">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="rounded-xl border-gray-200 focus:border-purple-500"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-2 block">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="rounded-xl border-gray-200 focus:border-purple-500"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone" className="text-sm font-semibold text-gray-700 mb-2 block">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="rounded-xl border-gray-200 focus:border-purple-500"
                        placeholder="Your phone number"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company" className="text-sm font-semibold text-gray-700 mb-2 block">
                        Company Name
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="rounded-xl border-gray-200 focus:border-purple-500"
                        placeholder="Your company"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="service" className="text-sm font-semibold text-gray-700 mb-2 block">
                        Service Interested In
                      </Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-gray-200 px-3 py-2 focus:border-purple-500 focus:outline-none"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="budget" className="text-sm font-semibold text-gray-700 mb-2 block">
                        Budget Range
                      </Label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border border-gray-200 px-3 py-2 focus:border-purple-500 focus:outline-none"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range, index) => (
                          <option key={index} value={range}>
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-semibold text-gray-700 mb-2 block">
                      Project Details *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="rounded-xl border-gray-200 focus:border-purple-500"
                      placeholder="Tell us about your project, goals, and requirements..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-3 rounded-xl font-semibold text-lg"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Send via WhatsApp
                  </Button>

                  <p className="text-sm text-gray-500 text-center">
                    Your message will be formatted and sent directly to our WhatsApp for instant response!
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Quick Quote & Why Choose Us */}
            <div className="space-y-8">
              {/* Quick Quote */}
              <Card className="border-0 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                    <Zap className="h-6 w-6 text-orange-600" />
                    Get Quick Quote
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl">
                      <h4 className="font-bold text-gray-900 mb-3">🚀 Free Strategy Call</h4>
                      <p className="text-gray-600 mb-4">
                        Get a personalized 30-minute consultation to discuss your goals and receive a custom quote.
                      </p>
                      <Button
                        onClick={handleQuickQuote}
                        className="btn-orange text-white px-6 py-2 rounded-xl font-semibold"
                      >
                        Get Quick Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-xl">
                      <h4 className="font-bold text-gray-900 mb-3">⚡ Quick Response</h4>
                      <p className="text-gray-600 mb-4">Need immediate assistance? We respond within 2 hours!</p>
                      <div className="flex gap-3">
                        <a href="tel:+91 840-800-4141">
                          <Button
                            variant="outline"
                            className="border-purple-200 text-purple-600 px-4 py-2 rounded-xl bg-transparent"
                          >
                            <Phone className="mr-2 h-4 w-4" />
                            Call
                          </Button>
                        </a>
                        <a href="mailto:info@suprimotech.com">
                          <Button
                            variant="outline"
                            className="border-purple-200 text-purple-600 px-4 py-2 rounded-xl bg-transparent"
                          >
                            <Mail className="mr-2 h-4 w-4" />
                            Email
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card className="border-0 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-gray-900 flex items-center gap-3">
                    <Award className="h-6 w-6 text-purple-600" />
                    Why Choose Us?
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">120+ Happy Clients</h4>
                        <p className="text-gray-600 text-sm">Trusted by businesses across 25+ industries</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Target className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">4X-10X ROI</h4>
                        <p className="text-gray-600 text-sm">Proven track record of exceptional returns</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">No Setup Fees</h4>
                        <p className="text-gray-600 text-sm">Transparent pricing with no hidden costs</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-purple-100 text-purple-700">
                <Quote className="w-4 h-4 mr-2" />
                FAQ
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">Quick answers to common questions about our services</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {faqs.map((faq, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <h4 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h4>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join 120+ successful businesses and start your digital transformation today
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="https://wa.me/918408004141" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="btn-orange text-white px-10 py-4 text-lg font-semibold rounded-2xl shadow-2xl"
                >
                  <MessageCircle className="mr-3 h-6 w-6" />
                  Start WhatsApp Chat
                </Button>
              </a>
              <a href="tel:+91 840-800-4141">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold rounded-2xl bg-transparent"
                >
                  <Phone className="mr-3 h-6 w-6" />
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/918408004141"
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
