document.addEventListener('DOMContentLoaded' , (event) => {
    console.log ("DOM fully loaded and parsed")
});
document.addEventListener('DOMContentLoaded', () => {
    const placeBetBtn = document.getElementById('place-bet-btn');
    const betAmountInput = document.getElementById('bet-amount');
    const resultsDiv = document.getElementById('results');
    const sportButtons = document.querySelectorAll('.sport-btn');

    sportButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedSport = button.getAttribute('data-sport');
            console.log('Selected sport:', selectedSport);
            // You can use the selectedSport value to make API requests or update the UI accordingly
        });
    });

    placeBetBtn.addEventListener('click', () => {
        const betAmount = betAmountInput.value;
        // Make an API call to place the bet
        // For demonstration purposes, let's just display the bet amount
        resultsDiv.innerHTML = `You placed a bet of $${betAmount}`;
    });
});
