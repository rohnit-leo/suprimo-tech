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
    { id: "education", label: "Education" },
    { id: "technology", label: "Technology" },
    { id: "coaching", label: "Coaching" },
    { id: "media", label: "Media" },
    { id: "consultancy", label: "Consultancy" },
  ]

  const caseStudies = [
    {
      id: 1,
      client: "To Learn To Earn",
      logo: "/clients/to-learn-to-earn.png",
      industry: "education",
      problem: "Low student enrollment and poor online visibility in competitive education market",
      approach: "Comprehensive social media strategy with targeted Google Ads and educational content marketing",
      results: {
        leads: "300% increase in enrollments",
        conversion: "45% higher course completion",
        roi: "8X ROI on ad spend",
        timeline: "3 months",
      },
      testimonial:
        "Suprimo Tech transformed our digital presence. We went from struggling to get students to having a waiting list!",
      services: ["Social Media Marketing", "Google Ads", "Content Marketing"],
      color: "bg-gradient-to-br from-orange-500 to-amber-500",
      description:
        "Skill development and earning-focused education platform helping students build practical skills for better career opportunities.",
    },
    {
      id: 2,
      client: "Speak UP Pro",
      logo: "/clients/speak-up-pro.png",
      industry: "coaching",
      problem: "Difficulty reaching potential students and building trust in communication training services",
      approach: "Personal branding strategy with video content and targeted LinkedIn campaigns",
      results: {
        leads: "250% increase in inquiries",
        conversion: "60% improvement in course bookings",
        roi: "6X ROI on marketing spend",
        timeline: "4 months",
      },
      testimonial:
        "The team understood our communication training needs perfectly. Student inquiries have never been higher.",
      services: ["Personal Branding", "LinkedIn Marketing", "Video Content"],
      color: "bg-gradient-to-br from-gray-700 to-gray-900",
      description:
        "Professional public speaking and communication skills training institute helping individuals excel in presentations and interpersonal communication.",
    },
    {
      id: 3,
      client: "Dr. Digital India",
      logo: "/clients/dr-digital-india.png",
      industry: "consultancy",
      problem: "Need to establish thought leadership and generate B2B leads in digital marketing space",
      approach: "Content marketing strategy with industry insights and LinkedIn thought leadership campaigns",
      results: {
        leads: "400% increase in consultation requests",
        conversion: "35% higher client retention",
        roi: "10X ROI on marketing investment",
        timeline: "2 months",
      },
      testimonial:
        "Amazing results! Our consultation requests skyrocketed and client engagement improved significantly.",
      services: ["Content Marketing", "LinkedIn Marketing", "Thought Leadership"],
      color: "bg-gradient-to-br from-blue-500 to-cyan-500",
      description:
        "Digital marketing consultancy providing expert guidance and training to businesses looking to excel in digital transformation.",
    },
    {
      id: 4,
      client: "TICT Tulsi Institute",
      logo: "/clients/tulsi-institute.png",
      industry: "technology",
      problem: "Low enrollment in computer courses and limited online presence",
      approach: "Local SEO optimization with targeted social media campaigns for tech education",
      results: {
        leads: "200% increase in course inquiries",
        conversion: "50% faster enrollment process",
        roi: "7X ROI on advertising",
        timeline: "5 months",
      },
      testimonial: "Our course enrollments doubled within months. The digital strategy was exactly what we needed.",
      services: ["Local SEO", "Social Media Marketing", "Website Development"],
      color: "bg-gradient-to-br from-red-500 to-pink-500",
      description:
        "Computer technology and certification institute offering comprehensive IT training and professional development courses.",
    },
    {
      id: 5,
      client: "Erit Maker Test Series",
      logo: "/clients/erit-maker.png",
      industry: "education",
      problem: "Low visibility in competitive exam preparation market and poor student engagement",
      approach: "Educational content marketing with exam-focused social media strategy and student success stories",
      results: {
        leads: "350% increase in test series subscriptions",
        conversion: "40% improvement in student retention",
        roi: "9X ROI on marketing spend",
        timeline: "3 months",
      },
      testimonial:
        "Our test series subscriptions exploded! The targeted approach brought quality students to our platform.",
      services: ["Content Marketing", "Social Media Marketing", "Student Engagement"],
      color: "bg-gradient-to-br from-red-600 to-gray-700",
      description:
        "Competitive exam preparation platform providing comprehensive test series and study materials for various entrance examinations.",
    },
    {
      id: 6,
      client: "Coach Yashodeep",
      logo: "/clients/coach-yashodeep.png",
      industry: "coaching",
      problem: "Difficulty establishing personal brand and reaching potential coaching clients online",
      approach: "Personal branding with inspirational content and targeted coaching service promotion",
      results: {
        leads: "280% increase in coaching inquiries",
        conversion: "55% improvement in client acquisition",
        roi: "12X ROI on marketing investment",
        timeline: "4 months",
      },
      testimonial:
        "The personal branding strategy exceeded all expectations. Quality coaching inquiries are now consistent.",
      services: ["Personal Branding", "Content Marketing", "Social Media Strategy"],
      color: "bg-gradient-to-br from-blue-600 to-purple-600",
      description:
        "Personal development and life coaching services helping individuals achieve their goals and unlock their potential.",
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
                          <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg border">
                            <Image
                              src={study.logo || "/placeholder.svg"}
                              alt={study.client}
                              width={48}
                              height={48}
                              className="object-contain"
                            />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">{study.client}</h3>
                            <Badge variant="secondary" className="mt-1 capitalize bg-purple-100 text-purple-700">
                              {study.industry}
                            </Badge>
                          </div>
                        </div>

                        <div className="mb-6">
                          <p className="text-gray-600 leading-relaxed">{study.description}</p>
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
                            <div className="w-32 h-32 bg-gray-50 rounded-2xl flex items-center justify-center">
                              <Image
                                src={study.logo || "/placeholder.svg"}
                                alt={study.client}
                                width={80}
                                height={80}
                                className="object-contain"
                              />
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
              <Link href="https://wa.me/18408004141">
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
