import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

const PDFDisplay = ({ file }) => {
  const [numPages, setNumPages] = useState(null);

  const handleLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className='w-10/12 mx-auto'>
      <Document className='mx-auto' file={file} onLoadSuccess={handleLoadSuccess}>
      {Array.from(new Array(numPages), (el, index) => (
        <Page key={`page_${index + 1}`} pageNumber={index + 1} />
      ))}
    </Document>
    </div>
  );
};

export default PDFDisplay;
