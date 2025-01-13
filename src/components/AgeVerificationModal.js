import React from 'react';

function AgeVerificationModal({ setIsAgeVerified }) {
  const handleVerification = (isVerified) => {
    if (isVerified) {
      setIsAgeVerified(true);
    } else {
      window.location.href = 'https://www.google.com';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 text-center w-11/12 max-w-md">
        <h2 className="text-2xl font-bold mb-4">Koliko godina imaš?</h2>
        <p>Moraš imati 18 ili više godina da pristupiš ovom sajtu.</p>
        <div className="flex justify-around mt-4">
          <button onClick={() => handleVerification(true)} className="bg-green-600 px-4 py-2 rounded text-white">Više od 18</button>
          <button onClick={() => handleVerification(false)} className="bg-red-600 px-4 py-2 rounded text-white">Manje od 18</button>
        </div>
      </div>
    </div>
  );
}

export default AgeVerificationModal;
