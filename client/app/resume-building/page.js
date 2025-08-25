// client/app/resume-building/page.js

import Link from 'next/link';

const ResumeBuildingPage = () => {
  return (
    <div className="min-h-screen bg-primary py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-light-text mb-4">
          Professional Resume Building
        </h1>
        <p className="text-lg text-dark-text max-w-3xl mx-auto mb-12">
          Craft a standout resume that gets noticed. Our expert tips and templates are designed to help you highlight your skills and experience effectively.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
          <div className="bg-secondary p-8 rounded-lg border border-slate-700">
            <h2 className="text-2xl font-bold text-accent mb-4">Key Sections to Include</h2>
            <ul className="space-y-2 list-disc list-inside text-dark-text">
              <li>Contact Information (Name, Phone, Email, LinkedIn)</li>
              <li>Professional Summary or Objective</li>
              <li>Work Experience (with quantifiable achievements)</li>
              <li>Education and Certifications</li>
              <li>Skills (Technical and Soft Skills)</li>
              <li>Projects or Portfolio (if applicable)</li>
            </ul>
          </div>
          <div className="bg-secondary p-8 rounded-lg border border-slate-700">
            <h2 className="text-2xl font-bold text-accent mb-4">Top Tips for Success</h2>
            <ul className="space-y-2 list-disc list-inside text-dark-text">
              <li>Tailor your resume for each job application.</li>
              <li>Use action verbs to describe your accomplishments.</li>
              <li>Keep it concise and easy to read (ideally one page).</li>
              <li>Proofread carefully to eliminate any typos.</li>
              <li>Quantify your achievements with numbers and data.</li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
           <Link href="/path/to/resume-template.pdf" download
             className="bg-accent text-primary font-bold px-8 py-3 rounded-lg hover:bg-sky-400 transition-transform duration-300 hover:scale-105">
             Download Our Template
           </Link>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuildingPage;