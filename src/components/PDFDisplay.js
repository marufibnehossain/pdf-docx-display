import React from 'react';
import { Document, Page } from 'react-pdf';
// copywrite belongs to Maruf Ibne Hossain.

const PDFDisplay = ({ file }) => {
  return (
    <Document file={file}>
      <Page pageNumber={1} />
    </Document>
  );
};

export default PDFDisplay;
