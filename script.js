let totalNavbarDonations = 0;

// Update Amount Button when a donation is made
function updateAmountButton() {
  const amountButton = document.getElementById("amount-button");
  amountButton.textContent = `Amount: ${totalNavbarDonations.toFixed(2)} BDT`;
}

// Attach event listeners to "Donate Now" buttons
document.querySelectorAll("#donate-now").forEach((button) => {
  button.addEventListener("click", () => {
    const parentSection = button.closest(".container");
    const donationInput = parentSection.querySelector("#donation-input");
    const donationAmount = parseFloat(donationInput.value);

    if (!isNaN(donationAmount) && donationAmount > 0) {
      totalNavbarDonations += donationAmount;
      updateAmountButton();
    }
  });
});

let totalDonations = 0;
let donationHistory = [];

// Function to show or hide the display area with content
function updateDisplayArea(content, title) {
  const displayArea = document.getElementById("display-area");
  displayArea.classList.remove("hidden");
  displayArea.innerHTML = `<h2 class="text-2xl font-semibold text-gray-800">${title}</h2>${content}`;
}

// Attach event listeners to "Donate Now" buttons
document.querySelectorAll("#donate-now").forEach((button) => {
  button.addEventListener("click", () => {
    const parentSection = button.closest(".container");
    const donationInput = parentSection.querySelector("#donation-input");
    const donationCounter = parentSection.querySelector("#donation-counter");

    const donationAmount = parseFloat(donationInput.value);

    if (!isNaN(donationAmount) && donationAmount > 0) {
      totalDonations += donationAmount;

      // Add donation to history with timestamp
      donationHistory.push({
        amount: donationAmount,
        time: new Date().toLocaleString(),
      });

      // Update local counter
      let currentAmount = parseFloat(
        donationCounter.textContent.replace(" BDT", "")
      );
      currentAmount += donationAmount;
      donationCounter.innerHTML = `<img src="./images/coin.png" alt="" /> ${currentAmount.toFixed(
        2
      )} BDT`;

      donationInput.value = ""; // Clear input
    } else {
      alert("Please enter a valid donation amount!");
    }
  });
});

