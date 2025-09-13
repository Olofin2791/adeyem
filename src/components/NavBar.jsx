import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const services = [
  {
    icon: "Users",
    title: "Talent Acquisition & Workforce Development",
    description:
      "Strategic recruitment and selection processes to find the perfect candidates for your organization.",
    slug: "talent-acquisition",
    path: "/services/talent-acquisition",
  },
  {
    icon: "Target",
    title: "Branding and Media",
    description:
      "Comprehensive systems to track, evaluate, and enhance employee performance and productivity.",
    slug: "branding-media",
    path: "/services/branding-media",
  },
  {
    icon: "Award",
    title: "HR Operations and Compliance",
    description:
      "Customized learning programs to upskill your workforce and drive professional growth.",
    slug: "hr-operations",
    path: "/services/hr-operations",
  },
  {
    icon: "Handshake",
    title: "General Services",
    description:
      "Foster positive workplace relationships and resolve conflicts with expert mediation services.",
    slug: "general-services",
    path: "/services/general-services",
  },
]

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            src="https://res.cloudinary.com/dang2kjfr/image/upload/v1757710050/1757708375432-removebg-preview_igl56t.png"
            alt="Adeyem Imperial Enterprise"
            className="w-50 h-45 rounded-lg absolute top--1 left-0"
          />
        </div>

        {/* Desktop Nav */}
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
            onMouseLeave={() => setOpen(false)}
          >
            <button className="text-foreground hover:text-primary transition-colors flex items-center">
              Services
              <svg
                className={`ml-2 h-4 w-4 transition-transform ${open ? "rotate-180" : "rotate-0"}`}
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

          <Link to="/our-team" className="text-foreground hover:text-primary transition-colors">
            Our Team
          </Link>

          <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <Button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground hidden md:block">Get Started</Button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link to="/" className="block text-foreground hover:text-primary transition-colors" onClick={() => setMobileOpen(false)}>
              Home
            </Link>
            <Link to="/about" className="block text-foreground hover:text-primary transition-colors" onClick={() => setMobileOpen(false)}>
              About
            </Link>
            <div className="space-y-2">
              <div className="text-foreground font-medium">Services</div>
              {services.map((service) => (
                <Link
                  key={service.slug}
                  to={service.path}
                  className="block pl-4 text-sm text-muted-foreground hover:text-primary transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {service.title}
                </Link>
              ))}
            </div>
            <Link to="/our-team" className="block text-foreground hover:text-primary transition-colors" onClick={() => setMobileOpen(false)}>
              Our Team
            </Link>
            <Link to="/contact" className="block text-foreground hover:text-primary transition-colors" onClick={() => setMobileOpen(false)}>
              Contact
            </Link>
            <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">Get Started</Button>
          </div>
        </div>
      )}
    </header>
  )
