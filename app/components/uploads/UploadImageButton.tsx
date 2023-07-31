import { OurFileRouter } from "@/app/api/uploadthing/core";
import { UploadButton } from "@uploadthing/react";

const UploadImageButton = () => {
    return (
        <UploadButton<OurFileRouter>
            endpoint="imageUploader"
            onClientUploadComplete={(res) => {
                console.log("Files: ", res);
                alert("Upload Completed");
            }}
            onUploadError={(error: Error) => {
                alert(`ERROR! ${error.message}`);
            }}
        />
    );
};

export default UploadImageButton;
