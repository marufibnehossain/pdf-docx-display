import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import PDFDisplay from './components/PDFDisplay';
import DocxDisplay from './components/DocxDisplay';

function App() {
  const [file, setFile] = useState(null);
  const [fileURL, setFileURL] = useState(null);
  const [fileType, setFileType] = useState('');

  const handleFileChange = (files) => {
    const selectedFile = files[0];
    setFile(selectedFile);
    setFileURL(URL.createObjectURL(selectedFile));

    if (selectedFile.name.endsWith('.pdf')) {
      setFileType('pdf');
    } else if (selectedFile.name.endsWith('.docx')) {
      setFileType('docx');
    }
  };

  return (
    <div className='App'>
      <FileUpload onFileChange={handleFileChange} />
      {fileType === 'pdf' && <PDFDisplay file={fileURL} />}
      {fileType === 'docx' && <DocxDisplay file={file} />}
    </div>
  );
}

export default App;
