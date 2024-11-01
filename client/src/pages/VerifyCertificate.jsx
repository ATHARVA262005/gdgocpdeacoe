import React, { useState } from'react';
import { useNavigate } from'react-router-dom';

function VerifyCertificate() {
  const [certificateId, setCertificateId] = useState('');
  const navigate = useNavigate();

  const handleCheckVerification = async () => {
    try {
      const response = await fetch(`https://gdgocpdeacoe-backend.vercel.app/verify-certificate`, {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ certificateId }),
      });
      const data = await response.json();
      if (data.error) {
        alert(data.error);
      } else {
        navigate(`/verified-certificates/${certificateId}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-md flex flex-col items-center justify-center mx-auto p-4 min-h-screen -mt-16 ">
      <h1 className="text-3xl font-bold mb-4">Verify Our Certificate</h1>
      <input
        type="text"
        value={certificateId}
        onChange={(e) => setCertificateId(e.target.value)}
        placeholder="Enter Certificate ID"
        className="w-full p-2 mb-4 border border-gray-400"
      />
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleCheckVerification}
      >
        Check Verification
      </button>
    </div>
  );
}

export default VerifyCertificate;