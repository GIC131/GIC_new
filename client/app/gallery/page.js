"use client";
import { useState, useEffect } from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import GalleryViewer from "../../components/sections/GalleryViewer";
import { useAuth } from "../../hooks/useAuth";

export default function Gallery() {
  const { isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white dark:from-[#030712] dark:via-[#030712] dark:to-[#030712] flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white dark:from-[#030712] dark:via-[#030712] dark:to-[#030712] text-gray-800 dark:text-gray-100">
      <Navbar />
      <GalleryViewer />
      <Footer />
    </div>
  );
}
