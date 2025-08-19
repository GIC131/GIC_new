// /data/servicesData.js
import { Code, Database, Brain, Smartphone } from "lucide-react";

export const servicesData = {
  development: {
    title: "Development & IT",
    description:
      "Our interns offer development and technical support across web, mobile, cloud, and backend systems — empowering startups and enterprises to scale faster.",
    services: [
      {
        title: "Frontend Development",
        description:
          "Responsive and accessible UIs using React.js, Vue.js, HTML/CSS. Ideal for websites, SaaS dashboards, and landing pages.",
        icon: <Code size={32} className="text-blue-600" />,
        video: "/videos/frontend.mp4"  },
      {
        title: "Backend & API Development",
        description:
          "Robust server-side development using Node.js, Express, Django. REST APIs, authentication, and scalable backend logic.",
        icon: <Database size={32} className="text-green-600" />,
        video: "/videos/coding.mp4" 
      },
      {
        title: "Mobile App Development",
        description:
          "Cross-platform apps with Flutter and React Native. Interns build feature-rich mobile solutions for Android and iOS.",
        icon: <Smartphone size={32} className="text-pink-500" />,
        video: "/videos/coding.mp4" 
      },
      {
        title: "Cloud & DevOps",
        description:
          "Cloud deployment via AWS, Firebase, or Vercel. CI/CD pipelines, containerization with Docker, and staging environments.",
        icon: <Database size={32} className="text-yellow-500" />,
        video: "/videos/frontend.mp4" 
      },
      {
        title: "UI/UX Design",
        description:
          "User-centered product design using Figma, Adobe XD. Interns deliver wireframes, mockups, and prototypes that convert.",
        icon: <Code size={32} className="text-rose-500" />,
        video: "/videos/frontend.mp4" 
      },
      
    ],
  },

  ai: {
    title: "AI & Data Services",
    description:
      "Our AI-focused interns bring innovation through machine learning, analytics, automation, and intelligent product development. From prototypes to production models, they add data-driven value.",
    services: [
      {
        title: "AI & Machine Learning",
        description:
          "Model training and optimization using TensorFlow, scikit-learn, and PyTorch. Applications include NLP, recommendation engines, and predictive analytics.",
        icon: <Brain size={32} className="text-purple-600" />,
        video: "/videos/frontend.mp4" 
      },
      {
        title: "Computer Vision & Image Processing",
        description:
          "Hands-on with OpenCV and CNNs for face detection, object tracking, OCR, and visual recognition solutions.",
        icon: <Brain size={32} className="text-indigo-600" />,
        video: "/videos/coding.mp4" 
      },
      {
        title: "Data Analytics & Business Intelligence",
        description:
          "Data cleaning, exploration, and dashboarding using Python, SQL, Power BI. Turning raw data into actionable insights.",
        icon: <Database size={32} className="text-cyan-500" />,
        video: "/videos/coding.mp4" 
      },
      {
        title: "AI Product Prototyping",
        description:
          "Lightweight ML-powered tools using APIs like OpenAI or HuggingFace. Fast prototyping for AI chatbots, summarizers, and generators.",
        icon: <Smartphone size={32} className="text-teal-500" />,
        video: "/videos/frontend.mp4" 
      },
      {
        title: "Automation & Workflow AI",
        description:
          "Interns can automate business tasks using Zapier, Python scripts, or custom AI logic to streamline operations.",
        icon: <Brain size={32} className="text-orange-500" />,
        video: "/videos/frontend.mp4" 
      },
      {
        title: "Cybersecurity & AI Audits",
        description:
          "AI interns with awareness of ethical AI usage, model bias, data privacy, and security risks in deployed ML systems.",
        icon: <Brain size={32} className="text-red-500" />,
        video: "/videos/coding.mp4" 
      },
    ],
  },
};
