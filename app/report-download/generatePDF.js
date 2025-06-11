'use client'
// generatePDF.js
import jsPDF from 'jspdf';

export const generatePDF = async (backgroundImagePath, contentImagePath, secondPageImagePath, withheader) => {
  const pdf = new jsPDF();

  // Page 1: Add background image with reduced quality
  const imgWidth = 210;
  const imgHeight = 297;

  // Adjust the 'quality' parameter to reduce image quality (0 to 1, 0 being the worst quality)
  const imageOptions = { quality: 0.6 }; // Adjust this value based on your preference

  pdf.addImage(backgroundImagePath, 'JPEG', 0, 0, imgWidth, imgHeight, '', 'FAST', 0, imageOptions);


  // Page 1: Add content image
  const contentImgWidth = 210;
  const aspectRatio = contentImgWidth / imgWidth;
  const contentImgHeight = imgHeight * aspectRatio;
  const x = (pdf.internal.pageSize.width - contentImgWidth) / 2;
  const y = (pdf.internal.pageSize.height - contentImgHeight) / 2;

  const contentImage = await getImageFromUrl(contentImagePath);
  if (withheader) {
    pdf.addImage(contentImage, 'JPEG', x, y, contentImgWidth, contentImgHeight, '', 'FAST', 0, imageOptions);
  }

  // Add a new page
  pdf.addPage();

  // Page 2: Add a different image
  const secondPageImgWidth = pdf.internal.pageSize.width;
  const secondPageImgHeight = pdf.internal.pageSize.height;
  pdf.addImage(secondPageImagePath, 'JPEG', 0, 0, secondPageImgWidth, secondPageImgHeight, '', 'FAST', 0, imageOptions);

  return pdf;
};

const getImageFromUrl = (url) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.src = url;
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      resolve(img);
    };
  });
};
