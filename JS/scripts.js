// Adding event listeners to each FAQ question
document.querySelectorAll('.faq-question').forEach(question => {
  // For each question, when it's clicked:
  question.addEventListener('click', function() {
      // Get the answer element that follows the question
      const answer = this.nextElementSibling;
      // Get the toggle icon (plus or minus)
      const icon = this.querySelector('.toggle-icon');
      
      // Check if the answer is currently visible
      if (answer.style.display === 'block') {
          // If the answer is visible, hide it and change icon to plus
          answer.style.display = 'none';
          icon.textContent = '+'; // Show the plus icon
      } else {
          // If the answer is hidden, show it and change icon to minus
          answer.style.display = 'block';
          icon.textContent = '−'; // Show the minus icon
      }
  });
});

// Function to toggle visibility of all answers when the "Show/Hide All Answers" button is clicked
function toggleAllAnswers() {
  // Get all the answer elements
  const answers = document.querySelectorAll('.faq-answer');
  // Get all the toggle icons (plus or minus)
  const iconToggles = document.querySelectorAll('.toggle-icon');
  
  // Loop through each answer and toggle its visibility
  answers.forEach(answer => {
      if (answer.style.display === 'block') {
          // If the answer is visible, hide it
          answer.style.display = 'none';
      } else {
          // If the answer is hidden, show it
          answer.style.display = 'block';
      }
  });
  
  // Loop through each icon and toggle its symbol (plus or minus)
  iconToggles.forEach(icon => {
      icon.textContent = (icon.textContent === '+') ? '−' : '+'; // Switch icon
  });
}
