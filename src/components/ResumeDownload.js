import React, { useEffect } from 'react';

const ResumeDownload = () => {
  const resumeUrl = 'https://github.com/sachinjoseph26/ResumePortfolio/raw/main/Profile%20(1).pdf';

  useEffect(() => {
    const downloadResume = () => {
      const link = document.createElement('a');
      link.href = resumeUrl;
      link.download = 'SJResume.pdf'; // Change to your desired file name
      link.style.display = 'none'; // Hide the link
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    downloadResume();
  }, [resumeUrl]);

  return (
    <div>

      <p> Resume has downloaded in new tab. You can go back to home page.</p>

    </div>
  );
};

export default ResumeDownload;
