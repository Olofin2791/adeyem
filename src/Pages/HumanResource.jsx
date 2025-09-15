"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/Button"
import { Card, CardContent } from "@/components/ui/Card"
import { Link } from "react-router-dom"; // remove if not using React Router

import { Badge } from "@/components/ui/Badge"
import {
  ChevronLeft,
  ChevronRight,
  Users,
  Target,
  Award,
  Handshake,
  CheckCircle,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Menu,
  X,
  ChevronDown,
} from "lucide-react"

const carouselSlides = [
  {
    title: "Transform Your Workforce",
    subtitle: "Strategic HR Solutions for Modern Businesses",
    description:
      "Unlock your organization's potential with our comprehensive talent management and HR consulting services.",
    image: "https://res.cloudinary.com/dang2kjfr/image/upload/v1757612392/premium_photo-1683140546178-3f52a918bc57_beih1e.jpg",
  },
  {
    title: "Expert Talent Acquisition",
    subtitle: "Find the Right People for Your Success",
    description: "Our proven recruitment strategies connect you with top-tier talent that drives business growth.",
    image: "https://res.cloudinary.com/dang2kjfr/image/upload/v1757612494/360_F_249073153_HmszwE91KwSURMx8AZfmmcMJmyEjwXR3_ndszm6.jpg",
  },
  {
    title: "HR Excellence Delivered",
    subtitle: "Streamline Operations, Maximize Performance",
    description: "From compliance to culture building, we provide end-to-end HR solutions tailored to your needs.",
    image: "https://res.cloudinary.com/dang2kjfr/image/upload/v1757613023/images_ylflam.jpg",
  },
]

const services = [
  {
    icon: Users,
    title: "Talent Acquisition & Workforce Development",
    description:
      "Strategic recruitment and selection processes to find the perfect candidates for your organization.",
    slug: "talent-acquisition",
    path: "/services/talent-acquisition",
    backgroundImage: "https://res.cloudinary.com/dang2kjfr/image/upload/v1757612392/premium_photo-1683140546178-3f52a918bc57_beih1e.jpg",
  },
  {
    icon: Target,
    title: "Branding and Media",
    description:
      "Comprehensive systems to track, evaluate, and enhance employee performance and productivity.",
    slug: "branding-media",
    path: "/services/branding-media",
    backgroundImage: "https://res.cloudinary.com/dang2kjfr/image/upload/v1757612494/360_F_249073153_HmszwE91KwSURMx8AZfmmcMJmyEjwXR3_ndszm6.jpg",
  },
  {
    icon: Award,
    title: "HR Operations and Compliance",
    description:
      "Customized learning programs to upskill your workforce and drive professional growth.",
    slug: "hr-operations",
    path: "/services/hr-operations",
    backgroundImage: "https://res.cloudinary.com/dang2kjfr/image/upload/v1757613023/images_ylflam.jpg",
  },
  {
    icon: Handshake,
    title: "General Services",
    description:
      "Foster positive workplace relationships and resolve conflicts with expert mediation services.",
    slug: "general-services",
    path: "/services/general-services",
    backgroundImage: "https://res.cloudinary.com/dang2kjfr/image/upload/v1757694828/photo-1542744173-8e7e53415bb0_emewxf.avif",
  },
];


const partners = [
  { name: "TechCorp", logo: "https://res.cloudinary.com/dang2kjfr/image/upload/v1757625743/Rockwheel_unbktq.png" },
  { name: "GlobalInc", logo: "https://res.cloudinary.com/dang2kjfr/image/upload/v1757625958/Amala_u2okce.jpg" },
  { name: "InnovateLtd", logo: "https://res.cloudinary.com/dang2kjfr/image/upload/v1757626035/Femywalsh_qluouo.png" },
  { name: "FutureWorks", logo: "https://res.cloudinary.com/dang2kjfr/image/upload/v1757626112/Frany_wt04aj.jpg" },

]

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState({})
  const navigate = useNavigate()
  const [open, setOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = document.querySelectorAll("[data-animate]")
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length)
  }

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src="https://res.cloudinary.com/dang2kjfr/image/upload/v1757710050/1757708375432-removebg-preview_igl56t.png"
              alt="Adeyem Imperial Enterprise"
              className="w-12 h-12 rounded-lg"
            />
            {/* <span className="text-xl font-bold text-foreground">Adeyem Imperial Enterprise</span> */}
          </div>

          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          
         <nav className="hidden md:flex items-center space-x-8 relative">
      <a href="#home" className="text-foreground hover:text-primary transition-colors">
        Home
      </a>

     <Link to="/about" className="text-foreground hover:text-primary transition-colors">
  About
</Link>
      {/* Services Dropdown */}
      <div className="relative">
        <button
          className="text-foreground hover:text-primary transition-colors flex items-center"
          onClick={() => setOpen(!open)}
        >
          Services
          <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${open ? "rotate-180" : "rotate-0"}`} />
        </button>

        {open && (
          <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg py-2 z-20">
            {services.map((service) => (
              <Link
                key={service.slug}
                to={service.path}
                className="flex items-center px-4 py-2 text-sm text-foreground hover:bg-gray-100"
                onClick={() => setOpen(false)}
              >
                <service.icon className="h-4 w-4 mr-2 text-primary" />
                {service.title}
              </Link>
            ))}
          </div>
        )}
      </div>

      <Link to="/our-team" className="text-foreground hover:text-primary transition-colors">
        Our Team
      </Link>

    <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
    Contact
  </Link>
    </nav>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <a href="#home" className="block text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Home
              </a>
              <Link to="/about" className="block text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <div className="space-y-2">
                <button
                  className="block text-foreground hover:text-primary transition-colors w-full text-left"
                  onClick={() => setOpen(!open)}
                >
                  Services
                  <ChevronDown className={`ml-2 h-4 w-4 inline transition-transform ${open ? "rotate-180" : "rotate-0"}`} />
                </button>
                {open && (
                  <div className="pl-4 space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.slug}
                        to={service.path}
                        className="block text-sm text-foreground hover:text-primary"
                        onClick={() => { setOpen(false); setMobileMenuOpen(false); }}
                      >
                        <service.icon className="h-4 w-4 mr-2 inline" />
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link to="/our-team" className="block text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Our Team
              </Link>
              <Link to="/contact" className="block text-foreground hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
            </nav>
          </div>
        )}
          </header>
    

      {/* Hero Section with Carousel */}
      <section
        id="home"
        className="relative h-screen overflow-hidden bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${carouselSlides[currentSlide].image})`,
        }}
      >
        <div className="absolute inset-0 bg-black/75 z-10"></div>

        <div className="relative h-full flex items-center z-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white space-y-8">
              <h1
                className="text-5xl md:text-7xl font-bold text-balance animate-fade-in-up text-white drop-shadow-2xl"
                style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)" }}
              >
                {carouselSlides[currentSlide].title}
              </h1>
              <h2
                className="text-2xl md:text-3xl text-white animate-fade-in-up font-medium drop-shadow-lg"
                style={{ animationDelay: "0.2s", textShadow: "1px 1px 6px rgba(0,0,0,0.8)" }}
              >
                {carouselSlides[currentSlide].subtitle}
              </h2>
              <p
                className="text-xl md:text-2xl text-white text-pretty animate-fade-in-up max-w-3xl mx-auto drop-shadow-lg"
                style={{ animationDelay: "0.4s", textShadow: "1px 1px 4px rgba(0,0,0,0.8)" }}
              >
                {carouselSlides[currentSlide].description}
              </p>
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
                style={{ animationDelay: "0.6s" }}
              >
                <Button
                  size="lg"
                  onClick={(e) => handleSmoothScroll(e, "services")}
                  className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-4 shadow-2xl"
                >
                  Explore Services <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={(e) => handleSmoothScroll(e, "about")}
                  className="border-2 border-white text-white hover:bg-white hover:text-primary bg-transparent text-lg px-8 py-4 shadow-2xl backdrop-blur-sm"
                  style={{ textShadow: "1px 1px 4px rgba(0,0,0,0.6)" }}

                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all backdrop-blur-sm shadow-lg z-30"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all backdrop-blur-sm shadow-lg z-30"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
          {carouselSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all ${
                index === currentSlide ? "bg-white scale-110" : "bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Welcome Section */}
    {/* Welcome Section */}
<section className="py-20 bg-card">
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-6 items-center"> {/* reduced gap from 12 to 6 */}

      {/* Left Column - Image */}
      <div data-aos="fade-right" className="flex justify-center">
        <img
          src="https://res.cloudinary.com/dang2kjfr/image/upload/v1757694828/photo-1542744173-8e7e53415bb0_emewxf.avif"
          alt="Adeyem Imperial Enterprise"
          className="rounded-lg shadow-lg max-w-full h-auto transform scale-x-[-1]"
        />
      </div>

      {/* Right Column - Text */}
      <div id="welcome" data-aos="fade-left" className="space-y-6 text-center md:text-left">
        <Badge
          variant="secondary"
          className="text-sm px-4 py-2 bg-[#FFD1DC] text-[#4169E1] font-semibold rounded-md shadow-sm"
        >
          Welcome to
        </Badge>

        <h2 className="text-4xl md:text-5xl font-bold text-card-foreground leading-tight">
          Adeyem Imperial <br /> Enterprise
        </h2>

        <p className="text-xl text-muted-foreground max-w-2xl">
          For over a decade, we've been helping organizations build stronger,
          more effective teams. Our comprehensive HR solutions are designed to
          meet the unique challenges of modern businesses.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mt-8"> {/* reduced gap from 6 to 4 */}
          <div className="text-center md:text-left">
            <div className="text-3xl font-bold text-primary">500+</div>
            <div className="text-muted-foreground">Companies Served</div>
          </div>
          <div className="text-center md:text-left">
            <div className="text-3xl font-bold text-primary">10K+</div>
            <div className="text-muted-foreground">Successful Placements</div>
          </div>
          <div className="text-center md:text-left">
            <div className="text-3xl font-bold text-primary">98%</div>
            <div className="text-muted-foreground">Client Satisfaction</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>


      {/* About Section */}
{/* <section
id="about"
className="py-20 relative bg-cover bg-center bg-no-repeat"
style={{
  backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url(https://res.cloudinary.com/dang2kjfr/image/upload/v1757694596/photo-1551135049-8a33b5883817_gcvfq7.avif)`,
}}
>


  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center">
      <div id="about-content" className="space-y-8">
        <Badge variant="outline" className="text-sm  bg-[#FFD1DC] text-[#4169E1] px-4 py-2" data-aos="fade-down">
          About Us
        </Badge>
        <h2
          className="text-4xl md:text-5xl font-bold text-foreground text-balance drop-shadow-sm"
          data-aos="fade-up"
        >
          Empowering Organizations Through People
        </h2>
        <p
          className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          We derive pleasure in building people operations that help organizations scale with confidence. 
          We’ve partnered with startups, corporate teams, and global organizations to recruit and design 
          HR infrastructures that balance efficiency, compliance, and culture. 
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div
          className="bg-background/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border-2 border-blue-500 
                    transition-all duration-300 hover:bg-[#FFD1DC] hover:border-[#4169E1]"
          data-aos="zoom-in"
        >
            <CheckCircle className="w-8 h-8 text-primary mx-auto mb-4" />
            <h1 className="font-semibold text-foreground text-lg mb-2">Our Mission</h1>
            <p className="text-muted-foreground text-justify">
              At Adeyem Imperial Enterprise, our mission is to build and empower people operations
              that enable organizations to scale confidently...
            </p>
          </div>

          <div
            className="bg-background/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border-2 border-blue-500 
                      transition-all duration-300 hover:bg-[#FFD1DC] hover:border-[#4169E1]"
            data-aos="zoom-in"
          >
            <CheckCircle className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-foreground text-lg mb-2">Our Vision</h3>
            <p className="text-muted-foreground text-justify">
              To be a trusted partner in transforming workplaces into vibrant...
            </p>
          </div>

          <div
            className="bg-background/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border-2 border-blue-500 
                      transition-all duration-300 hover:bg-[#FFD1DC] hover:border-[#4169E1]"
            data-aos="zoom-in"
          >
            <CheckCircle className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-foreground text-lg mb-2">Core Values</h3>
            <p className="text-muted-foreground text-justify">
              Our core value is RACIE <br />
              • R - Respect <br />
              • A - Accountability <br />
              • C - Collaboration <br />
              • I - Integrity & Innovation <br />
              • E - Excellence
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}


     {/* Brand Philosophy */}
<section className="py-20 bg-card">
  <div className="container mx-auto px-4">
    <div
      id="philosophy"
      data-aos="fade-up"
      data-aos-duration="1000"
      className={`text-center space-y-12 ${isVisible.philosophy ? "animate-fade-in-up" : "opacity-0"}`}
    >
      <div className="space-y-4">
        <Badge
          variant="secondary"
          className="text-4xl font-bold px-6 py-3 bg-white/80 backdrop-blur-sm text-primary shadow-md"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          Our Brand Philosophy
        </Badge>
        <p
          className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          We believe that great businesses are built by great people. Our philosophy centers on creating
          environments where both organizations and individuals can thrive together.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <Card
          className="border border-border shadow-lg hover:shadow-2xl transition-all duration-500 bg-[#001F54] hover:bg-[#FFD1DC] transform hover:-translate-y-3 hover:scale-105"
          data-aos="fade-right"
          data-aos-delay="600"
        >
          <CardContent className="p-8 text-center space-y-4 transition-colors duration-500">
            <h3 className="text-3xl font-bold text-[#FFD1DC] group-hover:text-[#001F54] transition-colors">
              Human-Centered
            </h3>
            <p className="text-[#FFD1DC] text-2xl font-bold group-hover:text-[#001F54] transition-colors">
              "Every decision we make puts people at the center, ensuring solutions that work for everyone."
            </p>
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card
          className="border border-border shadow-lg hover:shadow-2xl transition-all duration-500 bg-[#FFD1DC] hover:bg-[#001F54] transform hover:-translate-y-3 hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          <CardContent className="p-8 text-center space-y-4 transition-colors duration-500">
            <h3 className="text-3xl font-bold text-[#001F54] group-hover:text-[#FFD1DC] transition-colors">
              Results-Driven
            </h3>
            <p className="text-[#001F54] text-2xl font-bold group-hover:text-[#FFD1DC] transition-colors">
              We focus on measurable outcomes that drive real business value and employee satisfaction.
            </p>
          </CardContent>
        </Card>

        {/* Card 3 */}
        <Card
          className="border border-border shadow-lg hover:shadow-2xl transition-all duration-500 bg-[#001F54] hover:bg-[#FFD1DC] transform hover:-translate-y-3 hover:scale-105"
          data-aos="fade-left"
          data-aos-delay="1000"
        >
          <CardContent className="p-8 text-center space-y-4 transition-colors duration-500">
            <h3 className="text-3xl font-bold text-[#FFD1DC] group-hover:text-[#001F54] transition-colors">
              Excellence
            </h3>
            <p className="text-[#FFD1DC] text-2xl font-bold group-hover:text-[#001F54] transition-colors">
              We maintain the highest standards in everything we do, from consultation to implementation.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</section>


      {/* Services Section */}
      <section
        id="services"
        className="py-20 relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(/diverse-professional-team-collaboration.jpg)`,
        }}
      >
        <div className="container mx-auto px-4">
          <div
            id="services-header"
            data-animate
            className={`text-center space-y-6 mb-16 ${isVisible["services-header"] ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <Badge
              variant="outline"
              className="text-sm px-6 py-3 bg-background/20 text-white border-white/30 backdrop-blur-sm"
            >
              What we do
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white text-balance drop-shadow-lg">
              Comprehensive HR Solutions
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto text-pretty drop-shadow-md">
              From talent acquisition to performance management, we offer a full suite of HR services designed to
              optimize your workforce and drive business success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                id={`service-${index}`}
                data-animate
                className={`relative border border-border shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-4 hover:scale-105 overflow-hidden ${
                  isVisible[`service-${index}`] ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  backgroundImage: `url(${service.backgroundImage})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="absolute inset-0 bg-black/40 hover:bg-black/30 transition-all duration-500"></div>
                <CardContent className="relative p-8 text-center space-y-4 text-white">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <p className="text-white/90 text-pretty">{service.description}</p>
                  <Button
                    variant="ghost"
                    className="text-white hover:text-white/80 hover:bg-white/10 border border-white/30"
                    onClick={() => navigate(service.path)}
                  >
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section
        id="partners"
        className="py-20 relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9)), url(/modern-hr-office-with-professional-consultants.jpg)`,
        }}
      >
        <div className="container mx-auto px-4">
          <div
            id="partners-header"
            data-animate
            className={`text-center space-y-6 mb-16 ${isVisible["partners-header"] ? "animate-fade-in-up" : "opacity-0"}`}
          >
            <Badge
              variant="secondary"
              className="text-sm px-4 py-2 bg-secondary/90 text-secondary-foreground backdrop-blur-sm"
            >
              Our Partners
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-card-foreground text-balance drop-shadow-sm">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
              We're proud to partner with forward-thinking organizations across various industries, helping them build
              exceptional teams and workplace cultures.
            </p>
          </div>
<div
  id="partners-grid"
  data-animate
  className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 justify-center items-center ${
    isVisible["partners-grid"] ? "animate-fade-in-up" : "opacity-0"
  }`}
>
  {partners.map((partner, index) => (
    <div
      key={index}
      className="flex items-center justify-center p-6 bg-white rounded-lg border-2 border-[#4169E1] shadow-md hover:shadow-xl transition-all"
    >
        <img
          src={partner.logo || "/placeholder.svg"}
          alt={partner.name}
          className="max-h-28 w-auto object-contain transition-transform duration-300 hover:scale-110"
        />
    </div>
            ))}
          </div>
        </div>
      </section>

     
      {/* <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div
              id="contact-info"
              data-animate
              className={`space-y-8 ${isVisible["contact-info"] ? "animate-slide-in-left" : "opacity-0"}`}
            >
              <div className="space-y-4">
                <Badge variant="outline" className="text-sm px-4 py-2">
                  Get in Touch
                </Badge>
                <h2 className="text-4xl font-bold text-foreground text-balance">Ready to Transform Your HR?</h2>
                <p className="text-lg text-muted-foreground text-pretty">
                  Let's discuss how we can help you build a stronger, more effective organization. Contact us today for
                  a consultation.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">contact@hrexcellence.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Office</h3>
                    <p className="text-muted-foreground">
                      123 Business Ave, Suite 100
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Card
              id="contact-form"
              data-animate
              className={`border border-border shadow-lg bg-background ${isVisible["contact-form"] ? "animate-slide-in-right" : "opacity-0"}`}
            >
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-input"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-input"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-input"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Company</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-input"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-input"
                      placeholder="Tell us about your HR needs..."
                    ></textarea>
                  </div>

                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary-foreground rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xl font-bold">Adeyem Enterprise</span>
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
                  <a href="#" className="hover:text-secondary transition-colors">
                    Talent Acquisition
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary transition-colors">
                    Performance Management
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary transition-colors">
                    Training & Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-secondary transition-colors">
                    Employee Relations
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Company</h3>
              <ul className="space-y-2 text-primary-foreground/80">
                <li>
                  <a href="#" className="hover:text-secondary transition-colors">
                    About Us
                  </a>
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
                <li>No 23 Babatunde Ladega Street Omole Phase One </li>
                <li>Ikeja lagos, Nigeria1</li>
                <li>+2347033605723</li>
                <li>info.adeyemimperial@gmail.com</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60">
            <p>&copy; 2024 HRExcellence. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
