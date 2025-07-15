"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ExternalLink, TrendingUp, Users, Target, Award, Star } from "lucide-react"
import { useState } from "react"

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "ecommerce", label: "E-commerce" },
    { id: "healthcare", label: "Healthcare" },
    { id: "education", label: "Education" },
    { id: "realestate", label: "Real Estate" },
    { id: "fitness", label: "Fitness" },
  ]

  const caseStudies = [
    {
      id: 1,
      client: "FitLife Gym",
      logo: "FL",
      industry: "fitness",
      problem: "Low membership sign-ups and poor online visibility in competitive fitness market",
      approach: "Comprehensive social media strategy with targeted Google Ads and local SEO optimization",
      results: {
        leads: "300% increase in leads",
        conversion: "45% higher conversion rate",
        roi: "8X ROI on ad spend",
        timeline: "3 months",
      },
      testimonial:
        "Suprimo Tech transformed our digital presence. We went from struggling to get members to having a waiting list!",
      services: ["Social Media Marketing", "Google Ads", "SEO"],
      image: "/placeholder.svg?height=300&width=400",
      color: "bg-gradient-to-br from-pink-500 to-rose-500",
    },
    {
      id: 2,
      client: "MediCare Plus",
      logo: "MC",
      industry: "healthcare",
      problem: "Difficulty reaching patients online and building trust in digital healthcare services",
      approach: "Content marketing strategy with patient education focus and reputation management",
      results: {
        leads: "250% increase in appointments",
        conversion: "60% improvement in online bookings",
        roi: "6X ROI on marketing spend",
        timeline: "4 months",
      },
      testimonial:
        "The team understood our healthcare industry needs perfectly. Patient inquiries have never been higher.",
      services: ["Content Marketing", "SEO", "Reputation Management"],
      image: "/placeholder.svg?height=300&width=400",
      color: "bg-gradient-to-br from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      client: "EduTech Academy",
      logo: "EA",
      industry: "education",
      problem: "Low enrollment rates for online courses and poor brand recognition",
      approach: "Multi-channel digital marketing with focus on social proof and targeted advertising",
      results: {
        leads: "400% increase in course enrollments",
        conversion: "35% higher completion rates",
        roi: "10X ROI on marketing investment",
        timeline: "2 months",
      },
      testimonial: "Amazing results! Our course enrollments skyrocketed and student engagement improved significantly.",
      services: ["Social Media Marketing", "Meta Ads", "Email Marketing"],
      image: "/placeholder.svg?height=300&width=400",
      color: "bg-gradient-to-br from-purple-500 to-indigo-500",
    },
    {
      id: 4,
      client: "Urban Homes",
      logo: "UH",
      industry: "realestate",
      problem: "Slow property sales and limited online lead generation",
      approach: "Visual-first marketing strategy with virtual tours and targeted property advertising",
      results: {
        leads: "200% increase in property inquiries",
        conversion: "50% faster sales cycle",
        roi: "7X ROI on advertising",
        timeline: "5 months",
      },
      testimonial: "Our property sales doubled within months. The digital strategy was exactly what we needed.",
      services: ["Google Ads", "Social Media Marketing", "Website Development"],
      image: "/placeholder.svg?height=300&width=400",
      color: "bg-gradient-to-br from-green-500 to-emerald-500",
    },
    {
      id: 5,
      client: "StyleHub Fashion",
      logo: "SH",
      industry: "ecommerce",
      problem: "Low online sales and poor social media engagement for fashion brand",
      approach: "Influencer partnerships combined with conversion-optimized e-commerce strategy",
      results: {
        leads: "350% increase in online sales",
        conversion: "40% improvement in cart conversion",
        roi: "9X ROI on marketing spend",
        timeline: "3 months",
      },
      testimonial: "Our online sales exploded! The social media strategy brought our brand to life.",
      services: ["Social Media Marketing", "Influencer Marketing", "E-commerce Optimization"],
      image: "/placeholder.svg?height=300&width=400",
      color: "bg-gradient-to-br from-orange-500 to-red-500",
    },
    {
      id: 6,
      client: "TechStart Solutions",
      logo: "TS",
      industry: "technology",
      problem: "Difficulty generating B2B leads and establishing thought leadership",
      approach: "LinkedIn-focused strategy with content marketing and lead nurturing automation",
      results: {
        leads: "280% increase in qualified leads",
        conversion: "55% improvement in lead quality",
        roi: "12X ROI on marketing investment",
        timeline: "4 months",
      },
      testimonial: "The B2B lead generation strategy exceeded all our expectations. Quality leads are now consistent.",
      services: ["LinkedIn Marketing", "Content Marketing", "Marketing Automation"],
      image: "/placeholder.svg?height=300&width=400",
      color: "bg-gradient-to-br from-cyan-500 to-blue-500",
    },
  ]

  const filteredCaseStudies =
    activeFilter === "all" ? caseStudies : caseStudies.filter((study) => study.industry === activeFilter)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 hero-gradient relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <Badge className="mb-6 bg-purple-100 text-purple-700">
                <Star className="w-4 h-4 mr-2" />
                Our Portfolio
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Success Stories That
                <span className="gradient-text block">Speak for Themselves</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover how we've helped businesses across industries achieve remarkable growth through strategic
                digital marketing
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/rocket-growth.png"
                alt="Business Growth"
                width={400}
                height={400}
                className="w-full max-w-sm mx-auto animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "default" : "outline"}
                onClick={() => setActiveFilter(filter.id)}
                className={
                  activeFilter === filter.id
                    ? "btn-gradient text-white font-semibold rounded-xl"
                    : "border-purple-200 text-purple-600 hover:bg-purple-50 font-semibold rounded-xl"
                }
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid gap-16">
              {filteredCaseStudies.map((study, index) => (
                <Card key={study.id} className="border-0 shadow-2xl overflow-hidden card-hover">
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-2 gap-0">
                      {/* Content Side */}
                      <div className="p-8 lg:p-12">
                        <div className="flex items-center gap-4 mb-6">
                          <div
                            className={`w-16 h-16 ${study.color} text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg`}
                          >
                            {study.logo}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">{study.client}</h3>
                            <Badge variant="secondary" className="mt-1 capitalize bg-purple-100 text-purple-700">
                              {study.industry}
                            </Badge>
                          </div>
                        </div>

                        <div className="space-y-8">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                              <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
                                <Target className="h-4 w-4 text-white" />
                              </div>
                              Challenge
                            </h4>
                            <p className="text-gray-600 leading-relaxed">{study.problem}</p>
                          </div>

                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                                <Award className="h-4 w-4 text-white" />
                              </div>
                              Our Approach
                            </h4>
                            <p className="text-gray-600 leading-relaxed">{study.approach}</p>
                          </div>

                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                                <TrendingUp className="h-4 w-4 text-white" />
                              </div>
                              Results Achieved
                            </h4>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-4 rounded-xl">
                                <div className="text-2xl font-bold gradient-text mb-1">
                                  {study.results.leads.split(" ")[0]}
                                </div>
                                <div className="text-sm text-gray-600">
                                  {study.results.leads.split(" ").slice(1).join(" ")}
                                </div>
                              </div>
                              <div className="bg-gradient-to-br from-orange-50 to-red-50 p-4 rounded-xl">
                                <div className="text-2xl font-bold text-orange-600 mb-1">{study.results.roi}</div>
                                <div className="text-sm text-gray-600">Return on Investment</div>
                              </div>
                            </div>
                          </div>

                          <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-xl">
                            <div className="flex items-start gap-3">
                              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                                <Users className="h-5 w-5 text-white" />
                              </div>
                              <div>
                                <p className="text-gray-700 italic leading-relaxed mb-2">"{study.testimonial}"</p>
                                <p className="text-sm text-gray-500 font-medium">— {study.client} Team</p>
                              </div>
                            </div>
                          </div>

                          <div>
                            <h5 className="font-semibold text-gray-900 mb-3">Services Used:</h5>
                            <div className="flex flex-wrap gap-2">
                              {study.services.map((service, serviceIndex) => (
                                <Badge
                                  key={serviceIndex}
                                  variant="outline"
                                  className="text-purple-600 border-purple-200 bg-purple-50"
                                >
                                  {service}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Image Side */}
                      <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 lg:p-12 flex items-center justify-center">
                        <div className="w-full max-w-md text-center">
                          <div className="w-64 h-64 mx-auto mb-6 bg-white rounded-2xl shadow-2xl flex items-center justify-center">
                            <div className={`w-32 h-32 ${study.color} rounded-2xl flex items-center justify-center`}>
                              <span className="text-4xl font-bold text-white">{study.logo}</span>
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-3xl font-bold gradient-text mb-1">{study.results.timeline}</div>
                            <div className="text-gray-600 font-medium">Project Timeline</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Our Track Record</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold gradient-text mb-2">120+</div>
                <div className="text-gray-600 font-medium">Happy Clients</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold gradient-text mb-2">200+</div>
                <div className="text-gray-600 font-medium">Projects Completed</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold gradient-text mb-2">25+</div>
                <div className="text-gray-600 font-medium">Industries Served</div>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-4xl font-bold gradient-text mb-2">4X-10X</div>
                <div className="text-gray-600 font-medium">Average ROI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Be Our Next Success Story?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help your business achieve similar results
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="btn-orange text-white px-10 py-4 text-lg font-semibold rounded-2xl shadow-2xl"
                >
                  Start Your Success Story
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
              <Link href="/services">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold rounded-2xl bg-transparent"
                >
                  <ExternalLink className="mr-3 h-6 w-6" />
                  View Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
