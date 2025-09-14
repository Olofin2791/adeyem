import { useParams, Link } from "react-router-dom"
import React, { useState } from "react";
import { Button } from "@/components/ui/Button"
import { Card, CardContent } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import {
  ArrowLeft,
  Users,
  Target,
  Award,
  Handshake,
  CheckCircle,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react"

const services = [
  {
    icon: Users,
    title: "Talent Acquisition & Workforce Development",
    description:
      "Strategic recruitment and selection processes to find the perfect candidates for your organization.",
    slug: "talent-acquisition",
    path: "/services/talent-acquisition",
     headerBg: "https://res.cloudinary.com/dang2kjfr/image/upload/v1757613023/images_ylflam.jpg",
    details: {
      overview: "Our Talent Acquisition & Workforce Development services focus on identifying, attracting, and onboarding top talent while fostering continuous professional growth. We implement comprehensive strategies that align with your organizational goals and culture.",
      features: [
        "Strategic recruitment planning",
        "Candidate sourcing and screening",
        "Interview process management",
        "Onboarding and integration programs",
        "Professional development workshops",
        "Career progression planning",
        "Skills gap analysis",
        "Training program design"
      ],
      benefits: [
        "Reduced time-to-hire",
        "Higher quality candidates",
        "Improved employee retention",
        "Enhanced workforce capabilities",
        "Better cultural fit",
        "Increased productivity"
      ]
    }
  },
  {
    icon: Target,
    title: "Branding and Media",
    description:
      "Comprehensive systems to track, evaluate, and enhance employee performance and productivity.",
    slug: "branding-media",
    path: "/services/branding-media",
     headerBg: "https://res.cloudinary.com/dang2kjfr/image/upload/v1757612392/premium_photo-1683140546178-3f52a918bc57_beih1e.jpg",
    details: {
      overview: "Our Branding and Media services help organizations build strong brand identities and leverage media channels effectively. We create compelling narratives and visual identities that resonate with your target audience and drive business growth.",
      features: [
        "Brand strategy development",
        "Logo and visual identity design",
        "Content creation and management",
        "Social media strategy",
        "Digital marketing campaigns",
        "Public relations support",
        "Media relations management",
        "Brand monitoring and analytics"
      ],
      benefits: [
        "Stronger brand recognition",
        "Improved market positioning",
        "Increased customer engagement",
        "Enhanced brand loyalty",
        "Better ROI on marketing spend",
        "Competitive advantage"
      ]
    }
  },
  {
    icon: Award,
    title: "HR Operations and Compliance",
    description:
      "Customized learning programs to upskill your workforce and drive professional growth.",
    slug: "hr-operations",
    path: "/services/hr-operations",
     headerBg: "https://res.cloudinary.com/dang2kjfr/image/upload/v1757612494/360_F_249073153_HmszwE91KwSURMx8AZfmmcMJmyEjwXR3_ndszm6.jpg",
    details: {
      overview: "Our HR Operations and Compliance services ensure your organization maintains legal compliance while optimizing HR processes. We streamline operations, implement best practices, and provide ongoing support to keep your HR function running smoothly.",
      features: [
        "HR policy development",
        "Compliance auditing",
        "Employee handbook creation",
        "HRIS implementation",
        "Process optimization",
        "Regulatory compliance monitoring",
        "Risk assessment and mitigation",
        "HR metrics and reporting"
      ],
      benefits: [
        "Legal compliance assurance",
        "Streamlined HR processes",
        "Reduced operational costs",
        "Improved decision making",
        "Enhanced employee experience",
        "Risk mitigation"
      ]
    }
  },
  {
    icon: Handshake,
    title: "General Services",
    description:
      "Foster positive workplace relationships and resolve conflicts with expert mediation services.",
    slug: "general-services",
    path: "/services/general-services",
     headerBg: "https://res.cloudinary.com/dang2kjfr/image/upload/v1757612392/premium_photo-1683140546178-3f52a918bc57_beih1e.jpg",
    details: {
      overview: "Our General Services encompass a wide range of HR support functions designed to maintain a positive work environment and address various organizational needs. From conflict resolution to organizational development, we provide comprehensive support.",
      features: [
        "Employee relations management",
        "Conflict resolution and mediation",
        "Workplace investigations",
        "Organizational development",
        "Change management support",
        "Employee engagement surveys",
        "Workplace culture assessment",
        "Diversity and inclusion initiatives"
      ],
      benefits: [
        "Positive workplace culture",
        "Reduced workplace conflicts",
        "Higher employee satisfaction",
        "Improved retention rates",
        "Better team collaboration",
        "Enhanced organizational health"
      ]
    }
  },
]

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find(s => s.slug === slug)
  const [open, setOpen] = useState(false);

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-foreground">Service Not Found</h1>
          <p className="text-muted-foreground">The requested service could not be found.</p>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Adeyem Imperial Enterprise</span>
          </div>
           <nav className="hidden md:flex items-center space-x-8 relative">
      <Link to="/" className="text-foreground hover:text-primary transition-colors">
        Home
      </Link>

      <Link to="/about" className="text-foreground hover:text-primary transition-colors">
        About
      </Link>

      {/* Services Dropdown */}
      <div
        className="relative group"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(true)}
      >
        <button
          className="text-foreground hover:text-primary transition-colors flex items-center"
        >
          Services
          <svg
            className={`ml-2 h-4 w-4 transition-transform ${
              open ? "rotate-180" : "rotate-0"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {open && (
          <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-2 z-20">
            {services.map((service) => (
              <Link
                key={service.slug}
                to={service.path}
                className="flex items-center px-4 py-2 text-sm text-foreground hover:bg-gray-100"
              >
                <service.icon className="h-4 w-4 mr-2 text-primary" />
                {service.title}
              </Link>
            ))}
          </div>
        )}
      </div>

      <Link to="/partners" className="text-foreground hover:text-primary transition-colors">
        Partners
      </Link>

      <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
        Contact
      </Link>
    </nav>
          <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">Get Started</Button>
        </div>
      </header>

      {/* Service Detail Section */}
      <section className="py-20 bg-card">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
      {/* Back Button (outside background) */}
      <Link
        to="/"
        className="inline-flex items-center text-primary hover:text-primary/80 mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Services
      </Link>

      {/* Service Header with Background */}
      <div
        className="text-center space-y-6 mb-12 py-16 px-6 rounded-2xl bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url(${service.headerBg})`,
        }}
      >
        <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto shadow-md">
          <service.icon className="w-10 h-10 text-primary" />
        </div>
        <Badge
          variant="secondary"
          className="text-sm px-4 py-2 bg-white/20 text-white border-white/40"
        >
          Service Detail
        </Badge>
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
          {service.title}
        </h1>
        <p className="text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
          {service.description}
        </p>
      </div>
            {/* Service Overview */}
            <Card className="mb-8">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Overview</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {service.details.overview}
                </p>
              </CardContent>
            </Card>

            {/* Features and Benefits */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card >
    <CardContent className="p-8">
      <h3
        className="text-xl font-bold text-foreground mb-6 flex items-center"
        data-aos="fade-right"
        data-aos-duration="800"
      >
        <CheckCircle className="w-6 h-6 text-primary mr-2" />
        Key Features
      </h3>

      <ul className="space-y-3">
        {service.details.features.map((feature, index) => (
          <li
            key={index}
            className="flex items-start"
            data-aos="fade-up"
            data-aos-delay={index * 150} // stagger each feature
            data-aos-duration="700"
          >
            <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>

              <Card>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                    <Award className="w-6 h-6 text-primary mr-2" />
                    Benefits
                  </h3>
                  <ul className="space-y-3">
                    {service.details.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* CTA Section */}
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-primary-foreground/90 mb-6">
                  Contact us today to discuss how we can help you implement this service in your organization.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Contact Us
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                    onClick={() => window.location.href = 'tel:+15551234567'}
                  >
                    Call Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xl font-bold">Adeyem Imperial Enterprise</span>
              </div>
              <p className="text-primary-foreground/80 text-pretty">
                Empowering organizations through strategic HR solutions and exceptional talent management.
              </p>
              <div className="flex space-x-4">
                <Linkedin className="w-5 h-5 hover:text-secondary cursor-pointer transition-colors" />
                <Twitter className="w-5 h-5 hover:text-secondary cursor-pointer transition-colors" />
                <Facebook className="w-5 h-5 hover:text-secondary cursor-pointer transition-colors" />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Services</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <Link to="/services/talent-acquisition" className="hover:text-secondary transition-colors">
                    Talent Acquisition
                  </Link>
                </li>
                <li>
                  <Link to="/services/branding-media" className="hover:text-secondary transition-colors">
                    Branding and Media
                  </Link>
                </li>
                <li>
                  <Link to="/services/hr-operations" className="hover:text-secondary transition-colors">
                    HR Operations
                  </Link>
                </li>
                <li>
                  <Link to="/services/general-services" className="hover:text-secondary transition-colors">
                    General Services
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <Link to="/" className="hover:text-secondary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary transition-colors">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary transition-colors">
                    News
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Contact</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>123 Business Ave, Suite 100</li>
                <li>New York, NY 10001</li>
                <li>+1 (555) 123-4567</li>
                <li>contact@hrexcellence.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 Adeyem Imperial Enterprise. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
