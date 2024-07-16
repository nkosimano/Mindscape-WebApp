function startMindScape() {
    // Get user input and settings
    const objective = objectiveInput.value.trim(); // Trim whitespace
    const level = levelSelect.value;
    const keywords = keywordsInput.value.split(',').map(kw => kw.trim()); // Get and clean keywords

    // Input Validation (Optional, but recommended)
    if (objective === "" || keywords.length === 0) {
        alert("Please enter both your learning objective and at least one keyword.");
        return; // Don't start the game if input is invalid
    }

    // Hide the intention section and show the game section
    intentionSection.style.display = 'none';
    gameSection.style.display = 'block';
    homeButton.style.display = 'block'; // Show home button

    // Clear previous game content (if any)
    gameArea.innerHTML = '';

    // Create initial game element (replace with your actual game logic)
    const gameTitle = document.createElement('h2');
    gameTitle.textContent = `Your Quest: ${objective}`;
    gameArea.appendChild(gameTitle);

    // Display keywords (adjust based on your game mechanics)
    const keywordList = document.createElement('ul');
    keywords.forEach(keyword => {
        const listItem = document.createElement('li');
        listItem.textContent = keyword;
        keywordList.appendChild(listItem);
    });
    gameArea.appendChild(keywordList);

    // Initialize game state (replace with your game variables)
    let currentQuestion = 1;
    let score = 0;

    // Function to display a question or game element (customize based on your game)
    function displayQuestion() {
        // ... (Your game logic to create questions, interactions, etc.)
    }

    // Start the game by displaying the first question
    displayQuestion();

    // Reset the hint flag
    hintUsed = false;
}

function resetGame() {
    // Hide game section, show intention section, hide home button
    gameSection.style.display = 'none';
    intentionSection.style.display = 'block';
    homeButton.style.display = 'none';

    // Clear input fields
    objectiveInput.value = '';
    keywordsInput.value = '';
}
