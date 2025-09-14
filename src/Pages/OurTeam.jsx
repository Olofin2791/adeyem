"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/Badge"
import { Card, CardContent } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { Users, Award, Mail, Linkedin, Twitter, ChevronDown, ChevronUp } from "lucide-react"
import NavBar from "../components/NavBar"

const teamMembers = [
  {
    name: "Israel Adeyemi",
    role: "CEO & Founder",
    image: "https://res.cloudinary.com/dang2kjfr/image/upload/v1757620795/Israel_tax0ly.jpg",
    bio: "Israel Adeyemi is a certified HR and Administration professional with extensive expertise in talent acquisition, employee relations, and more. He has a proven track record of reducing time-to-hire by 20% through optimized recruitment campaigns, effective HRIS implementation, and data-driven hiring strategies. Additionally, Israel has contributed to a 60% increase in revenue generation by leading learning and development initiatives, employee engagement programs, and performance optimization efforts. He also serves as an advisory board member at Rockwheels Limited, where he provides strategic guidance and valuable insights to support the organization’s growth and success",
    email: "john@adeeyem.com",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Akindehin Jumoke Yinka",
    role: "Associate Lead, People Operations",
    image: "https://res.cloudinary.com/dang2kjfr/image/upload/v1757612494/360_F_249073153_HmszwE91KwSURMx8AZfmmcMJmyEjwXR3_ndszm6.jpg",
    bio: "Akindehin Jumoke Yinka is a dual expert in finance and education, leveraging her skills as an Accountant and a lecturer. With a strong background in financial management and accounting principles, Jumoke brings a unique perspective to People Operations. She excels in optimizing organizational efficiency, fostering employee engagement, and driving strategic initiatives. Through her roles, Jumoke has developed a keen understanding of talent development and operational excellence, making her a valuable asset to any organization.",
    email: "jane@adeeyem.com",
    linkedin: "#",
    twitter: "#",
  },
    {
    name: "Olusegun E. Olaniyi ",
    role: "Executive Director/Director of Strategy",
    image: "https://res.cloudinary.com/dang2kjfr/image/upload/v1757612494/360_F_249073153_HmszwE91KwSURMx8AZfmmcMJmyEjwXR3_ndszm6.jpg",
    bio: "Olusegun E. Olaniyi is a distinguished ESG/HSE professional and accomplished business strategist. With a proven track record, he navigates seamlessly through quality, health, safety, environment, and sustainability intersections. Olusegun, a strategic leader, blends expertise in risk management, business strategy, and environmental sustainability to achieve unparalleled success. His commitment to excellence is evident in pioneering initiatives, ensuring operational integrity, and fostering a culture of innovation.",
    email: "jane@adeeyem.com",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Bantefa Toye ",
    role: "Operation & Technical Support ",
    image: "https://res.cloudinary.com/dang2kjfr/image/upload/v1757612494/360_F_249073153_HmszwE91KwSURMx8AZfmmcMJmyEjwXR3_ndszm6.jpg",
    bio: "Bantefa Toye is a dedicated professional in the fintech industry, combining his expertise in supervision and technical support to drive operational efficiency and service excellence. With hands-on experience in managing teams and resolving complex technical issues, he ensures smooth business operations and delivers top-notch support to clients and stakeholders. Bantefa’s strong problem-solving skills, leadership ability, and commitment to innovation make him a valuable contributor to organizational success.",
    email: "jane@adeeyem.com",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Olofin Abiodun",
    role: "Head of Recruitment",
    image: "https://res.cloudinary.com/dang2kjfr/image/upload/v1740864871/1740864065680_fr9tfm.webp",
    bio: "Mike brings expertise in strategic recruitment and employer branding. He has successfully placed thousands of professionals in top companies.",
    email: "mike@adeeyem.com",
    linkedin: "#",
    twitter: "#",
  },
]

const advisoryBoard = [
  {
    name: "HRM Oba Alaba Omotunde Ebiyanmi Adako & Olori Oluwaseyi Adako – Oliyere of Iyere Kingdom",
    role: "Advisory Board Member",
    image: "https://res.cloudinary.com/dang2kjfr/image/upload/v1757747996/IMG-20250905-WA0016_k7hjp3.jpg",
    bio: "His Majesty HRM Oba Alaba Omotunde Ebiyanmi Adako, the Oliyere of Iyere Kingdom in Ondo State, is a progressive traditional ruler and dynamic entrepreneur who combines deep expertise in accounting, social sciences, and business leadership. He leads Adeyem Enterprises with vision and innovation, driving sustainable growth while positively impacting his community. Celebrated for his principled governance and commitment to empowerment initiatives, His Majesty blends cultural heritage with modern entrepreneurship, making him a respected and transformative figure in both his kingdom and the business world",
  },
  {
    name: "Dr Idahosa Osahmanze",
    role: "Advisory Board Member",
    image: "https://res.cloudinary.com/dang2kjfr/image/upload/v1757748110/IMG-20250905-WA0005_cpqid1.jpg",
    bio: "A Director at the Africa Development Studies Centre, specializing in capacity building and policy research. He is also the Vice President of Femy Walsh Limited, owners of Souq News Television and Isle FM. With over two decades of experience, He has conducted training for public and private sectors globally. His expertise includes leadership, management, public policy, change management, procurement, and supply chain management. He holds a diverse educational background, including a Ph.D. in Biblical Studies. ",
  },
]

export default function OurTeam() {
  const [expandedMember, setExpandedMember] = useState(null)
  const [expandedAdvisor, setExpandedAdvisor] = useState(null)

  const toggleMember = (index) => {
    setExpandedMember(expandedMember === index ? null : index)
  }

  const toggleAdvisor = (index) => {
    setExpandedAdvisor(expandedAdvisor === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-background">
      <NavBar/>
      {/* Header */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="text-sm px-4 py-2 mb-6">
            Our Team
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Meet the Experts Behind Our Success
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Our diverse team of HR professionals brings together decades of experience,
            innovative thinking, and a passion for empowering organizations through people.
          </p>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="text-sm px-4 py-2 mb-6">
              Leadership Team
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Core Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get to know the leaders driving our mission to transform HR practices
              and build exceptional workplace cultures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden relative">
                  {expandedMember !== index && (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                  {expandedMember === index && (
                    <div className="w-full h-full p-6 bg-background flex flex-col justify-center text-muted-foreground">
                      <p className="mb-4">{member.bio}</p>
                      <div className="flex space-x-4">
                        <Button variant="outline" size="sm" asChild>
                          <a href={`mailto:${member.email}`}>
                            <Mail className="w-4 h-4 mr-2" />
                            Email
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="w-4 h-4 mr-2" />
                            LinkedIn
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                          <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                            <Twitter className="w-4 h-4 mr-2" />
                            Twitter
                          </a>
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-4">{member.role}</p>

                  <Button
                    variant="outline"
                    onClick={() => toggleMember(index)}
                    className="w-full flex items-center justify-between"
                  >
                    {expandedMember === index ? "Hide Profile" : "View Profile"}
                    {expandedMember === index ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="text-sm px-4 py-2 mb-6">
              Advisory Board
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Advisors
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our advisory board consists of industry veterans who provide strategic
              guidance and ensure we stay at the forefront of HR innovation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {advisoryBoard.map((advisor, index) => (
             <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
  <div className="flex flex-col items-center p-6 text-center">
    <img
      src={advisor.image}
      alt={advisor.name}
      className="w-50 h-70 object-cover rounded mb-4"
    />
    <div className="flex-1 w-full">
      <h3 className="text-xl font-semibold mb-1">{advisor.name}</h3>
      <p className="text-primary font-medium mb-3">{advisor.role}</p>
      <Button
        variant="outline"
        onClick={() => toggleAdvisor(index)}
        className="w-full flex items-center justify-between"
      >
        {expandedAdvisor === index ? "Hide Bio" : "Read Bio"}
        {expandedAdvisor === index ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </Button>
      {expandedAdvisor === index && (
        <div className="mt-4 text-muted-foreground">{advisor.bio}</div>
      )}
    </div>
  </div>
</Card>

            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
