import Navbar from "../../components/layout/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import Image from "next/image";
import { 
  Award, 
  CheckCircle,
  FileText,
  Target,
  Users,
  Megaphone,
  Linkedin,
  Rocket,
} from "lucide-react";

export const metadata = {
  title: "About Us | GetInterviewConfidence",
  description: "Learn about our mission to help professionals excel in interviews and build successful careers."
};

export default function About() {


  const whatwedo = [
    {
      title: "ATS-Optimized Resume Writing",
      description: "Crafting resumes that seamlessly pass through Applicant Tracking Systems, highlighting your unique strengths and aligning with your career aspirations.",
      icon: <FileText className="h-5 w-5 text-blue-600" />
    },
    {
      title: "Personalized Interview Coaching",
      description: "One-on-one sessions aimed at building confidence, mastering body language, and refining communication skills to help you ace interviews.",
      icon: <Target className="h-5 w-5 text-green-600" />
    },
    {
      title: "Recruitment Vendor Partnerships",
      description: "Collaborating with businesses to streamline their hiring processes and connect them with top-tier talent.",
      icon: <Users className="h-5 w-5 text-purple-600" />
    },
    {
      title: "Event Promotions",
      description: "Assisting in promoting hiring events to attract the right candidates and maximize outreach.",
      icon: <Megaphone className="h-5 w-5 text-amber-600" />
    },
    {
      title: "LinkedIn Profile Optimization",
      description: "Enhancing your online presence to increase visibility and attract recruiters through expertly crafted LinkedIn profiles.",
      icon: <Linkedin className="h-5 w-5 text-cyan-600" />
    },
    {
      title: "Career Strategy Sessions",
      description: "Developing actionable plans to achieve your career goals with confidence and clarity.",
      icon: <Rocket className="h-5 w-5 text-pink-600" />
    }
  ]
const detail = [
  {
    title: "Communication Style",
    description: "Direct, approachable, prefers LinkedIn DM or email contact for hiring."
  },
  {
    title: "Candidate Engagement",
    description: "Actively reaches out via posts and direct messages; encourages open dialogue."
  },
  {
    title: "Resume Expectations",
    description: "Strong focus on ATS-optimized resumes; may assist with formatting or feedback."
  },
  {
    title: "Soft Skills Focus",
    description: "Values emotional intelligence and interpersonal skills in candidates."
  }
];


  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <main className="py-16 space-y-20">

          <div className="flex items-center justify-center gap-4">
            {/* First One */}
            <Card className="flex-1 h-[460px]">
              <CardHeader>
                <CardTitle className="text-3xl font-bold">About Us</CardTitle>
              </CardHeader>
              <CardContent>
              <p className="text-lg leading-relaxed max-w-2xl">
                At <strong>Get Interview Confidence</strong>, we empower professionals and businesses with tailored solutions to accelerate career growth, improve hiring success, and boost online visibility. Founded in 2024 and based in Kolkata, West Bengal, our mission is to transform job seekers into confident professionals ready to shine in any interview.
              </p>
              <p className="text-lg max-w-4xl mt-4 leading-relaxed">
                We're passionate about personalized coaching and strategic support that truly makes a difference.
              </p>
              </CardContent>
            </Card>

            {/* Second One */}
            <section className="flex-1 space-y-4">
              <Card className="h-56">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold">Our Story</CardTitle>
                </CardHeader>
                <CardContent className="">
                  Facing the tough realities of today's job market, our founder <b>Ayushe Mandal</b> created a platform that goes beyond resume services. We focus on building confidence, enhancing communication skills, and crafting standout strategies that make our clients irresistible to recruiters.
                </CardContent>
              </Card>

              <Card className="flex-1 h-56">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  We're here to help you prepare for interviews with confidence and clarity. From tips and tools to expert guidance, our platform supports you every step of your interview journey.
                </CardContent>
              </Card>
            </section>
          </div>

          <section className="py-12 rounded-2xl bg-gradient-to-b from-gray-50 to-white px-8"> 
            <div className="flex items-center justify-center gap-2 mb-8">
              <h2 className="text-4xl font-bold">What We Do</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
              {whatwedo.map((service, index) => (
                <Card key={index} className="border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                  <CardHeader className="pb-2 flex flex-row items-center gap-2">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black/5">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100">
            <div className="flex items-center justify-center gap-2 mb-8">
              <h2 className="text-4xl font-bold">Our Approach</h2>
            </div>
            <p className="text-lg leading-relaxed max-w-3xl mx-auto text-center mb-10">
              We tailor our support based on your unique aspirations. From freshers to seasoned pros, our experts provide custom strategies to help you reach your career goals with confidence.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              {detail.map((item, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl text-center">
                  <div className="w-12 h-12 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-gray-700" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-gray-50 rounded-xl p-10">
            <div className="flex items-center justify-center gap-2 mb-8">
              <Award className="w-6 h-6 text-gray-700" />
              <h2 className="text-4xl font-bold">Our Founder</h2>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="md:w-1/3">
                <div className="aspect-square bg-gray-200 rounded-xl overflow-hidden">
                  <img
                    src="/images/ayushe Mandal/image.png"
                    alt="Ayushe Mandal"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="md:w-2/3 space-y-4">
                <h3 className="text-2xl font-bold">Ayushe Mandal</h3>
                <p className="text-gray-500">Founder & CEO</p>
                <p className="text-lg text-gray-700">
                 Ayushe Mandal is a Kolkata‑based HR professional focused on recruitment and consulting. She has about 3 years of experience across several firms and versatile HR and tech skills. She’s active on LinkedIn, handling hiring and serving as a contact for roles like Acquisition Manager and Senior HR Consultant.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
