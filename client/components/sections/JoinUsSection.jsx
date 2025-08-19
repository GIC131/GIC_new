import React from "react";
import ApplicationForm from "./ApplicationForm";

export default function JoinUsSection() {
  return (
    <section className="bg-gray-100 rounded-xl p-10 max-w-7xl mx-auto my-16">
      <h2 className="text-4xl font-bold text-center mb-6">Join Us</h2>
      <p className="text-lg text-center max-w-3xl mx-auto mb-8">
        Become a part of our community and take your career to the next level. We offer opportunities for collaboration, growth, and success.
      </p>
      <ApplicationForm />
    </section>
  );
}
