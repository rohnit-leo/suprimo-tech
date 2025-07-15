import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, MessageCircle, Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  const services = [
    "Social Media Marketing",
    "SEO & SEM",
    "Google & Meta Ads",
    "Website Development",
    "Branding & Design",
    "AI Automation",
  ]

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
  ]

  const industries = ["Healthcare", "Education", "E-commerce", "Real Estate", "Fitness", "Technology"]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-8">
              <Image src="/logo-colored.png" alt="Suprimo Tech Logo" width={200} height={60} className="h-12 w-auto" />
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed text-lg">
              AI-powered digital marketing agency helping businesses scale online with data-driven strategies and
              innovative solutions.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                  <MapPin className="h-5 w-5" />
                </div>
                <span className="text-gray-300">Chhatrapati Sambhajinagar, Maharashtra</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Phone className="h-5 w-5" />
                </div>
                <span className="text-gray-300">+91 9403 36 2424</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Mail className="h-5 w-5" />
                </div>
                <span className="text-gray-300">info.suprimotech@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-8 gradient-text">Our Services</h4>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href="/services"
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-8 gradient-text">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <h5 className="font-bold mb-4 text-white">Industries We Serve</h5>
              <ul className="space-y-3">
                {industries.map((industry, index) => (
                  <li key={index} className="text-gray-400 text-sm flex items-center">
                    <span className="w-1.5 h-1.5 bg-gray-500 rounded-full mr-3"></span>
                    {industry}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA & Social */}
          <div>
            <h4 className="text-xl font-bold mb-8 gradient-text">Get Started Today</h4>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Ready to scale your business? Get your free strategy consultation now.
            </p>
            <div className="space-y-4">
              <Link href="/contact">
                <Button className="w-full btn-gradient text-white font-semibold py-3 rounded-xl shadow-lg">
                  Get Free Consultation
                </Button>
              </Link>
              <a href="https://wa.me/919403362424" target="_blank" rel="noopener noreferrer" className="block">
                <Button
                  variant="outline"
                  className="w-full border-2 border-green-500/30 text-green-400 hover:bg-green-500/10 bg-transparent font-semibold py-3 rounded-xl"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </Button>
              </a>
            </div>

            <div className="mt-10">
              <h5 className="font-bold mb-6 text-white">Follow Us</h5>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-200 shadow-lg"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gradient-to-br from-pink-600 to-purple-600 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-200 shadow-lg"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gradient-to-br from-blue-700 to-blue-800 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-200 shadow-lg"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center hover:scale-110 transition-transform duration-200 shadow-lg"
                >
                  <Twitter className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">© 2025 Suprimo Tech. All rights reserved.</p>
              <div className="flex items-center gap-2">
                <span className="text-gray-400 text-sm">|</span>
                <span className="text-gray-400 text-sm">Developed by</span>
                <a
                  href="https://nexturex.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 hover:from-purple-300 hover:via-blue-300 hover:to-cyan-300 font-bold text-sm transition-all duration-300 hover:scale-105 transform"
                >
                  NextureX
                </a>
              </div>
            </div>
            <div className="flex space-x-8">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
