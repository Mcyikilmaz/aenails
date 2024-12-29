document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const message = document.getElementById('formMessage');
    message.textContent = "Bedankt! We nemen snel contact met je op.";
    message.style.color = 'green';
    this.reset();
  });
  