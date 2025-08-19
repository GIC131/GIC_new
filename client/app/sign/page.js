import Navbar from "../../components/layout/Navbar";

export const metadata = {
  title: "Sign Page | GetInterviewConfidence",
  description: "This is the sign page of the GetInterviewConfidence website.",
};

export default function Sign() {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-4xl aspect-[3/4]">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSe5MiNOkT8J0CgfVWDbtc7ag7ux4LksphcHpZ9EfE8lTV99Qg/viewform?embedded=true"
            title="Sign Form"
            className="w-full h-full border-0 rounded-xl shadow-xl"
            allowFullScreen
            loading="lazy"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
}
