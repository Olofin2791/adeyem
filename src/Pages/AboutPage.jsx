"use client"

import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"
import NavBar from "../components/NavBar"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="py-20 relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url(https://res.cloudinary.com/dang2kjfr/image/upload/v1757694596/photo-1551135049-8a33b5883817_gcvfq7.avif)`,
        }}
      >
        <NavBar/>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="text-sm bg-[#FFD1DC] text-[#4169E1] px-4 py-2 mb-6">
              About Us
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Empowering Organizations Through People
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              We derive pleasure in building people operations that help organizations scale with confidence. 
              We’ve partnered with startups, corporate teams, and global organizations to recruit and design 
              HR infrastructures that balance efficiency, compliance, and culture.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-background/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border-2 border-blue-500 transition-all hover:bg-[#FFD1DC] hover:border-[#4169E1]">
                <CheckCircle className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground text-lg mb-2">Our Mission</h3>
                <p className="text-muted-foreground text-justify">
                  At Adeyem Imperial Enterprise, our mission is to build and empower people operations
                  that enable organizations to scale confidently...
                </p>
              </div>

              <div className="bg-background/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border-2 border-blue-500 transition-all hover:bg-[#FFD1DC] hover:border-[#4169E1]">
                <CheckCircle className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground text-lg mb-2">Our Vision</h3>
                <p className="text-muted-foreground text-justify">
                  To be a trusted partner in transforming workplaces into vibrant...
                </p>
              </div>

              <div className="bg-background/90 backdrop-blur-sm p-6 rounded-lg shadow-lg border-2 border-blue-500 transition-all hover:bg-[#FFD1DC] hover:border-[#4169E1]">
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
      </section>
    </div>
  )
}
