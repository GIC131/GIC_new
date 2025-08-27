// client/components/PdfViewer.js

const PdfViewer = ({ fileUrl, title }) => {
  return (
    <div className="border border-slate-700 rounded-lg overflow-hidden">
      <div className="bg-secondary p-4">
        <h4 className="font-bold text-light-text">{title}</h4>
      </div>
      <div className="p-4">
        <iframe
          src={fileUrl}
          title={title}
          width="100%"
          height="500px"
          className="rounded-b-lg"
        ></iframe>
        <a
          href={fileUrl}
          download
          className="mt-4 inline-block w-full text-center bg-accent text-primary font-bold py-2 px-4 rounded-lg hover:bg-sky-400 transition-colors"
        >
          Download Template
        </a>
      </div>
    </div>
  );
};

export default PdfViewer;