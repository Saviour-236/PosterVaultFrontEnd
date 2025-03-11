import { useState } from "react";
 const  DownloadButton = ({ imgSrc, fileName }:{imgSrc:string, fileName:string }) => {
  console.log(imgSrc, fileName)
    const [downloaded, setDownloaded] = useState(false);
  
    const handleDownload = async () => {
      const response = await fetch(imgSrc);
      const blob = await response.blob(); // Convert to blob
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = fileName || "image.jpg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  
      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 1000); // Reset after animation
    };
  
    return (
      <button
      title="Download"
        id="btn-download"
        className={`border-[1px]   bg-[#ffffff] flex items-center justify-center rounded-md p-1 h-fit  ${downloaded ? "downloaded" : ""}`}
        onClick={handleDownload}
      >
        <svg viewBox="0 0 1024 1024" className="icon w-5 h-5" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M768 810.7c-23.6 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7c94.1 0 170.7-76.6 170.7-170.7 0-89.6-70.1-164.3-159.5-170.1L754 383l-10.7-22.7c-42.2-89.3-133-147-231.3-147s-189.1 57.7-231.3 147L270 383l-25.1 1.6c-89.5 5.8-159.5 80.5-159.5 170.1 0 94.1 76.6 170.7 170.7 170.7 23.6 0 42.7 19.1 42.7 42.7s-19.1 42.7-42.7 42.7c-141.2 0-256-114.8-256-256 0-126.1 92.5-232.5 214.7-252.4C274.8 195.7 388.9 128 512 128s237.2 67.7 297.3 174.2C931.5 322.1 1024 428.6 1024 554.7c0 141.1-114.8 256-256 256z" fill="#3688FF"></path><path d="M512 938.7c-10.9 0-21.8-4.2-30.2-12.5l-128-128c-16.7-16.7-16.7-43.7 0-60.3 16.6-16.7 43.7-16.7 60.3 0l97.8 97.8 97.8-97.8c16.6-16.7 43.7-16.7 60.3 0 16.7 16.7 16.7 43.7 0 60.3l-128 128c-8.2 8.3-19.1 12.5-30 12.5z" fill="#5F6379"></path><path d="M512 938.7c-23.6 0-42.7-19.1-42.7-42.7V597.3c0-23.6 19.1-42.7 42.7-42.7s42.7 19.1 42.7 42.7V896c0 23.6-19.1 42.7-42.7 42.7z" fill="#5F6379"></path></g>
        </svg>
      </button>
    );
  };
  
  export default DownloadButton