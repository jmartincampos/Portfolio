// Add your JavaScript here
document.getElementById('toggleBio').addEventListener('click', function() {
  const portfolioBody = document.getElementById('portfolioBody');
  portfolioBody.classList.toggle('portfolio-animation');
});

// Toggle animation on button click
document.getElementById('toggleBio').addEventListener('click', function() {
  toggleAnimation('portfolioBody');
});

// Example: Dynamically update animation duration
document.getElementById('changeDurationBtn').addEventListener('click', function() {
  const newDuration = prompt('Enter new animation duration (in seconds):');
  document.documentElement.style.setProperty('--animation-duration', newDuration + 's');
});

function revealPortfolioBody() {
  const portfolioBody = document.getElementById('portfolioBody');
  portfolioBody.style.opacity = '1'; // Change opacity to reveal
}
  