import React from 'react';
import FileReader from 'react-file-reader';
// copywrite belongs to Maruf Ibne Hossain.

const FileUpload = ({ onFileChange }) => {
  return (
    <FileReader
      multipleFiles={false}
      handleFiles={onFileChange}
      fileTypes={['.pdf', '.docx']}
    >
      <button className='btn'>Upload File</button>
    </FileReader>
  );
};

export default FileUpload;
