// Form Handling
document.getElementById('resume-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form data
  const formData = {
    name: document.getElementById('name').value,
    // Add other fields
  };

  // Store data and redirect to preview
  localStorage.setItem('resumeData', JSON.stringify(formData));
  window.location.href = 'preview.html';
});
