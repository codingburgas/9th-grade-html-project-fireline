document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    const savedTheme = localStorage.getItem('theme');
    const initialTheme = savedTheme || 'light';
    html.setAttribute('data-theme', initialTheme);
    toggle.textContent = initialTheme === 'light' ? '🌙' : '☀️';
  
    toggle.addEventListener('click', () => {
      const current = html.getAttribute('data-theme');
      const next = current === 'light' ? 'dark' : 'light';
      html.setAttribute('data-theme', next);
      toggle.textContent = next === 'light' ? '🌙' : '☀️';
      localStorage.setItem('theme', next);
    });
  
    const messageField = document.getElementById('message');
    const countDisplay = document.getElementById('char-count');
    messageField.addEventListener('input', () => {
      countDisplay.textContent = messageField.value.length;
    });
  
    const form = document.querySelector('.contact-form');
    const feedback = document.getElementById('form-feedback');
  
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const { name, email, subject, message } = form;
      if (!name.value.trim() || !email.value.trim() || !subject.value.trim() || !message.value.trim()) {
        feedback.textContent = 'Моля, попълнете всички полета.';
        feedback.style.color = 'red';
        return;
      }
      feedback.textContent = 'Изпращане...';
      feedback.style.color = '';
      form.querySelector('.btn-submit').disabled = true;
  
      setTimeout(() => {
        feedback.textContent = `Благодаря, ${name.value.trim()}! Съобщението е изпратено.`;
        feedback.style.color = 'green';
        form.reset();
        countDisplay.textContent = '0';
        form.querySelector('.btn-submit').disabled = false;
      }, 1000);
    });
  });