import React, { useState, useEffect } from 'react';
import Hero from "./sections/Hero"
import NavBar from './components/NavBar'
import ShowcaseSection from './sections/ShowcaseSection'
import FeatureCards from './sections/FeatureCards'
import ExperienceSection from './sections/ExperienceSection'
import Contact from "./sections/Contact";          
/*
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeViewer({ pdfUrl }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} width={800} /> 
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
      {numPages > 1 && (
        <div>
          <button onClick={() => setPageNumber(pageNumber - 1 || 1)}>Previous</button>
          <button onClick={() => setPageNumber(Math.min(pageNumber + 1, numPages))}>Next</button>
        </div>
      )}
    </div>
  );
}*/

function App() {
 
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <FeatureCards />
      <ExperienceSection />
      <Contact />
    </>
  );
}

export default App;