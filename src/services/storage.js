
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebaseConfig";
import { v4 } from "uuid";

async function uploadImage(image) {
    const name = image.name.replace(/\.[^/.]+$/, "");
    const imageRef = ref(storage, `music/${name + v4()}`);

    // Upload file and metadata to the object 'images/mountains.jpg'
    const uploadTask = uploadBytesResumable(imageRef, image);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on('state_changed',
        (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case 'paused':
                    console.log('Upload is paused');
                    break;
                case 'running':
                    console.log('Upload is running');
                    break;
            }
        },
        (error) => {
            return ({ status: 'error', code: error.code });
        },
        () => {
            // Upload completed successfully, now we can get the download URL
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
                const imgObject = { url: downloadURL, name: image.name, ref: imageRef }
                console.log(imgObject);
                return ({ status: 'success', img: { ...imgObject } });
            });
        }
    );
}

export { uploadImage }