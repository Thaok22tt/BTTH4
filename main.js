const triangle = document.getElementById('triangle');
const details = document.getElementById('details');

let isDetailsShown = false; // Flag to track visibility state

triangle.addEventListener('click', () => {
  if (isDetailsShown) {
    details.style.display = 'none';
    const icon = triangle.querySelector('.icon');
    const text = triangle.querySelector('span');
    text.textContent = 'Show-details';
    icon.classList.remove('bxs-down-arrow');
    icon.classList.add('bxs-right-arrow');
    isDetailsShown = false;
  } else {
    details.style.display = 'block';
    const icon = triangle.querySelector('.icon');
    const text = triangle.querySelector('span');
    text.textContent = 'Hide-details';
    icon.classList.remove('bxs-right-arrow');
    icon.classList.add('bxs-down-arrow');
    isDetailsShown = true;
  }
});







