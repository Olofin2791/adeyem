import React from "react"
import { Card, CardContent } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"
import NavBar from "../components/NavBar"

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <NavBar/>
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          Get in Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left side: Contact Info */}
       <div className="grid md:grid-cols-2 gap-12">
  {/* Left side: Contact Info with background */}
  <div
    id="contact-info"
    data-aos="fade-right"
    className="relative space-y-8 p-8 rounded-lg text-white"
    style={{
      backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://res.cloudinary.com/dang2kjfr/image/upload/v1757710051/mina-rad-qFSQFSmfZkA-unsplash_geyakv.jpg')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
       minHeight: "100%",
    }}
  >
    <div className="flex items-center space-x-4">
      <Mail className="w-6 h-6 text-white" />
      <p className="text-lg">info@example.com</p>
    </div>
    <div className="flex items-center space-x-4">
      <Phone className="w-6 h-6 text-white" />
      <p className="text-lg">+123 456 7890</p>
    </div>
    <div className="flex items-center space-x-4">
      <MapPin className="w-6 h-6 text-white" />
      <p className="text-lg">123 Street, City, Country</p>
    </div>
  </div>

  {/* Right side: Contact form or other content */}
  <div>
    {/* your right side content here */}
  </div>
</div>


          {/* Right side: Contact Form */}
          <Card
            id="contact-form"
            data-aos="fade-left"
            className="border border-border shadow-lg bg-background"
          >
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Your Message"
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                  ></textarea>
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
