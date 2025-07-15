import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cookie, Settings, BarChart3, Shield, Eye, Phone } from "lucide-react"

export default function CookiesPage() {
  const cookieTypes = [
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Essential Cookies",
      description: "Required for basic website functionality",
      examples: ["Session management", "Security features", "Load balancing"],
      color: "bg-gradient-to-br from-green-500 to-emerald-500",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Analytics Cookies",
      description: "Help us understand how visitors use our website",
      examples: ["Google Analytics", "Page views", "User behavior"],
      color: "bg-gradient-to-br from-blue-500 to-cyan-500",
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Marketing Cookies",
      description: "Used to deliver relevant advertisements",
      examples: ["Facebook Pixel", "Google Ads", "Retargeting"],
      color: "bg-gradient-to-br from-purple-500 to-pink-500",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-purple-100 text-purple-700">
              <Cookie className="w-4 h-4 mr-2" />
              Cookie Policy
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Cookie
              <span className="gradient-text block">Policy</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Learn about how we use cookies to improve your experience on our website and provide better services.
            </p>
          </div>
        </div>
      </section>

      {/* What Are Cookies */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-orange-50 to-red-50 mb-12">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center text-white">
                    <Cookie className="h-8 w-8" />
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">What Are Cookies?</h2>
                    <p className="text-gray-600">Small data files stored on your device</p>
                  </div>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Cookies are small text files that are stored on your computer or mobile device when you visit our
                  website. They help us provide you with a better experience by remembering your preferences and
                  analyzing how you use our site.
                </p>
              </CardContent>
            </Card>

            {/* Cookie Types */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {cookieTypes.map((type, index) => (
                <Card key={index} className="border-0 shadow-xl card-hover">
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 ${type.color} rounded-xl flex items-center justify-center mb-4 text-white`}
                    >
                      {type.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{type.title}</h3>
                    <p className="text-gray-600 mb-4">{type.description}</p>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Examples:</h4>
                      <ul className="space-y-1">
                        {type.examples.map((example, exampleIndex) => (
                          <li key={exampleIndex} className="text-sm text-gray-600 flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* How We Use Cookies */}
            <Card className="border-0 shadow-xl mb-12">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">How We Use Cookies</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Website Functionality</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Remember your preferences and settings</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Keep you logged in during your session</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Ensure website security and prevent fraud</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Analytics & Improvement</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Analyze website traffic and user behavior</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Improve our services and user experience</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">Measure the effectiveness of our marketing</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Managing Cookies */}
            <Card className="border-0 shadow-xl mb-12">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center text-white">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Managing Your Cookie Preferences</h3>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  You have control over cookies and can manage them through your browser settings. However, please note
                  that disabling certain cookies may affect the functionality of our website.
                </p>
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-3">Browser Settings</h4>
                  <p className="text-gray-600 text-sm">
                    Most browsers allow you to view, manage, and delete cookies. You can usually find these options in
                    your browser's privacy or security settings. For specific instructions, please refer to your
                    browser's help documentation.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Section */}
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Phone className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Questions About Cookies?</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  If you have any questions about our use of cookies or this Cookie Policy, please don't hesitate to
                  contact us.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:info.suprimotech@gmail.com"
                    className="text-orange-400 hover:text-orange-300 font-semibold"
                  >
                    info.suprimotech@gmail.com
                  </a>
                  <span className="text-gray-400 hidden sm:block">|</span>
                  <a href="tel:+919403362424" className="text-orange-400 hover:text-orange-300 font-semibold">
                    +91 9403 36 2424
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
