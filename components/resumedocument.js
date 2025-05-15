"use client";

import { useState, useEffect, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

const ResumeDocument = () => {
  const [numPages, setNumPages] = useState(null);
  const [width, setWidth] = useState(0);
  const containerRef = useRef(null);

  const onLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  useEffect(() => {
    function updateWidth() {
      if (containerRef.current) {
        setWidth(containerRef.current.clientWidth);
      }
    }

    updateWidth();

    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{ width: "90vw", maxWidth: 700, margin: "auto" }}
    >
      <Stack alignItems="center">
        <Document file="/Kailash_Gautham_Resume.pdf" onLoadSuccess={onLoadSuccess}>
          <Page
            pageNumber={1}
            width={width || 700} // fallback to 700 before measuring
            renderTextLayer={false}
          />
        </Document>
      </Stack>
    </Box>
  );
};

export default ResumeDocument;