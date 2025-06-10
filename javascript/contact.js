

let darkmode = localStorage.getItem('darkmode')
const themeswitch = document.getElementById('theme-switch')

const enableDarkMode = () =>
{
  document.body.classList.add('darkmode')
  localStorage.setItem('darkmode', 'active')
}
const disableDarkMode = () =>
{
  document.body.classList.remove('darkmode')
  localStorage.setItem('darkmode', null)
}

if(darkmode === 'active') enableDarkMode()

themeswitch.addEventListener("click", () => {
  darkmode = localStorage.getItem('darkmode')
  darkmode !== "active" ? enableDarkMode() : disableDarkMode()
})


document.addEventListener('DOMContentLoaded', () => {


  
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