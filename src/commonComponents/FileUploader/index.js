import React from 'react';

const FileUpload = ({fileUrl,setFileUrl}) => {

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const fileReader = new FileReader();

      fileReader.onload = (e) => {
        const url = e.target.result;
        setFileUrl(url);
      };

      fileReader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*" 
        onChange={handleFileChange}
      />

      {fileUrl && (
        <div>
          <p>File URL:</p>
          <a href={fileUrl} target="_blank" rel="noopener noreferrer">
            {fileUrl}
          </a>
        </div>
      )}
    </div>
  );
};

export default FileUpload;