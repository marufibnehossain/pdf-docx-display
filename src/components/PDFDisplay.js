import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

const PDFDisplay = ({ file }) => {
  const [numPages, setNumPages] = useState(null);

  const handleLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <Document file={file} onLoadSuccess={handleLoadSuccess}>
      {Array.from(new Array(numPages), (el, index) => (
        <Page key={`page_${index + 1}`} pageNumber={index + 1} />
      ))}
    </Document>
  );
};

export default PDFDisplay;
