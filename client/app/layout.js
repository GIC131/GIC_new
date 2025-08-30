// client/app/layout.js
import "./globals.css";
import { Inter } from "next/font/google";
import { AuthProvider } from "@/context/AuthContext";
import AppWrapper from "@/components/AppWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Get Interview Confidence",
  description: "Empowering professionals to achieve their career goals with expert guidance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="!scroll-smooth" data-scroll-behavior="smooth">
      <body>
        <AuthProvider>
          <AppWrapper>
            {children}
          </AppWrapper>
        </AuthProvider>
      </body>
    </html>
  );
}