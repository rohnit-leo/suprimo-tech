import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, Scale, Shield, AlertTriangle, CheckCircle, Phone } from "lucide-react"

export default function TermsPage() {
  const sections = [
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Acceptance of Terms",
      content: [
        "By accessing our website or using our services, you agree to these terms",
        "These terms apply to all visitors, users, and customers",
        "We may update these terms periodically with notice",
        "Continued use constitutes acceptance of updated terms",
      ],
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Services Description",
      content: [
        "Digital marketing strategy and implementation",
        "Social media management and advertising",
        "Search engine optimization and marketing",
        "Website development and maintenance",
        "Branding and creative design services",
      ],
    },
    {
      icon: <Scale className="h-6 w-6" />,
      title: "User Responsibilities",
      content: [
        "Provide accurate and complete information",
        "Maintain confidentiality of account credentials",
        "Use services in compliance with applicable laws",
        "Respect intellectual property rights",
      ],
    },
    {
      icon: <AlertTriangle className="h-6 w-6" />,
      title: "Limitations and Disclaimers",
      content: [
        "Services provided 'as is' without warranties",
        "Results may vary based on market conditions",
        "We are not liable for third-party platform changes",
        "Liability limited to the amount paid for services",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-purple-100 text-purple-700">
              <Scale className="w-4 h-4 mr-2" />
              Terms of Service
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Terms of
              <span className="gradient-text block">Service</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Please read these terms carefully before using our services. They govern your relationship with Suprimo
              Tech.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <Card className="border-0 shadow-xl bg-gradient-to-br from-green-50 to-blue-50">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center text-white">
                      <FileText className="h-6 w-6" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">Effective Date</h2>
                      <p className="text-gray-600">January 2025</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    These Terms of Service constitute a legally binding agreement between you and Suprimo Tech regarding
                    your use of our services.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-8">
              {sections.map((section, index) => (
                <Card key={index} className="border-0 shadow-xl card-hover">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-white">
                        {section.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
                    </div>
                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Terms */}
            <Card className="mt-12 border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Payment and Cancellation</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Payment Terms</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Payment due as per agreed schedule</li>
                      <li>• Late payments may incur additional charges</li>
                      <li>• All prices are in Indian Rupees (INR)</li>
                      <li>• Taxes applicable as per Indian law</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Cancellation Policy</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• 30-day notice required for cancellation</li>
                      <li>• Refunds subject to work completed</li>
                      <li>• Setup fees are non-refundable</li>
                      <li>• Final deliverables provided upon payment</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Section */}
            <Card className="mt-12 border-0 shadow-2xl bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Questions About Terms?</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us for clarification.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:info.suprimotech@gmail.com"
                    className="text-orange-400 hover:text-orange-300 font-semibold"
                  >
                    info.suprimotech@gmail.com
                  </a>
                  <span className="text-gray-400 hidden sm:block">|</span>
                  <a href="tel:840-800-4141" className="text-orange-400 hover:text-orange-300 font-semibold">
                    840-800-4141
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
