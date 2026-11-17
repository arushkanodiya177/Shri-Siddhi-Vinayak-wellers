/* ===== Enquiry Form Validation ===== */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('enquiry-form');
  if (!form) return;

  // Pre-fill from URL params (if coming from product modal)
  const urlParams = new URLSearchParams(window.location.search);
  const designParam = urlParams.get('design');
  const categoryParam = urlParams.get('category');

  const designInput = document.getElementById('design');
  const categorySelect = document.getElementById('category');

  if (designParam && designInput) {
    designInput.value = designParam;
  }
  if (categoryParam && categorySelect) {
    categorySedocument.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('enquiry-form');
  if (!form) return;

  const urlParams = new URLSearchParams(window.location.search);
  const designParam = urlParams.get('design');
  const categoryParam = urlParams.get('category');

  if (designParam && document.getElementById('design')) document.getElementById('design').value = designParam;
  if (categoryParam && document.getElementById('category')) document.getElementById('category').value = categoryParam;

  const showError = (fieldId, message) => {
    const errorSpan = document.getElementById(`error-${fieldId}`);
    if (errorSpan) errorSpan.textContent = message;
  };

  const clearErrors = () => {
    document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');
  };

  const validateForm = () => {
    let isValid = true;
    clearErrors();
    const fullname = document.getElementById('fullname').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const email = document.getElementById('email').value.trim();
    const category = document.getElementById('category').value;
    const message = document.getElementById('message').value.trim();

    if (!fullname) { showError('fullname', 'Please enter your full name.'); isValid = false; }
    if (!mobile || !/^[0-9]{10}$/.test(mobile)) { showError('mobile', 'Please enter a valid 10-digit mobile number.'); isValid = false; }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { showError('email', 'Please enter a valid email address.'); isValid = false; }
    if (!category) { showError('category', 'Please select a category.'); isValid = false; }
    if (!message) { showError('message', 'Please enter your message.'); isValid = false; }

    return isValid;
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const fullname = document.getElementById('fullname').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const email = document.getElementById('email').value.trim();
    const category = document.getElementById('category').value;
    const message = document.getElementById('message').value.trim();

    const subject = encodeURIComponent(`Jewellery Enquiry from ${fullname}`);
    const body = encodeURIComponent(`Name: ${fullname}\nMobile: ${mobile}\nEmail: ${email}\nCategory: ${category}\n\nMessage:\n${message}`);

    window.location.href = `mailto:omsonihh19@gmail.com?subject=${subject}&body=${body}`;

    const successMsg = document.getElementById('form-success');
    if (successMsg) successMsg.classList.remove('hidden');

    setTimeout(() => {
      form.reset();
      if (successMsg) successMsg.classList.add('hidden');
    }, 5000);
  });
});lect.value = categoryParam;
  }

  const showError = (fieldId, message) => {
    const errorSpan = document.getElementById(`error-${fieldId}`);
    if (errorSpan) {
      errorSpan.textContent = message;
    }
  };

  const clearErrors = () => {
    document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');
  };

  const validateForm = () => {
    let isValid = true;
    clearErrors();

    const fullname = document.getElementById('fullname').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const email = document.getElementById('email').value.trim();
    const category = document.getElementById('category').value;
    const message = document.getElementById('message').value.trim();

    if (!fullname) {
      showError('fullname', 'Please enter your full name.');
      isValid = false;
    }

    if (!mobile) {
      showError('mobile', 'Please enter your mobile number.');
      isValid = false;
    } else if (!/^[0-9]{10}$/.test(mobile)) {
      showError('mobile', 'Please enter a valid 10-digit mobile number.');
      isValid = false;
    }

    if (!email) {
      showError('email', 'Please enter your email address.');
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showError('email', 'Please enter a valid email address.');
      isValid = false;
    }

    if (!category) {
      showError('category', 'Please select a jewellery category.');
      isValid = false;
    }

    if (!message) {
      showError('message', 'Please enter your message.');
      isValid = false;
    }

    return isValid;
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Gather form data
    const fullname = document.getElementById('fullname').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const email = document.getElementById('email').value.trim();
    const category = document.getElementById('category').value;
    const design = document.getElementById('design').value.trim();
    const message = document.getElementById('message').value.trim();

    // Construct email body
    const subject = encodeURIComponent(`Jewellery Enquiry from ${fullname}`);
    const body = encodeURIComponent(
      `Full Name: ${fullname}\n` +
      `Mobile: ${mobile}\n` +
      `Email: ${email}\n` +
      `Category: ${category}\n` +
      `Interested Design: ${design || 'N/A'}\n\n` +
      `Message:\n${message}`
    );

    // Open email client
    window.location.href = `mailto:omsonihh19@gmail.com?subject=${subject}&body=${body}`;

    // Show success message
    const successMsg = document.getElementById('form-success');
    if (successMsg) {
      successMsg.classList.remove('hidden');
    }

    // Optionally reset form after a delay
    setTimeout(() => {
      form.reset();
      if (successMsg) {
        successMsg.classList.add('hidden');
      }
    }, 5000);
  });
});