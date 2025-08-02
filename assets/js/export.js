document.getElementById('export-pdf').addEventListener('click', function() {
  const element = document.getElementById('resume-preview');
  
  // Using html2pdf.js (add CDN to your HTML)
  html2pdf()
    .from(element)
    .set({
      margin: 10,
      filename: 'my-resume.pdf',
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    })
    .save();
});
