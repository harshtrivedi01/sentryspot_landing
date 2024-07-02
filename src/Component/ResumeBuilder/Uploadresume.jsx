import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import logo from './images/logo3.png';
import upload from './images/upload.png';
import UploadScreen from "./loadingscreens/uploadscreen";
import Footer from "./Footer";

function Uploadresume() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      toast.error("Please select a file to upload");
      return;
    }

    const formData = new FormData();
    formData.append('files', file);

    setLoading(true);
    try {
      const token = localStorage.getItem('token'); // Retrieve token from storage
      const response = await axios.post('https://api.abroadium.com/api/jobseeker/resume-upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': token // Include token in Authorization header
        },
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          toast.info(`Upload progress: ${percentCompleted}%`);
        }
      });

      console.log("Full API Response:", response.data);

      if (!response.data.data || !response.data.data[0] || !response.data.data[0].resume_parse_data) {
        toast.error("Resume data not found in API response");
        setLoading(false);
        return;
      }

      const parsedData = JSON.parse(response.data.data[0].resume_parse_data);
      console.log("Parsed Resume Data:", parsedData);

      // Store resume data in localStorage
      localStorage.setItem('resumeData', JSON.stringify(parsedData.templateData));

      toast.success("File uploaded successfully");
      setLoading(false);
      console.log(JSON.stringify(parsedData.templateData))
      // Navigate to resume display page
      navigate('/form');
    } catch (error) {
      console.error("Upload error:", error);
      toast.error("File upload failed");
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <UploadScreen />
      ) : (
        <>
          <div className="h-screen">
            <div className="text-center my-10">
              <h1 className="font-bold text-3xl mb-3">How do you want to build your resume?</h1>
            </div>
            <div className="flex text-center justify-center gap-10">
              <div className="my-10 p-16 border-dashed border-2 rounded-md border-blue-400">
                <img src={upload} alt="" style={{ height: '50px' }} className="ms-24" />
                <h1 className="font-bold text-xl mt-2 mb-3 text-slate-700">Drag and drop a file here</h1>
                <input type="file" onChange={handleFileChange} className="hidden" id="file-upload" />
                <label htmlFor="file-upload" className="cursor-pointer text-white px-4 rounded-full py-1 text-xs" style={{ backgroundColor: '#022B5F' }}>Browse</label>
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xs"><strong>Files we can read: PDF</strong></h3>
            </div>
            <div className="text-center mt-10">
              <button className="px-10 rounded-full py-2 text-lg text-violet-950 font-bold border border-violet-950" onClick={handleUpload}>Upload</button>
            </div>
            <div className="ms-20 mt-10">
              <button className="px-10 rounded-full py-2 text-lg text-violet-950 font-bold border border-violet-950" onClick={() => navigate('/dashboard')}>Back</button>
            </div>
          </div>
          <Footer />
          <ToastContainer />
        </>
      )}
    </>
  );
}

export default Uploadresume;
