// client/app/admin-dashboard/media/page.js
import ImageUpload from "@/components/ImageUpload";

const MediaUploadPage = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold text-light-text mb-6">Media Uploads</h1>
            <ImageUpload />
        </div>
    );
}
export default MediaUploadPage;