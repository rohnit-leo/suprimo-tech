import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Users,
  Target,
  Lightbulb,
  Award,
  Heart,
  Zap,
  CheckCircle,
  TrendingUp,
  Star,
  Clock,
} from "lucide-react"

export default function AboutPage() {
  const timeline = [
    {
      year: "2019",
      event: "Idea Started",
      description: "Identified the gap in affordable digital marketing for SMBs",
      color: "bg-gradient-to-br from-purple-500 to-blue-500",
    },
    {
      year: "2021",
      event: "Official Launch",
      description: "Suprimo Tech officially launched with core services",
      color: "bg-gradient-to-br from-blue-500 to-cyan-500",
    },
    {
      year: "2022",
      event: "50 Clients",
      description: "Reached milestone of 50 satisfied clients",
      color: "bg-gradient-to-br from-green-500 to-emerald-500",
    },
    {
      year: "2023",
      event: "6-Figure Revenue",
      description: "Achieved significant revenue growth and market presence",
      color: "bg-gradient-to-br from-orange-500 to-red-500",
    },
    {
      year: "2024",
      event: "AI Service Launch",
      description: "Introduced AI-powered automation and funnel services",
      color: "bg-gradient-to-br from-purple-500 to-pink-500",
    },
    {
      year: "2025",
      event: "Continues Growing",
      description: "Expanding services and helping more businesses scale",
      color: "bg-gradient-to-br from-cyan-500 to-blue-500",
    },
  ]

  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Integrity",
      description: "We believe in honest communication and transparent business practices",
      color: "bg-gradient-to-br from-red-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-red-50 to-pink-50",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation",
      description: "Constantly evolving with the latest technologies and marketing trends",
      color: "bg-gradient-to-br from-yellow-500 to-orange-500",
      bgColor: "bg-gradient-to-br from-yellow-50 to-orange-50",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Simplicity",
      description: "Making complex digital marketing simple and accessible for everyone",
      color: "bg-gradient-to-br from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-50",
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Excellence",
      description: "Delivering exceptional results that exceed client expectations",
      color: "bg-gradient-to-br from-purple-500 to-violet-500",
      bgColor: "bg-gradient-to-br from-purple-50 to-violet-50",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Growth-Mindedness",
      description: "Focused on sustainable growth for both our clients and our team",
      color: "bg-gradient-to-br from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Customer Obsession",
      description: "Our clients' success is our primary measure of achievement",
      color: "bg-gradient-to-br from-orange-500 to-red-500",
      bgColor: "bg-gradient-to-br from-orange-50 to-red-50",
    },
  ]

  const differentiators = [
    "Data-driven strategy development",
    "ROI-focused campaign management",
    "Smart AI integrations",
    "Transparent communication",
    "Weekly detailed reporting",
    "Multilingual content support",
  ]

  const stats = [
    { number: "120+", label: "Happy Clients", icon: <Users className="h-6 w-6" /> },
    { number: "25+", label: "Industries Served", icon: <Target className="h-6 w-6" /> },
    { number: "4X-10X", label: "Average ROI", icon: <TrendingUp className="h-6 w-6" /> },
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
                About Suprimo Tech
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Empowering Businesses Through
                <span className="gradient-text block">Smart Digital Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                We're a results-driven, AI-powered Digital Marketing & Branding Agency that helps startups,
                entrepreneurs, and small businesses scale online using performance-based strategies.
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/office-workspace.jpg"
                alt="Office Workspace"
                width={500}
                height={400}
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl shadow-lg"
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center text-white">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-6 bg-white/80 text-purple-700 border-purple-200">
                  <Clock className="w-4 h-4 mr-2" />
                  Our Story
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How We Started</h2>
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p>
                    Suprimo Tech was born from a simple observation: small and medium businesses in India were
                    struggling to compete in the digital space due to expensive and complex marketing solutions that
                    didn't deliver measurable results.
                  </p>
                  <p>
                    Our founders recognized that traditional marketing agencies were focused on vanity metrics rather
                    than actual business growth. They envisioned a different approach - one that combined the power of
                    artificial intelligence with human creativity to deliver affordable, effective, and transparent
                    digital marketing solutions.
                  </p>
                  <p>
                    The name "Suprimo" reflects our commitment to being supreme in our field - not just in terms of
                    results, but in the way we treat our clients, the transparency we provide, and the innovation we
                    bring to every project.
                  </p>
                  <p>
                    Today, we've helped over 120 businesses across 25+ industries achieve their digital marketing goals,
                    generating over 1,20,000 leads and managing ₹50+ lakhs in ad spend with an average ROI of 4X to 10X.
                  </p>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/business-growth.jpg"
                  alt="Business Growth"
                  width={500}
                  height={400}
                  className="w-full rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Vision & Mission</h2>
              <p className="text-xl text-gray-600">What drives us every day</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-2xl card-hover">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg">
                    <Target className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    "To become India's most trusted digital growth partner by combining creativity, strategy, and
                    automation."
                  </p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-2xl card-hover">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg">
                    <Zap className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    "To help 1,00,000+ Indian businesses grow their online presence and revenue using affordable,
                    innovative, and smart digital marketing strategies."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 section-orange">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge className="mb-6 bg-white/80 text-orange-700 border-orange-200">
                  <Award className="w-4 h-4 mr-2" />
                  What Makes Us Different
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Suprimo Tech?</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Our unique approach sets us apart in the digital marketing landscape
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {differentiators.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                    >
                      <CheckCircle className="h-6 w-6 text-orange-600 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/web-development.png"
                  alt="Web Development"
                  width={400}
                  height={400}
                  className="w-full max-w-sm mx-auto animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 section-cyan">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
              <p className="text-xl text-gray-600">From idea to impact - our growth story</p>
            </div>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div
                      className={`w-20 h-20 ${item.color} text-white rounded-2xl flex items-center justify-center font-bold text-lg shadow-lg`}
                    >
                      {item.year}
                    </div>
                  </div>
                  <div className="flex-1 bg-white p-8 rounded-2xl shadow-xl card-hover">
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{item.event}</h4>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-600">The principles that guide everything we do</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className={`group card-hover border-0 shadow-xl ${value.bgColor}`}>
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 rounded-2xl ${value.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 text-white shadow-lg`}
                    >
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-600 mb-12">Passionate professionals dedicated to your success</p>
            <div className="bg-white p-8 rounded-2xl shadow-2xl">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  ST
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Suprimo Tech Team</h3>
                  <p className="text-purple-600 font-medium">Digital Marketing Experts</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Our diverse team of marketing strategists, creative designers, data analysts, and AI specialists work
                together to deliver exceptional results for every client. With combined experience of 50+ years in
                digital marketing, we bring expertise across all major industries and platforms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Partner with Us?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help your business achieve its digital marketing goals
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="btn-orange text-white px-10 py-4 text-lg font-semibold rounded-2xl shadow-2xl"
              >
                Start Your Journey
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
