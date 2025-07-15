import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Smartphone,
  Search,
  BarChart3,
  Globe,
  PenTool,
  Bot,
  CheckCircle,
  Target,
  TrendingUp,
  Users,
  Star,
} from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      id: "social-media",
      icon: <Smartphone className="h-8 w-8" />,
      title: "Social Media Marketing",
      subtitle: "Facebook, Instagram, LinkedIn Strategy & Management",
      description:
        "Comprehensive social media management that builds brand awareness, engages your audience, and drives conversions across all major platforms.",
      color: "bg-gradient-to-br from-pink-50 to-rose-100",
      iconBg: "bg-gradient-to-br from-pink-500 to-rose-500",
      process: [
        "Social media audit and competitor analysis",
        "Content strategy and calendar development",
        "Creative design and copywriting",
        "Community management and engagement",
        "Performance tracking and optimization",
      ],
      benefits: [
        "Increased brand awareness and reach",
        "Higher engagement rates",
        "Quality lead generation",
        "Improved customer relationships",
        "Monthly growth reports",
      ],
    },
    {
      id: "seo-sem",
      icon: <Search className="h-8 w-8" />,
      title: "SEO & SEM",
      subtitle: "Search Engine Optimization & Marketing",
      description:
        "Dominate search results with our comprehensive SEO strategies and high-performing paid search campaigns that drive qualified traffic.",
      color: "bg-gradient-to-br from-emerald-50 to-green-100",
      iconBg: "bg-gradient-to-br from-emerald-500 to-green-500",
      process: [
        "Website audit and keyword research",
        "On-page and technical SEO optimization",
        "Content creation and link building",
        "Google Ads campaign setup and management",
        "Continuous monitoring and optimization",
      ],
      benefits: [
        "Higher search engine rankings",
        "Increased organic traffic",
        "Better quality leads",
        "Improved website authority",
        "Measurable ROI from paid ads",
      ],
    },
    {
      id: "google-meta-ads",
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Google & Meta Ads",
      subtitle: "Data-Driven Paid Advertising Campaigns",
      description:
        "Strategic paid advertising campaigns across Google and Meta platforms designed to maximize your ROI and drive qualified leads.",
      color: "bg-gradient-to-br from-orange-50 to-amber-100",
      iconBg: "bg-gradient-to-br from-orange-500 to-amber-500",
      process: [
        "Campaign strategy and audience research",
        "Ad creative development and testing",
        "Landing page optimization",
        "Pixel setup and conversion tracking",
        "Continuous A/B testing and optimization",
      ],
      benefits: [
        "Immediate traffic and leads",
        "Precise audience targeting",
        "Detailed performance analytics",
        "Scalable campaign growth",
        "Guaranteed ROI improvement",
      ],
    },
    {
      id: "website-development",
      icon: <Globe className="h-8 w-8" />,
      title: "Website Development",
      subtitle: "Modern, Responsive Business Websites",
      description:
        "Custom-built, mobile-responsive websites that not only look great but are optimized for conversions and search engines.",
      color: "bg-gradient-to-br from-purple-50 to-violet-100",
      iconBg: "bg-gradient-to-br from-purple-500 to-violet-500",
      process: [
        "Requirements analysis and planning",
        "UI/UX design and wireframing",
        "Development and testing",
        "SEO optimization and speed enhancement",
        "Launch and ongoing maintenance",
      ],
      benefits: [
        "Professional online presence",
        "Mobile-responsive design",
        "Fast loading speeds",
        "SEO-optimized structure",
        "Conversion-focused layout",
      ],
    },
    {
      id: "branding-design",
      icon: <PenTool className="h-8 w-8" />,
      title: "Branding & Design",
      subtitle: "Complete Brand Identity Solutions",
      description:
        "Create a memorable brand identity with our comprehensive design services including logos, brand guidelines, and marketing materials.",
      color: "bg-gradient-to-br from-cyan-50 to-blue-100",
      iconBg: "bg-gradient-to-br from-cyan-500 to-blue-500",
      process: [
        "Brand discovery and research",
        "Logo design and brand identity",
        "Brand guidelines development",
        "Marketing collateral design",
        "Brand implementation support",
      ],
      benefits: [
        "Professional brand identity",
        "Consistent visual communication",
        "Increased brand recognition",
        "Higher perceived value",
        "Complete brand asset library",
      ],
    },
    {
      id: "ai-automation",
      icon: <Bot className="h-8 w-8" />,
      title: "AI Funnels & Automation",
      subtitle: "Smart Automation & CRM Integration",
      description:
        "Leverage AI-powered automation to streamline your sales process, nurture leads, and provide 24/7 customer support.",
      color: "bg-gradient-to-br from-indigo-50 to-purple-100",
      iconBg: "bg-gradient-to-br from-indigo-500 to-purple-500",
      process: [
        "Business process analysis",
        "Automation workflow design",
        "Chatbot development and training",
        "CRM integration and setup",
        "Testing and optimization",
      ],
      benefits: [
        "24/7 lead capture and nurturing",
        "Reduced manual workload",
        "Improved customer experience",
        "Higher conversion rates",
        "Seamless CRM integration",
      ],
    },
  ]

  const workingStyle = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Data-driven Strategy",
      description: "Every decision backed by analytics and performance data",
      color: "bg-gradient-to-br from-purple-500 to-blue-500",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "ROI-focused Campaigns",
      description: "Optimizing for metrics that matter to your business",
      color: "bg-gradient-to-br from-orange-500 to-red-500",
    },
    {
      icon: <Bot className="h-6 w-6" />,
      title: "Smart AI Integrations",
      description: "Leveraging automation for efficiency and scale",
      color: "bg-gradient-to-br from-cyan-500 to-blue-500",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Transparent Communication",
      description: "Regular updates and clear reporting on all activities",
      color: "bg-gradient-to-br from-green-500 to-emerald-500",
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
                <Star className="w-4 h-4 mr-2" />
                Our Services
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Comprehensive Digital Marketing
                <span className="gradient-text block">Solutions for Growth</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                From strategy to execution, we provide end-to-end digital marketing services that drive real business
                results
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/marketing-funnel.jpg"
                alt="Marketing Funnel"
                width={500}
                height={400}
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid gap-12">
              {services.map((service, index) => (
                <Card key={service.id} className="border-0 shadow-2xl overflow-hidden card-hover">
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-3 gap-0">
                      {/* Service Info */}
                      <div className={`lg:col-span-1 p-8 ${service.color}`}>
                        <div
                          className={`w-16 h-16 rounded-2xl ${service.iconBg} text-white flex items-center justify-center mb-6 shadow-lg`}
                        >
                          {service.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.title}</h3>
                        <p className="text-purple-600 font-medium mb-4">{service.subtitle}</p>
                        <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                        <Link href="/contact">
                          <Button className="btn-gradient text-white font-semibold rounded-xl shadow-lg">
                            Get This Service
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>

                      {/* Process & Benefits */}
                      <div className="lg:col-span-2 p-8 bg-white">
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                              <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-xs font-bold">1</span>
                              </div>
                              Our Process
                            </h4>
                            <ul className="space-y-3">
                              {service.process.map((step, stepIndex) => (
                                <li key={stepIndex} className="flex items-start gap-3">
                                  <div className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                                    {stepIndex + 1}
                                  </div>
                                  <span className="text-gray-600">{step}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                              <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                                <CheckCircle className="h-4 w-4 text-white" />
                              </div>
                              Benefits You Get
                            </h4>
                            <ul className="space-y-3">
                              {service.benefits.map((benefit, benefitIndex) => (
                                <li key={benefitIndex} className="flex items-start gap-3">
                                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                  <span className="text-gray-600">{benefit}</span>
                                </li>
                              ))}
                            </ul>
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

      {/* Working Style */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge className="mb-6 bg-white/80 text-purple-700 border-purple-200">
                  <Target className="w-4 h-4 mr-2" />
                  Our Working Style
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How We Ensure Success</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Our proven methodology delivers consistent results for every client
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {workingStyle.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg card-hover">
                      <div
                        className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center flex-shrink-0 text-white shadow-lg`}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/video-editing.png"
                  alt="Video Editing Tools"
                  width={400}
                  height={400}
                  className="w-full max-w-md mx-auto animate-float"
                />
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose the service that fits your needs or let us create a custom solution for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="btn-orange text-white px-10 py-4 text-lg font-semibold rounded-2xl shadow-2xl"
                >
                  Get Free Consultation
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold rounded-2xl bg-transparent"
                >
                  View Our Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
