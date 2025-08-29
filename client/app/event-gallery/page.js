// client/app/event-gallery/page.js
import Gallery from "@/components/Gallery";

export const metadata = {
    title: 'Event Gallery | GetInterviewConfidence',
    description: 'A glimpse into our workshops, successful placements, and vibrant community events.',
};

const EventGalleryPage = () => {
    return (
        <Gallery 
            category="Event" 
            title="Event Gallery" 
            description="A glimpse into our workshops, successful placements, and vibrant community events." 
        />
    );
};

export default EventGalleryPage;