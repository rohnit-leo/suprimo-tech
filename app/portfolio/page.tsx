"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  Star,
  Award,
  TrendingUp,
  Users,
  Target,
  Building2,
  GraduationCap,
  Heart,
  Leaf,
  Briefcase,
  Factory,
} from "lucide-react"
import { useState } from "react"

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filters = [
    { id: "all", label: "All Clients", count: 33 },
    { id: "education", label: "Education", count: 12 },
    { id: "technology", label: "Technology", count: 8 },
    { id: "agriculture", label: "Agriculture", count: 4 },
    { id: "business", label: "Business", count: 5 },
    { id: "manufacturing", label: "Manufacturing", count: 4 },
  ]

  const allClients = [
    // Education & Training
    {
      id: 1,
      name: "To Learn To Earn",
      logo: "/clients/to-learn-to-earn.png",
      category: "education",
      industry: "Skill Development Platform",
      services: ["Social Media Marketing", "Google Ads", "Content Strategy", "Lead Generation"],
      description: "Comprehensive skill development platform helping students build practical career skills",
      results: "300% increase in enrollments, 8X ROI",
      color: "bg-gradient-to-br from-blue-500 to-purple-500",
    },
    {
      id: 2,
      name: "Speak UP Pro",
      logo: "/clients/speak-up-pro.png",
      category: "education",
      industry: "Communication Training",
      services: ["Personal Branding", "LinkedIn Marketing", "Video Content", "Public Speaking Promotion"],
      description: "Professional communication and public speaking training institute",
      results: "250% increase in inquiries, 6X ROI",
      color: "bg-gradient-to-br from-gray-600 to-gray-800",
    },
    {
      id: 3,
      name: "Vidyalankaar Classes",
      logo: "/clients/vidyalankaar.png",
      category: "education",
      industry: "Medical & Engineering Prep",
      services: ["Local SEO", "Social Media Marketing", "Website Development", "Student Engagement"],
      description: "Premier medical and engineering entrance exam preparation center",
      results: "200% increase in admissions",
      color: "bg-gradient-to-br from-red-500 to-pink-500",
    },
    {
      id: 4,
      name: "Erit Maker Test Series",
      logo: "/clients/erit-maker.png",
      category: "education",
      industry: "Test Preparation",
      services: ["Content Marketing", "Social Media Strategy", "Student Outreach", "Digital Branding"],
      description: "Competitive exam preparation and comprehensive test series platform",
      results: "350% increase in subscriptions, 9X ROI",
      color: "bg-gradient-to-br from-red-600 to-gray-700",
    },
    {
      id: 5,
      name: "TICT Tulsi Institute",
      logo: "/clients/tulsi-institute.png",
      category: "education",
      industry: "Computer Education",
      services: ["Local SEO", "Social Media Marketing", "Website Development", "Course Promotion"],
      description: "Computer technology and professional IT certification institute",
      results: "200% increase in course inquiries",
      color: "bg-gradient-to-br from-red-500 to-pink-500",
    },
    {
      id: 6,
      name: "Jeevan Prakash School",
      logo: "/clients/jeevan-prakash-school.jpeg",
      category: "education",
      industry: "Primary & Secondary Education",
      services: ["Online/Offline Advertising", "Social Media Marketing", "Parent Engagement", "School Branding"],
      description: "Quality education institution focused on holistic student development",
      results: "Enhanced school reputation and admissions",
      color: "bg-gradient-to-br from-blue-600 to-navy-700",
    },
    {
      id: 7,
      name: "Jeevan Prakash Paramedical",
      logo: "/clients/jeevan-prakash-paramedical.jpeg",
      category: "education",
      industry: "Medical Education",
      services: ["Admission Marketing", "Meta Ads", "Landing Pages", "Healthcare Content"],
      description: "Premier paramedical college offering comprehensive healthcare education",
      results: "Increased medical course enrollments",
      color: "bg-gradient-to-br from-green-500 to-emerald-600",
    },
    {
      id: 8,
      name: "Vishwa Foundation",
      logo: "/clients/vishwa-foundation.jpeg",
      category: "education",
      industry: "Educational Foundation",
      services: ["Branding", "Social Media Marketing", "Educational Content", "Community Outreach"],
      description: "Educational foundation committed to quality education initiatives",
      results: "Expanded educational impact and reach",
      color: "bg-gradient-to-br from-purple-500 to-pink-500",
    },
    {
      id: 9,
      name: "Rahul Sir's Vishwa Foundation",
      logo: "/clients/rahul-vishwa-foundation.jpeg",
      category: "education",
      industry: "Foundation Classes",
      services: ["Branding", "Educational Content Marketing", "Student Acquisition", "Academic Promotion"],
      description: "Foundation classes and comprehensive educational support services",
      results: "Improved student enrollment and engagement",
      color: "bg-gradient-to-br from-blue-500 to-cyan-500",
    },
    {
      id: 10,
      name: "AVD Group",
      logo: "/clients/avd-group.jpeg",
      category: "education",
      industry: "Education Excellence",
      services: ["Corporate Branding", "Educational Marketing", "Employment Services", "Digital Presence"],
      description: "Education, excellence, and employment focused group providing comprehensive services",
      results: "Enhanced brand recognition and service reach",
      color: "bg-gradient-to-br from-black to-gray-700",
    },
    {
      id: 11,
      name: "Smart Pacey Institute",
      logo: "/clients/smart-pacey-institute.jpeg",
      category: "education",
      industry: "Technology Solutions & Training",
      services: ["Corporate Branding", "Technology Marketing", "Professional Training Promotion", "B2B Marketing"],
      description: "ISO certified institute providing technology solutions and professional training",
      results: "Increased corporate partnerships and training enrollments",
      color: "bg-gradient-to-br from-blue-500 to-red-500",
    },
    {
      id: 12,
      name: "Coach Yashodeep",
      logo: "/clients/coach-yashodeep.png",
      category: "education",
      industry: "Personal Coaching",
      services: ["Personal Branding", "Content Marketing", "Social Media Strategy", "Coaching Promotion"],
      description: "Personal development and life coaching for goal achievement and success",
      results: "280% increase in coaching inquiries, 12X ROI",
      color: "bg-gradient-to-br from-blue-600 to-purple-600",
    },

    // Technology & Business
    {
      id: 13,
      name: "Dr. Digital India",
      logo: "/clients/dr-digital-india.png",
      category: "technology",
      industry: "Digital Marketing Consultancy",
      services: ["Content Marketing", "LinkedIn Marketing", "Thought Leadership", "B2B Lead Generation"],
      description: "Expert digital marketing consultancy and business transformation services",
      results: "400% increase in consultation requests, 10X ROI",
      color: "bg-gradient-to-br from-blue-500 to-cyan-500",
    },
    {
      id: 14,
      name: "G.T.I",
      logo: "/clients/gti.png",
      category: "technology",
      industry: "Computer Technology Institute",
      services: ["Local SEO", "Social Media Marketing", "Website Development", "Tech Course Promotion"],
      description: "Computer technology institute offering comprehensive IT training and certifications",
      results: "Enhanced digital presence and course enrollments",
      color: "bg-gradient-to-br from-orange-500 to-red-500",
    },
    {
      id: 15,
      name: "Sony Technical Institute",
      logo: "/clients/sony-technical-institute.jpeg",
      category: "technology",
      industry: "Technical Education",
      services: ["Logo Design", "Certificate Design", "Brand Identity", "Educational Marketing"],
      description: "Technical education institute providing computer and technology courses",
      results: "Professional brand identity and increased recognition",
      color: "bg-gradient-to-br from-yellow-500 to-orange-600",
    },
    {
      id: 16,
      name: "HR24JOB.com",
      logo: "/clients/hr24job.jpeg",
      category: "technology",
      industry: "Job Portal Platform",
      services: ["Website Development", "Client Services", "Portal Management", "Digital Marketing"],
      description: "Comprehensive job portal connecting employers with qualified candidates nationwide",
      results: "Enhanced platform functionality and user engagement",
      color: "bg-gradient-to-br from-red-500 to-blue-500",
    },
    {
      id: 17,
      name: "Yashodhara",
      logo: "/clients/yashodhara.jpeg",
      category: "technology",
      industry: "Personal Development Platform",
      services: ["Personal Development Marketing", "Website Development", "Content Strategy", "Digital Transformation"],
      description: "Personal development and transformation services platform making huge difference",
      results: "Expanded reach and transformation impact",
      color: "bg-gradient-to-br from-blue-600 to-green-500",
    },
    {
      id: 18,
      name: "Tap Savvy",
      logo: "/clients/tap-savvy.jpeg",
      category: "technology",
      industry: "Digital Technology Solutions",
      services: ["Brand Development", "Digital Marketing", "Technology Promotion", "B2B Services"],
      description: "Modern technology solutions provider offering innovative digital services",
      results: "Enhanced brand presence and client acquisition",
      color: "bg-gradient-to-br from-blue-500 to-gray-700",
    },
    {
      id: 19,
      name: "Growfact",
      logo: "/clients/growfact.jpeg",
      category: "business",
      industry: "Growth & Development Services",
      services: ["Business Development Marketing", "Growth Strategy Promotion", "Content Marketing", "Brand Building"],
      description: "Comprehensive growth and development services - something for everyone",
      results: "Expanded service reach and client base",
      color: "bg-gradient-to-br from-orange-500 to-green-500",
    },
    {
      id: 20,
      name: "Money Plant Investors",
      logo: "/clients/money-plant-investors.jpeg",
      category: "business",
      industry: "Investment Services",
      services: ["Financial Marketing", "Investment Promotion", "Client Acquisition", "Trust Building Content"],
      description: "Professional investment services helping clients grow their financial portfolio",
      results: "Increased investor confidence and portfolio growth",
      color: "bg-gradient-to-br from-green-500 to-black",
    },

    // Agriculture & Export
    {
      id: 21,
      name: "Shabdratna",
      logo: "/clients/shabdratna.png",
      category: "agriculture",
      industry: "Media & Audio Services",
      services: ["Content Marketing", "Audio Services Promotion", "Brand Development", "Creative Marketing"],
      description: "Premium audio content creation and professional voice-over services",
      results: "Enhanced brand recognition and service bookings",
      color: "bg-gradient-to-br from-orange-500 to-red-500",
    },
    {
      id: 22,
      name: "Dr. Agro India",
      logo: "/clients/dr-agro-india.jpeg",
      category: "agriculture",
      industry: "Agriculture Services",
      services: ["Digital Marketing", "Agricultural Content", "SEO", "Farmer Outreach"],
      description: "Largest agriculture service provider offering comprehensive farming solutions",
      results: "Expanded farmer network and service adoption",
      color: "bg-gradient-to-br from-green-500 to-emerald-600",
    },
    {
      id: 23,
      name: "Bharat Agro",
      logo: "/clients/bharat-agro.jpeg",
      category: "agriculture",
      industry: "Agricultural Solutions",
      services: ["Agricultural Marketing", "Brand Development", "Digital Presence", "Farmer Education"],
      description: "Comprehensive agricultural services and innovative farming solutions provider",
      results: "Increased farmer engagement and solution adoption",
      color: "bg-gradient-to-br from-green-600 to-emerald-700",
    },
    {
      id: 24,
      name: "Sahara Agro Export",
      logo: "/clients/sahara-agro-export.jpeg",
      category: "agriculture",
      industry: "Agricultural Export",
      services: ["Export Marketing", "International Branding", "B2B Lead Generation", "Global Market Reach"],
      description: "Leading agricultural export company connecting Indian farmers to global markets",
      results: "Expanded international presence and export growth",
      color: "bg-gradient-to-br from-green-500 to-blue-500",
    },

    // Business & Consultancy
    {
      id: 25,
      name: "Excellent",
      logo: "/clients/excellent.png",
      category: "business",
      industry: "Business Consultancy",
      services: [
        "Business Consultancy Marketing",
        "Professional Branding",
        "Success Coaching Promotion",
        "Corporate Services",
      ],
      description: "Business excellence and success coaching consultancy services for growth",
      results: "Enhanced consultancy reach and client success",
      color: "bg-gradient-to-br from-purple-500 to-blue-500",
    },
    {
      id: 26,
      name: "Krishna Niti",
      logo: "/clients/krishna-niti.jpeg",
      category: "business",
      industry: "Spiritual & Cultural Services",
      services: ["Cultural Content Marketing", "Spiritual Branding", "Community Engagement", "Value-based Marketing"],
      description: "Spiritual and cultural guidance platform based on Krishna's timeless teachings",
      results: "Expanded spiritual community and engagement",
      color: "bg-gradient-to-br from-yellow-500 to-orange-600",
    },
    {
      id: 27,
      name: "Metta Matchmaking",
      logo: "/clients/metta-matchmaking.jpeg",
      category: "business",
      industry: "Matchmaking Services",
      services: ["Relationship Marketing", "Trust Building Content", "Social Media Strategy", "Community Building"],
      description: "Professional matchmaking services where values meet hearts for meaningful connections",
      results: "Increased successful matches and client satisfaction",
      color: "bg-gradient-to-br from-pink-500 to-red-500",
    },
    {
      id: 28,
      name: "Sudnyata Groups",
      logo: "/clients/sudnyata-groups.jpeg",
      category: "business",
      industry: "Business Group",
      services: ["Corporate Branding", "Multi-business Marketing", "Group Identity", "Diversified Promotion"],
      description: "Diversified business group offering multiple services and solutions",
      results: "Unified brand identity and cross-business synergy",
      color: "bg-gradient-to-br from-green-600 to-teal-700",
    },

    // Manufacturing & Construction
    {
      id: 29,
      name: "LEMI Interior Fixtures",
      logo: "/clients/lemi-interior.jpeg",
      category: "manufacturing",
      industry: "Interior Design & Fixtures",
      services: ["Interior Design Marketing", "Product Showcase", "B2B Lead Generation", "Project Portfolio"],
      description: "Professional interior fixtures and design solutions for commercial and residential spaces",
      results: "Increased project inquiries and design contracts",
      color: "bg-gradient-to-br from-blue-600 to-purple-600",
    },
    {
      id: 30,
      name: "S.S. Enterprise",
      logo: "/clients/ss-enterprise.jpeg",
      category: "manufacturing",
      industry: "Construction & Manufacturing",
      services: ["Industrial Marketing", "B2B Lead Generation", "Construction Promotion", "Manufacturer Branding"],
      description: "RCC pipe manufacturer and construction solutions provider for infrastructure projects",
      results: "Enhanced B2B partnerships and project contracts",
      color: "bg-gradient-to-br from-red-600 to-gray-700",
    },
  ]

  const filteredClients =
    activeFilter === "all" ? allClients : allClients.filter((client) => client.category === activeFilter)

  const stats = [
    { number: "33+", label: "Happy Clients", icon: <Users className="h-6 w-6" /> },
    { number: "30+", label: "Industries Served", icon: <Target className="h-6 w-6" /> },
    { number: "4X-12X", label: "Average ROI", icon: <TrendingUp className="h-6 w-6" /> },
    { number: "200+", label: "Projects Completed", icon: <Award className="h-6 w-6" /> },
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
                Our Complete Portfolio
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                33+ Success Stories Across
                <span className="gradient-text block">30+ Industries</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Discover our comprehensive portfolio showcasing diverse businesses we've helped achieve remarkable
                digital growth and success
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

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-2xl shadow-lg"
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center text-white">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                  <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
                </div>
              ))}
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
                {filter.label} ({filter.count})
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredClients.map((client) => (
                <Card key={client.id} className="border-0 shadow-xl card-hover bg-white overflow-hidden">
                  <CardContent className="p-0">
                    {/* Header with Logo */}
                    <div className={`${client.color} p-4 text-white`}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                          <Image
                            src={client.logo || "/placeholder.svg"}
                            alt={client.name}
                            width={32}
                            height={32}
                            className="object-contain"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-sm leading-tight">{client.name}</h3>
                          <p className="text-xs opacity-90">{client.industry}</p>
                        </div>
                      </div>
                      {client.results && (
                        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
                          <p className="text-xs font-medium">{client.results}</p>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-4">
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{client.description}</p>

                      <div className="space-y-3">
                        <div>
                          <h4 className="text-xs font-semibold text-gray-900 mb-2">Services Provided:</h4>
                          <div className="flex flex-wrap gap-1">
                            {client.services.slice(0, 3).map((service, index) => (
                              <Badge
                                key={index}
                                variant="outline"
                                className="text-xs px-2 py-1 text-purple-600 border-purple-200 bg-purple-50"
                              >
                                {service}
                              </Badge>
                            ))}
                            {client.services.length > 3 && (
                              <Badge
                                variant="outline"
                                className="text-xs px-2 py-1 text-gray-500 border-gray-200 bg-gray-50"
                              >
                                +{client.services.length - 3} more
                              </Badge>
                            )}
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

      {/* Industry Breakdown */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Industries We Serve</h2>
              <p className="text-xl text-gray-600">Diverse expertise across multiple sectors</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                    <GraduationCap className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Education & Training</h3>
                  <p className="text-3xl font-bold gradient-text mb-2">12</p>
                  <p className="text-gray-600 text-sm">Schools, Institutes, Coaching Centers</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                    <Building2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Technology & Business</h3>
                  <p className="text-3xl font-bold gradient-text mb-2">8</p>
                  <p className="text-gray-600 text-sm">Tech Companies, Digital Services</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                    <Leaf className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Agriculture & Export</h3>
                  <p className="text-3xl font-bold gradient-text mb-2">4</p>
                  <p className="text-gray-600 text-sm">Agro Services, Export Companies</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                    <Briefcase className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Business Services</h3>
                  <p className="text-3xl font-bold gradient-text mb-2">5</p>
                  <p className="text-gray-600 text-sm">Consultancy, Investment, Matchmaking</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                    <Factory className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Manufacturing</h3>
                  <p className="text-3xl font-bold gradient-text mb-2">4</p>
                  <p className="text-gray-600 text-sm">Construction, Interior, Manufacturing</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-white/90 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white">
                    <Heart className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Others</h3>
                  <p className="text-3xl font-bold gradient-text mb-2">+</p>
                  <p className="text-gray-600 text-sm">And Many More Industries</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Join Our Success Stories?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help your business achieve similar remarkable results
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="https://wa.me/918408004141">
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
