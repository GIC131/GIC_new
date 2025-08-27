// client/app/resume-building/page.js
import PdfViewer from '@/components/PdfViewer';

export const metadata = {
  title: 'Professional Resume Templates & Examples',
  description: 'View and download professional resume templates. Get expert tips to craft a standout resume that gets you noticed by top recruiters.',
};

const ResumeBuildingPage = () => {
  return (
    <div className="min-h-screen bg-primary py-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-light-text mb-4">
            Resume Templates & Examples
          </h1>
          <p className="text-lg text-dark-text">
            Explore our professionally designed resume templates. View them below or download them to get started on your own.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <PdfViewer fileUrl="/pdf/resume-template-1.pdf" title="Modern Resume Template" />
          <PdfViewer fileUrl="/pdf/resume-template-2.pdf" title="Creative Resume Template" />
        </div>
      </div>
    </div>
  );
};

export default ResumeBuildingPage;