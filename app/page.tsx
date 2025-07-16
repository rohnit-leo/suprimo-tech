import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Award,
  Target,
  Zap,
  BarChart3,
  Globe,
  Smartphone,
  Search,
  PenTool,
  Bot,
  MessageCircle,
  Star,
  Sparkles,
  Users,
  Quote,
} from "lucide-react"

export default function HomePage() {
  const services = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Social Media Marketing",
      description: "Content, captions, growth, and engagement across platforms",
      color: "bg-gradient-to-br from-pink-50 to-rose-100 text-pink-600",
      iconBg: "bg-gradient-to-br from-pink-500 to-rose-500",
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "SEO & SEM",
      description: "Rank on Google and run high-performing paid search ads",
      color: "bg-gradient-to-br from-emerald-50 to-green-100 text-emerald-600",
      iconBg: "bg-gradient-to-br from-emerald-500 to-green-500",
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Google & Meta Ads",
      description: "Data-driven ad campaigns for leads, sales, and reach",
      color: "bg-gradient-to-br from-orange-50 to-amber-100 text-orange-600",
      iconBg: "bg-gradient-to-br from-orange-500 to-amber-500",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Website Development",
      description: "Modern, mobile-responsive business websites",
      color: "bg-gradient-to-br from-purple-50 to-violet-100 text-purple-600",
      iconBg: "bg-gradient-to-br from-purple-500 to-violet-500",
    },
    {
      icon: <PenTool className="h-8 w-8" />,
      title: "Branding & Design",
      description: "Logo, brand identity, brochures, creatives",
      color: "bg-gradient-to-br from-cyan-50 to-blue-100 text-cyan-600",
      iconBg: "bg-gradient-to-br from-cyan-500 to-blue-500",
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "AI Funnels & Automation",
      description: "Chatbots, lead automation, CRM integration",
      color: "bg-gradient-to-br from-indigo-50 to-purple-100 text-indigo-600",
      iconBg: "bg-gradient-to-br from-indigo-500 to-purple-500",
    },
  ]

  const stats = [
    { number: "120+", label: "Clients Served", icon: <Users className="h-6 w-6" /> },
    { number: "200+", label: "Projects Completed", icon: <Award className="h-6 w-6" /> },
    { number: "₹50+ Lakhs", label: "Total Ad Spend", icon: <TrendingUp className="h-6 w-6" /> },
    { number: "1,20,000+", label: "Leads Generated", icon: <Target className="h-6 w-6" /> },
    { number: "4X to 10X", label: "Average ROI", icon: <Zap className="h-6 w-6" /> },
    { number: "25+", label: "Industries Covered", icon: <Globe className="h-6 w-6" /> },
  ]

  const clients = [
    {
      name: "Shabdratna",
      logo: "/clients/shabdratna.png",
      industry: "Media & Audio Services",
      description: "Premium audio content and voice-over services",
    },
    {
      name: "To Learn To Earn",
      logo: "/clients/to-learn-to-earn.png",
      industry: "Education & Training",
      description: "Skill development and earning-focused education platform",
    },
    {
      name: "Speak UP Pro",
      logo: "/clients/speak-up-pro.png",
      industry: "Communication Training",
      description: "Professional public speaking and communication skills training",
    },
    {
      name: "Dr. Digital India",
      logo: "/clients/dr-digital-india.png",
      industry: "Digital Marketing",
      description: "Digital marketing consultancy and training services",
    },
    {
      name: "G.T.I",
      logo: "/clients/gti.png",
      industry: "Technology Institute",
      description: "Computer technology and IT training institute",
    },
    {
      name: "Excellent",
      logo: "/clients/excellent.png",
      industry: "Business Consultancy",
      description: "Business excellence and success coaching services",
    },
    {
      name: "Vidyalankaar Classes",
      logo: "/clients/vidyalankaar.png",
      industry: "Medical & Engineering",
      description: "Medical and engineering entrance exam preparation",
    },
    {
      name: "Coach Yashodeep",
      logo: "/clients/coach-yashodeep.png",
      industry: "Personal Coaching",
      description: "Personal development and life coaching services",
    },
    {
      name: "TICT Tulsi Institute",
      logo: "/clients/tulsi-institute.png",
      industry: "Computer Education",
      description: "Computer technology and certification courses",
    },
    {
      name: "Erit Maker Test Series",
      logo: "/clients/erit-maker.png",
      industry: "Test Preparation",
      description: "Competitive exam preparation and test series",
    },
  ]

  const testimonials = [
    {
      quote:
        "Suprimo Tech transformed our digital presence completely. Our student enrollments increased by 300% within just 3 months!",
      author: "To Learn To Earn Team",
      position: "Education Platform",
      logo: "/clients/to-learn-to-earn.png",
    },
    {
      quote:
        "The social media strategy they created for us was phenomenal. Our brand visibility and engagement skyrocketed!",
      author: "Speak UP Pro",
      position: "Communication Training",
      logo: "/clients/speak-up-pro.png",
    },
    {
      quote:
        "As a digital marketing consultant myself, I can say Suprimo Tech's approach is truly professional and result-oriented.",
      author: "Dr. Digital India",
      position: "Digital Marketing Expert",
      logo: "/clients/dr-digital-india.png",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden hero-gradient py-20 lg:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div
          className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-2xl">
              <Badge className="mb-6 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 hover:from-purple-200 hover:to-blue-200 border-0 px-6 py-2 text-sm font-semibold">
                <Sparkles className="w-4 h-4 mr-2" />🚀 AI-Powered Digital Marketing Agency
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Scale Your Business with
                <span className="gradient-text block mt-2">Smart Digital Marketing</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                We don't just run campaigns — we build digital ecosystems that grow your business 24/7 using content,
                traffic, automation, and data.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="btn-gradient text-white px-10 py-4 text-lg font-semibold rounded-2xl shadow-2xl animate-pulse-glow"
                  >
                    Get Free Strategy Call
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-10 py-4 text-lg font-semibold rounded-2xl border-2 border-purple-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-300 bg-transparent"
                  >
                    View Our Work
                  </Button>
                </Link>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <CheckCircle className="h-5 w-5 text-purple-500" />
                  <span className="font-medium">No Setup Fees</span>
                </div>
                <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <CheckCircle className="h-5 w-5 text-purple-500" />
                  <span className="font-medium">Weekly Reports</span>
                </div>
                <div className="flex items-center gap-3 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                  <CheckCircle className="h-5 w-5 text-purple-500" />
                  <span className="font-medium">ROI Guaranteed</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/images/business-growth.jpg"
                alt="Business Growth Illustration"
                width={500}
                height={500}
                className="w-full max-w-md mx-auto animate-float"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 section-gradient relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <Badge className="mb-6 bg-white/80 text-purple-700 border-purple-200">
                <Star className="w-4 h-4 mr-2" />
                Our Core Services
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Comprehensive Digital Solutions</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Powered by AI and human expertise to deliver exceptional results for your business
              </p>
            </div>
            <div className="relative">
              <Image
                src="/images/marketing-toolkit.png"
                alt="Marketing Toolkit"
                width={400}
                height={400}
                className="w-full max-w-sm mx-auto"
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group card-hover border-0 shadow-xl bg-white/80 backdrop-blur-sm overflow-hidden"
              >
                <CardContent className="p-8 relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100/50 to-blue-100/50 rounded-full -translate-y-16 translate-x-16"></div>
                  <div
                    className={`w-16 h-16 rounded-2xl ${service.iconBg} text-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  <Link href="/services">
                    <Button
                      variant="ghost"
                      className="text-purple-600 hover:text-purple-700 hover:bg-purple-50 p-0 font-semibold"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-purple-100 text-purple-700">
              <Award className="w-4 h-4 mr-2" />
              Our Valued Clients
            </Badge>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              From education to technology, we've helped diverse businesses achieve remarkable digital growth
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
            {clients.map((client, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200"
              >
                <div className="relative w-16 h-16 mx-auto mb-4 bg-gray-50 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={client.name}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <h4 className="text-sm font-bold text-gray-900 text-center mb-1">{client.name}</h4>
                <p className="text-xs text-gray-500 text-center">{client.industry}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-6">Join 120+ successful businesses across 25+ industries</p>
            <Link href="/portfolio">
              <Button className="btn-gradient text-white px-8 py-3 rounded-xl font-semibold">
                View All Success Stories
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 section-gradient relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-white/80 text-purple-700 border-purple-200">
              <Quote className="w-4 h-4 mr-2" />
              Client Testimonials
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real feedback from real businesses who've experienced remarkable growth with us
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mr-4">
                      <Image
                        src={testimonial.logo || "/placeholder.svg"}
                        alt={testimonial.author}
                        width={32}
                        height={32}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                      <p className="text-sm text-gray-600">{testimonial.position}</p>
                    </div>
                  </div>
                  <Quote className="h-8 w-8 text-purple-300 mb-4" />
                  <p className="text-gray-700 leading-relaxed italic">"{testimonial.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 section-orange relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge className="mb-6 bg-white/80 text-orange-700 border-orange-200">
                  <Award className="w-4 h-4 mr-2" />
                  Why Choose Us
                </Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose Suprimo Tech?</h2>
                <p className="text-xl text-gray-600 mb-8">
                  We combine creativity, data, and automation for maximum results
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-6 group">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center flex-shrink-0 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Target className="h-8 w-8" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Personalized Solutions</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Tailored strategies that fit your unique business needs and goals
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6 group">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Zap className="h-8 w-8" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">AI & Human Intelligence</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Perfect blend of automation and human creativity for optimal results
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-6 group">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <BarChart3 className="h-8 w-8" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-3">Weekly Performance Reports</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Transparent reporting with actionable insights every week
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/rocket-analytics.png"
                  alt="Rocket Analytics"
                  width={400}
                  height={400}
                  className="w-full max-w-sm mx-auto animate-float"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <Image
                src="/images/rocket-growth.png"
                alt="Rocket Growth"
                width={200}
                height={200}
                className="w-32 h-32 mx-auto mb-6 animate-float"
              />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Scale Your Business?</h2>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Join 120+ successful businesses and start your digital transformation today
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="btn-orange text-white px-10 py-4 text-lg font-semibold rounded-2xl shadow-2xl"
                >
                  Get Free Strategy Call
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </Link>
              <a href="https://wa.me/18408004141" target="_blank" rel="noopener noreferrer" className="inline-flex">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold rounded-2xl bg-transparent backdrop-blur-sm"
                >
                  <MessageCircle className="mr-3 h-6 w-6" />
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/18408004141"
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
