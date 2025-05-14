 // Event Handling
 const btn = document.getElementById('actionBtn');
 const output = document.getElementById('output');
 const secretVibe = document.getElementById('secretMsg');

 btn.addEventListener('click', () => output.textContent = 'Button clicked!');

 btn.addEventListener('mouseover', () => {
   output.textContent = 'Hovered over the button!';
 });

 document.addEventListener('keydown', (e) => {
   output.textContent = `Key pressed: ${e.key}`;
 });

 let clickTimer;
 btn.addEventListener('mousedown', () => {
   clickTimer = setTimeout(() => secretMsg.style.display = 'block', 1000);
 });
 btn.addEventListener('mouseup', () => {
   clearTimeout(clickTimer);
 });
 btn.addEventListener('dblclick', () => {
   secretVibe.style.display = 'block';
 });
 // Color change button
 const colorBtn = document.getElementById('colorBtn');
 colorBtn.addEventListener('click', () => {
   colorBtn.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
 });
// Image Gallery
const imgs = document.querySelectorAll('.gallery img');
let current = 1;
document.getElementById('nextImg').addEventListener('click', () => {
  imgs[current].classList.remove('active');
  current = (current + 1) % imgs.length;
  imgs[current].classList.add('active');
});
// Tabs
function showTab(id) {
  document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}
// Form Validation
const form = document.getElementById('myForm');
const email = document.getElementById('email');
const password = document.getElementById('password');
const emailFeedback = document.getElementById('emailFeedback');
const passwordFeedback = document.getElementById('passwordFeedback');

email.addEventListener('input', () => {
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value);
  email.className = valid ? 'valid' : 'invalid';
  emailFeedback.textContent = valid ? '' : 'Please enter a valid email.';
});
password.addEventListener('input', () => {
  const valid = password.value.length >= 8;
  password.className = valid ? 'valid' : 'invalid';
  passwordFeedback.textContent = valid ? '' : 'Password must be minimum 8 characters.';
});
form.addEventListener('submit', (e) => {
  if (!email.value || !password.value || email.className === 'invalid' || password.className === 'invalid') {
    e.preventDefault();
    alert('Please fix the form before submitting.');
  }
});