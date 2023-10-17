import React, { useState, useEffect } from 'react';
import mammoth from 'mammoth';
// copywrite belongs to Maruf Ibne Hossain.

const DocxDisplay = ({ file }) => {
  const [docContent, setDocContent] = useState('');

  useEffect(() => {
    if (file) {
      const reader = new FileReader();
      reader.onload = function(event) {
        const arrayBuffer = event.target.result;

        mammoth.convertToHtml({arrayBuffer: arrayBuffer})
          .then(displayResult)
          .catch(handleError);
      };
      reader.readAsArrayBuffer(file);
    }
  }, [file]);

  const displayResult = (result) => {
    setDocContent(result.value);
  };

  const handleError = (err) => {
    console.warn('Error converting .docx to HTML:', err);
  };

  return (
    <div className='w-8/12 mx-auto'>
      <div dangerouslySetInnerHTML={{ __html: docContent }} />
    </div>
    
  );
};

export default DocxDisplay;
