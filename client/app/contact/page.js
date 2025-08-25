// client/app/contact/page.js

import Link from 'next/link';

const ContactPage = () => {
  // **IMPORTANT**: Replace this with your actual Google Form link
  const googleFormLink = "https://docs.google.com/forms/d/e/1FAIpQLSe5MiNOkT8J0CgfVWDbtc7ag7ux4LksphcHpZ9EfE8lTV99Qg/viewform";

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center py-20">
      <div className="container mx-auto px-6 text-center max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-light-text mb-4">
          Get in Touch
        </h1>
        <p className="text-lg text-dark-text mb-8">
          Have a question or want to partner with us? Our HR team is ready to assist you. Please fill out our contact form, and we'll get back to you as soon as possible.
        </p>

        <div className="bg-secondary p-10 rounded-lg border border-slate-700">
          <h2 className="text-2xl font-bold text-accent mb-4">Contact Human Resources</h2>
          <p className="text-dark-text mb-6">For all inquiries, including student programs, corporate partnerships, and recruitment services, please use the form linked below.</p>
          <Link href={googleFormLink} target="_blank" rel="noopener noreferrer"
             className="inline-block bg-accent text-primary font-bold px-10 py-4 rounded-lg hover:bg-sky-400 transition-transform duration-300 hover:scale-105 text-lg">
             Go to HR Contact Form
          </Link>
        </div>

        <div className="mt-12 text-dark-text">
            <p>You can also reach us via email at <a href="mailto:hr@getinteviewconfidence.com" className="text-accent hover:underline">hr@getinteviewconfidence.com</a></p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;