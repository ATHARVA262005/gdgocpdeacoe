import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function VerifiedCertificate() {
  const { certificateId } = useParams();
  const [certificateData, setCertificateData] = useState({});
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  const [error, setError] = useState(null); // Track errors

  useEffect(() => {
    if (certificateId) {
      setIsLoading(true); // Set loading state to true initially
      fetch('https://gdgocpdeacoe-backend.vercel.app/check-verification', {
        method: 'POST',
        withCredentials: true,
        headers: { 'Content-Type': 'application/json','Access-Control-Allow-Origin': 'https://gdgocpdeacoe.vercel.app' },
        body: JSON.stringify({ certificateId }),
      })
        .then((response) => response.json())
        .then((data) => {
          setCertificateData(data);
          setIsLoading(false); // Set loading state to false after data is received
        })
        .catch((error) => {
          setError(error);
          setIsLoading(false); // Set loading state to false after error
        });
    }
  }, [certificateId]);

  return (
    <div className="flex flex-col items-center min-h-screen pt-16 justify-center bg-gray-100 -mt-16">
      <div className="w-full max-w-md p-8   
 bg-white rounded-lg shadow-md">
        {isLoading ? (
          <p className="text-lg font-semibold mb-2 text-gray-500 text-center">
            Loading certificate data...
          </p>
        ) : error ? (
          <p className="text-lg font-semibold mb-2 text-red-500 text-center">
            Error fetching certificate data: {error.message}
          </p>
        ) : certificateData.certificateId ? (
          <div>
            <p className="text-lg font-semibold mb-2 text-green-500 text-center">
              Certificate is Verified
            </p>
            <div className="grid grid-cols-1 gap-4">
            <div>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center gap-2">
                <span className="text-gray-500 font-medium">Certificate ID:</span>
                <span>{certificateData.certificateId}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500 font-medium">Recipient Name:</span>
                <span>{certificateData.recipientName}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500 font-medium">Event Name:</span>
                <span>{certificateData.eventName}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500 font-medium">Organizer Name:</span>
                <span>{certificateData.organizerName}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500 font-medium">In Charge Name:</span>
                <span>{certificateData.inChargeName}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-500 font-medium">Certificate URL:</span>
                
                <a href={`https://gdgpdeacoem.in/verified-certificates/${certificateData.certificateId}`} className="text-blue-500 underline">
            https://gdgpdeacoem.in/verified-certificates/{certificateData.certificateId}
          </a>
              </div>
            </div>
            
          </div>
            
            </div>
            
            <p className=" pt-5 text-center text-gray-500 font-light">
                Issued by GDG on Campus PDEA's COE
              </p>
          </div>
          
        ) : (
          <p className="text-lg font-semibold mb-2 text-red-500 text-center">
            Certificate is Not Verified
          </p>
        )}

      </div>

      <button
          type="button"
          onClick={() => window.history.back()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
        >
            Go Back
            </button>
    </div>
  );
}

export default VerifiedCertificate;