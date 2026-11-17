document.addEventListener('DOMContentLoaded', () => {
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
});
