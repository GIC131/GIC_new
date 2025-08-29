// client/app/career-gallery/page.js
import Gallery from "@/components/Gallery";

export const metadata = {
    title: "Career's Gallery | GetInterviewConfidence",
    description: 'Explore job roles and hiring opportunities from our esteemed partner companies.',
};

const CareerGalleryPage = () => {
    return (
        <Gallery 
            category="Career" 
            title="Career's Gallery" 
            description="Explore job roles and hiring opportunities from our esteemed partner companies." 
        />
    );
};

export default CareerGalleryPage;