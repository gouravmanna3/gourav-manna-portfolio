import FileSaver from "file-saver";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { app } from "./firebase.config";

export const downloadResume = () => {
  // Create a reference to the file we want to download
  const storage = getStorage(app, "gs://resume-6478a.appspot.com");
  const resumeRef = ref(storage, "/resume/Gourav Manna Resume.pdf");

  getDownloadURL(resumeRef)
    .then((url) => {
      console.log("URL", typeof url);
      const link = document.createElement("a");
      if (link.download !== undefined) {
        link.setAttribute("href", url);
        link.setAttribute("target", "_blank");
        link.style.visibility = "hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
