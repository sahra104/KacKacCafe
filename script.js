function validateContactForm(e) {
  e.preventDefault();
  const name = document.getElementById('userName').value.trim();
  const email = document.getElementById('userEmail').value.trim();
  const msg = document.getElementById('userMessage').value.trim();
  const alertBox = document.getElementById('alertBox');

  if (!name || !email || !msg) {
    alertBox.innerHTML = `
          <div class="alert alert-danger" role="alert">
            <strong>Validation Error:</strong> All input fields must be filled out completely before submitting!
          </div>`;
    return false;
  }

  alertBox.innerHTML = `
      <div class="alert alert-success" role="alert">
        <strong>Thank you, ${name}!</strong> Your request has been logged successfully. We will follow up via email shortly.
      </div>`;
  document.getElementById('contactForm').reset();
  return true;
}
